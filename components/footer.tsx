import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#2E3A59] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Emissions in the Age of Innovation</h3>
            <p className="text-gray-300 mb-4">
              Analyzing the Paradox Between Technological Progress and Global CO₂ Emissions
            </p>
            <p className="text-gray-300">© {new Date().getFullYear()} All Rights Reserved</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Data Sources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://ourworldindata.org/co2-emissions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#4ECDC4] transition-colors duration-300"
                >
                  Our World in Data
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.globalcarbonproject.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#4ECDC4] transition-colors duration-300"
                >
                  Global Carbon Project
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.kaggle.com/datasets"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#4ECDC4] transition-colors duration-300"
                >
                  Kaggle Datasets
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#4ECDC4] transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
