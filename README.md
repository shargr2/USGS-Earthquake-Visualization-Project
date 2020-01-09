
## Background

The USGS is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment; and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php)
  
I created visualisations using Javascript & Leaflet for all earthquake data in the 7 days. API link will update automatically so html will update whenever USGS does (Every 5 minutes).



2. **Import & Visualize the Data**

I created a map using Leaflet that plots all of the earthquakes from the data set based on their longitude and latitude.

   * Data markers should reflect the magnitude of the earthquake in their size and color. Earthquakes with higher magnitudes are appear larger and darker in color.

   * I included popups that provide additional information about the earthquake when a marker is clicked.

   * I create a legend that will provide context for your map data.

