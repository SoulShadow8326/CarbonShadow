import pandas as pd
import panel as pn
import plotly.express as px
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA

pn.extension('plotly')

e = pd.read_csv('data/CO2_Emissions.csv')

e['CO2 emission (Tons)'] = e['CO2 emission (Tons)'].str.replace(',', '').astype(float)
e['Population(2022)'] = e['Population(2022)'].str.replace(',', '').astype(float)
e['Area'] = e['Area'].str.replace(',', '').astype(float)
e['Density(km2)'] = e['Density(km2)'].str.replace('/km²', '').str.replace(',', '').astype(float)
e['% of World'] = e['% of World'].str.replace('%', '').astype(float)

e['CO2_per_capita'] = e['CO2 emission (Tons)'] / e['Population(2022)']

features = ['CO2 emission (Tons)', 'Population(2022)', 'Area', '% of World', 'Density(km2)', 'CO2_per_capita']
x = StandardScaler().fit_transform(e[features].dropna())
pca = PCA(n_components=2).fit_transform(x)

e['PC1'] = pca[:,0]
e['PC2'] = pca[:,1]

fig = px.scatter(
    e,
    x='PC1',
    y='PC2',
    color='Country',
    hover_name='Country',
    size='CO2_per_capita',
    template='plotly_dark'
)

fig.update_layout(
    title="Innovation's Carbon Shadow: Emissions vs. Technology (PCA Projection)",
    plot_bgcolor='black',
    paper_bgcolor='black',
    font=dict(color='white')
)

template = pn.template.FastListTemplate(
    title="Innovation's Carbon Shadow",
    header_background='#000000',
    accent_base_color='purple',
    sidebar=[
        pn.pane.Markdown(
            "### Clusters\n"
            "- High Emission Giants\n"
            "- Industrializing Economies\n"
            "- Low Carbon Leaders\n"
        )
    ],
    main=[
        pn.pane.Markdown(
            "### Emissions vs. Technology (PCA Projection)\n"
            "This projection condenses key climate metrics into two dimensions."
        ),
        pn.pane.Plotly(fig, config={'displayModeBar': False, 'scrollZoom': True}, sizing_mode='stretch_width')
    ],
    main_max_width='90%'
)

template.servable()
