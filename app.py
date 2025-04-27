from flask import Flask
import panel as pn
from panel.pane import Markdown
import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA
import plotly.express as px

app = Flask(__name__)

@app.route('/')
def dashboard():
    # Your data processing code here
    e = pd.read_csv('data/CO2_Emissions.csv', encoding='ISO-8859-1')
    e = e[['Country', 'Year', 'CO2 emission (Tons)', 'Population(2022)', 'Area', '% of World', 'Density(km2)']]
    e = e.dropna(subset=['CO2 emission (Tons)', 'Population(2022)', 'Area', '% of World', 'Density(km2)'])
    e['CO2_emission'] = pd.to_numeric(e['CO2 emission (Tons)'], errors='coerce')
    e['Population'] = pd.to_numeric(e['Population(2022)'], errors='coerce')
    e['Area'] = pd.to_numeric(e['Area'], errors='coerce')
    e['Density'] = (
        e['Density(km2)']
        .astype(str)
        .str.extract(r'([\d,.]+)')[0]
        .str.replace(',', '')
        .astype(float)
    )
    e['Percent_of_World'] = pd.to_numeric(e['% of World'].str.rstrip('%'), errors='coerce') / 100
    e['CO2_per_capita'] = e['CO2_emission'] / e['Population']
    e = e[['Country', 'Year', 'CO2_emission', 'Population', 'Area', 'Percent_of_World', 'Density', 'CO2_per_capita']]
    
    features = ['CO2_emission', 'Population', 'Area', 'Percent_of_World', 'Density', 'CO2_per_capita']
    x = StandardScaler().fit_transform(e[features])
    pc = PCA(n_components=2).fit_transform(x)
    e['PC1'], e['PC2'] = pc[:, 0], pc[:, 1]
    
    fig = px.scatter(
        e,
        x='PC1',
        y='PC2',
        color='Country',
        hover_name='Country',
        size='CO2_per_capita',
        template='plotly_dark',
        title='Innovation\'s Carbon Shadow: Emissions vs. Technology'
    )
    fig.update_layout(
        xaxis_title='Emission Scale (PC1)',
        yaxis_title='Emission Intensity (PC2)',
        plot_bgcolor='black',
        paper_bgcolor='black',
        font=dict(color='white'),
        margin=dict(l=40, r=40, t=80, b=40)
    )
    
    dashboard = pn.Column(
        pn.pane.Markdown(
            "### Innovation’s Carbon Shadow\n\n"
            "Clusters:\n"
            "- High Emission Giants\n"
            "- Industrializing Economies\n"
            "- Low Carbon Leaders"
        ),
        pn.pane.Plotly(fig, config={'displayModeBar': False, 'scrollZoom': True})
    )
    
    return dashboard.servable()

if __name__ == '__main__':
    app.run(debug=True)
