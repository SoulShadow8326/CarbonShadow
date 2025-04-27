"use client"

import { useEffect, useRef } from "react"

export default function GlobeVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const container = canvas.parentElement
      if (!container) return

      canvas.width = container.clientWidth
      canvas.height = container.clientHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create points representing countries
    const points = [
      {
        x: canvas.width * 0.2,
        y: canvas.height * 0.3,
        radius: 15,
        color: "#FF6B6B",
        label: "USA",
        gdp: 21.4,
        emissions: 5.0,
      },
      {
        x: canvas.width * 0.7,
        y: canvas.height * 0.3,
        radius: 20,
        color: "#4ECDC4",
        label: "China",
        gdp: 14.7,
        emissions: 10.5,
      },
      {
        x: canvas.width * 0.4,
        y: canvas.height * 0.2,
        radius: 10,
        color: "#2E3A59",
        label: "Germany",
        gdp: 3.8,
        emissions: 0.8,
      },
      {
        x: canvas.width * 0.8,
        y: canvas.height * 0.2,
        radius: 12,
        color: "#A1C4FD",
        label: "Japan",
        gdp: 5.0,
        emissions: 1.1,
      },
      {
        x: canvas.width * 0.5,
        y: canvas.height * 0.6,
        radius: 8,
        color: "#FF9F1C",
        label: "India",
        gdp: 2.9,
        emissions: 2.5,
      },
      {
        x: canvas.width * 0.3,
        y: canvas.height * 0.7,
        radius: 7,
        color: "#E76F51",
        label: "Brazil",
        gdp: 1.8,
        emissions: 0.5,
      },
    ]

    // Animation variables
    let animationFrameId: number

    // Draw function
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw a subtle grid
      ctx.beginPath()
      ctx.strokeStyle = "rgba(200, 200, 200, 0.1)"
      ctx.lineWidth = 1

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += 30) {
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
      }

      // Vertical lines
      for (let x = 0; x < canvas.width; x += 30) {
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
      }
      ctx.stroke()

      // Draw connections between points
      ctx.beginPath()
      ctx.strokeStyle = "rgba(200, 200, 200, 0.2)"
      ctx.lineWidth = 1

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const distance = Math.sqrt(Math.pow(points[i].x - points[j].x, 2) + Math.pow(points[i].y - points[j].y, 2))

          // Only connect points that are somewhat close
          if (distance < canvas.width * 0.4) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(200, 200, 200, ${0.2 - distance / (canvas.width * 0.8)})`
            ctx.moveTo(points[i].x, points[i].y)
            ctx.lineTo(points[j].x, points[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw glow effects
      points.forEach((point) => {
        const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, point.radius * 3)
        gradient.addColorStop(0, point.color + "40")
        gradient.addColorStop(1, point.color + "00")

        ctx.beginPath()
        ctx.fillStyle = gradient
        ctx.arc(point.x, point.y, point.radius * 3, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw points
      points.forEach((point) => {
        // Draw circle
        ctx.beginPath()
        ctx.fillStyle = point.color
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2)
        ctx.fill()

        // Draw border
        ctx.beginPath()
        ctx.strokeStyle = "#ffffff"
        ctx.lineWidth = 2
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2)
        ctx.stroke()

        // Draw label
        ctx.font = "bold 12px Inter, sans-serif"
        ctx.fillStyle = "#ffffff"
        ctx.textAlign = "center"
        ctx.fillText(point.label, point.x, point.y - point.radius - 10)

        // Draw data
        ctx.font = "10px Roboto, sans-serif"
        ctx.fillStyle = "#ffffff"
        ctx.fillText(`GDP: $${point.gdp}T`, point.x, point.y + point.radius + 15)
        ctx.fillText(`CO₂: ${point.emissions}Gt`, point.x, point.y + point.radius + 30)
      })

      // Animate points slightly
      points.forEach((point) => {
        point.x += Math.sin(Date.now() * 0.001 + points.indexOf(point)) * 0.2
        point.y += Math.cos(Date.now() * 0.001 + points.indexOf(point)) * 0.2
      })

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="w-full h-full relative bg-[#2E3A59] rounded-xl overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className="absolute bottom-2 right-2 text-xs text-white/70">
        Circle size represents relative emissions volume
      </div>
    </div>
  )
}
