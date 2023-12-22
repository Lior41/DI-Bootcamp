import geopandas as gpd
import matplotlib.pyplot as plt
import matplotlib.lines as mlines
# from adjustText import adjust_text
from matplotlib.lines import Line2D

def load_data():
    """
    Load and return the geographic data.
    """

data_stats = [
('Palestinian Territories', 93, '18-49', 92),
('Palestinian Territories', 93, '50+', 98),
('Iraq', 92, 'All Ages', 33),
('Yemen', 88, '50+', 79),
('Yemen', 88, '35-49', 92),
('Yemen', 88, '18-34', 89),
('Algeria', 87, 'All Ages', 92), 
('Libya', 87, 'All Ages', 87),
('Tunisia', 86, 'All Ages', 86), 
('Kuwait', 82, 'Female', 77),
('Kuwait', 82, 'Male', 85),
('Bahrain', 81, 'Under 34', 77),
('Bahrain', 81, '35+', 86),
('Jordan', 81, 'All Ages', 84), 
('Morocco', 80, '50+', 75),
('Morocco', 80, '35-49', 79),
('Morocco', 80, '18-34', 84),
('Qatar', 80, 'All Ages', 82),
('United Arab Emirates', 80, 'All Ages', 80)
]


locations = {
    'Palestinian Territories': (31.9522, 35.2332),
    'Iraq': (33.2232, 43.6793),
    'Yemen': (15.5527, 48.5164),
    'Algeria': (28.0339, 1.6596),
    'Libya': (26.3351, 17.2283),
    'Tunisia': (33.8869, 9.5375),
    'Kuwait': (29.3117, 47.4818),
    'Bahrain': (26.0667, 50.5577),
    'Jordan': (31.9454, 35.9284),
    'Morocco': (31.7917, -7.0926),
    'Qatar': (25.3548, 51.1839),
    'United Arab Emirates': (23.4241, 53.8478)
}

def calculate_marker_size(value):
    return value / 8  # Ajustez ce diviseur pour changer la taille

# Fonction pour obtenir la couleur
def get_color(value):
    return plt.cm.viridis(value / 100.0)

# Création de DataFrame géographique
gdf = gpd.GeoDataFrame(data_stats, columns=['Country', 'Value', 'Age_Group', 'Anti_Jewish_Feeling'])
gdf['geometry'] = gdf['Country'].apply(lambda x: gpd.points_from_xy([locations[x][1]], [locations[x][0]])[0])
gdf.crs = 'EPSG:4326'

# Lecture de la carte du monde
world = gpd.read_file(gpd.datasets.get_path('naturalearth_lowres'))

legend_labels = [f"{country} ({age_group}: {feeling}%)"
                 for country, _, age_group, feeling in data_stats]
legend_handles = [Line2D([0], [0], marker='o', color=plt.cm.viridis(i / 100.0), 
                         linestyle='', markersize=5 + i / 20) for i in range(0, 101, 20)]
# Préparation de la figure
fig, ax = plt.subplots(figsize=(15, 10))
ax.set_title('Most Antisemitic Countries')
world.plot(ax=ax, color='lightgrey')

ax.set_xlim(-25, 200)

# Ajout des marqueurs et des textes
texts = []
for idx, row in gdf.iterrows():
    x, y = row.geometry.x, row.geometry.y
    color = get_color(row['Anti_Jewish_Feeling'])
    marker_size = calculate_marker_size(row['Anti_Jewish_Feeling'])
    ax.plot(x, y, 'o', markersize=marker_size, color=color)
    # text = ax.text(x, y, f"{row['Country']} ({row['Age_Group']}: {row['Anti_Jewish_Feeling']}%)", fontsize=8, ha='right', va='bottom', color='red')  # Couleur du texte en rouge
    # texts.append(text)

# Ajustement automatique des textes pour réduire le chevauchement
# adjust_text(texts, arrowprops=dict(arrowstyle='->', color='gray'))
ax.legend(handles=legend_handles, labels=legend_labels, loc='lower left', title='Anti-Jewish Feeling')

plt.show()