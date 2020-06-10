
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "OpenStreetMap_0": {
            "type": "raster",
            "tiles": ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "50MAX_RCA_Bridge_RestrictionsFreight_RCA_Bridge_Restrictions_50MAX_1": {
            "type": "geojson",
            "data": json_50MAX_RCA_Bridge_RestrictionsFreight_RCA_Bridge_Restrictions_50MAX_1
        }
                    ,
        "50MAX_RCA_Road_RestrictionsFreight_RCA_Road_Restrictions_50MAX_2": {
            "type": "geojson",
            "data": json_50MAX_RCA_Road_RestrictionsFreight_RCA_Road_Restrictions_50MAX_2
        }
                    ,
        "50MAX_SH_Road_Restrictions1Freight_SH_Restrictions_50MAX_3": {
            "type": "geojson",
            "data": json_50MAX_SH_Road_Restrictions1Freight_SH_Restrictions_50MAX_3
        }
                    ,
        "State_Highway_Traffic_Monitoring_Sites3322e812_77e2_4f75_af98_ac560c9828502020328_1_1x1m43aayuc_4": {
            "type": "geojson",
            "data": json_State_Highway_Traffic_Monitoring_Sites3322e812_77e2_4f75_af98_ac560c9828502020328_1_1x1m43aayuc_4
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_OpenStreetMap_0_0",
            "type": "raster",
            "source": "OpenStreetMap_0"
        },
        {
            "id": "lyr_50MAX_RCA_Bridge_RestrictionsFreight_RCA_Bridge_Restrictions_50MAX_1_0",
            "type": "circle",
            "source": "50MAX_RCA_Bridge_RestrictionsFreight_RCA_Bridge_Restrictions_50MAX_1",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.5590551182, 2], 'circle-color': '#e15989', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_50MAX_RCA_Road_RestrictionsFreight_RCA_Road_Restrictions_50MAX_2_0",
            "type": "line",
            "source": "50MAX_RCA_Road_RestrictionsFreight_RCA_Road_Restrictions_50MAX_2",
            "layout": {},
            "paint": {'line-width': 0.982677165366, 'line-opacity': 1.0, 'line-color': '#91522d'}
        }
,
        {
            "id": "lyr_50MAX_SH_Road_Restrictions1Freight_SH_Restrictions_50MAX_3_0",
            "type": "circle",
            "source": "50MAX_SH_Road_Restrictions1Freight_SH_Restrictions_50MAX_3",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.5590551182, 2], 'circle-color': '#85b66f', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_State_Highway_Traffic_Monitoring_Sites3322e812_77e2_4f75_af98_ac560c9828502020328_1_1x1m43aayuc_4_0",
            "type": "circle",
            "source": "State_Highway_Traffic_Monitoring_Sites3322e812_77e2_4f75_af98_ac560c9828502020328_1_1x1m43aayuc_4",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.5590551182, 2], 'circle-color': '#d5b43c', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
],
}