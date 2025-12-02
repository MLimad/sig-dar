var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_REGION_2 = new ol.format.GeoJSON();
var features_REGION_2 = format_REGION_2.readFeatures(json_REGION_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REGION_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REGION_2.addFeatures(features_REGION_2);
var lyr_REGION_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REGION_2,
maxResolution:2907.4060331141613,
 minResolution:363.42571913368744,

                style: style_REGION_2,
                popuplayertitle: 'REGION',
                interactive: false,
                title: '<img src="styles/legend/REGION_2.png" /> REGION'
            });
var format_PROVINCE_3 = new ol.format.GeoJSON();
var features_PROVINCE_3 = format_PROVINCE_3.readFeatures(json_PROVINCE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROVINCE_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROVINCE_3.addFeatures(features_PROVINCE_3);
var lyr_PROVINCE_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROVINCE_3,
maxResolution:363.42571913368744,
 minResolution:153.82685230640584,

                style: style_PROVINCE_3,
                popuplayertitle: 'PROVINCE',
                interactive: false,
                title: '<img src="styles/legend/PROVINCE_3.png" /> PROVINCE'
            });
var format_COMMUNES_4 = new ol.format.GeoJSON();
var features_COMMUNES_4 = format_COMMUNES_4.readFeatures(json_COMMUNES_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMMUNES_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMMUNES_4.addFeatures(features_COMMUNES_4);
var lyr_COMMUNES_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMMUNES_4,
maxResolution:186.1865730346676,
 
                style: style_COMMUNES_4,
                popuplayertitle: 'COMMUNES',
                interactive: false,
                title: '<img src="styles/legend/COMMUNES_4.png" /> COMMUNES'
            });
var format_DAR_CHEFCHAOUEN_5 = new ol.format.GeoJSON();
var features_DAR_CHEFCHAOUEN_5 = format_DAR_CHEFCHAOUEN_5.readFeatures(json_DAR_CHEFCHAOUEN_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DAR_CHEFCHAOUEN_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DAR_CHEFCHAOUEN_5.addFeatures(features_DAR_CHEFCHAOUEN_5);
var lyr_DAR_CHEFCHAOUEN_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DAR_CHEFCHAOUEN_5,
maxResolution:186.1865730346676,
 
                style: style_DAR_CHEFCHAOUEN_5,
                popuplayertitle: 'DAR_CHEFCHAOUEN',
                interactive: true,
    title: 'DAR_CHEFCHAOUEN<br />\
    <img src="styles/legend/DAR_CHEFCHAOUEN_5_0.png" /> DA<br />\
    <img src="styles/legend/DAR_CHEFCHAOUEN_5_1.png" /> REQ<br />\
    <img src="styles/legend/DAR_CHEFCHAOUEN_5_2.png" /> TF<br />\
    <img src="styles/legend/DAR_CHEFCHAOUEN_5_3.png" /> PC<br />' });
var group_DECOUPAGEADMINISTRATIF = new ol.layer.Group({
                                layers: [lyr_REGION_2,lyr_PROVINCE_3,lyr_COMMUNES_4,],
                                fold: 'open',
                                title: 'DECOUPAGE ADMINISTRATIF'});

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_REGION_2.setVisible(true);lyr_PROVINCE_3.setVisible(true);lyr_COMMUNES_4.setVisible(true);lyr_DAR_CHEFCHAOUEN_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,group_DECOUPAGEADMINISTRATIF,lyr_DAR_CHEFCHAOUEN_5];
lyr_REGION_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'CODE_REGIO': 'CODE_REGIO', 'Population': 'Population', 'Menages': 'Menages', 'Etrangers': 'Etrangers', 'Marocains': 'Marocains', 'Nom_Region': 'Nom_Region', 'RuleID': 'RuleID', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_PROVINCE_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Code_Provi': 'Code_Provi', 'Population': 'Population', 'Menages': 'Menages', 'Etrangers': 'Etrangers', 'Marocains': 'Marocains', 'Nom_Provin': 'Nom_Provin', 'Code_Regio': 'Code_Regio', 'Superficie': 'Superficie', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_COMMUNES_4.set('fieldAliases', {'fid': 'fid', 'nom_objet': 'nom_objet', 'id_lyr': 'id_lyr', 'id_metier': 'id_metier', 'mapId': 'mapId', 'typeGeom': 'typeGeom', 'provincemt': 'provincemt', 'regionmt': 'regionmt', 'id_objet': 'id_objet', 'to_update': 'to_update', 'to_delete': 'to_delete', 'id_objet_dar': 'id_objet_dar', 'approuve': 'approuve', 'categorie_org': 'categorie_org', 'ORGANISME': 'ORGANISME', 'Cercle': 'Cercle', 'COMMUNE': 'COMMUNE', 'Centre': 'Centre', 'Region_Fr': 'Region_Fr', 'Region_Ar': 'Region_Ar', 'Province_F': 'Province_F', 'Province_A': 'Province_A', 'PROVINCE': 'PROVINCE', 'REGION': 'REGION', 'Commune old': 'Commune old', 'CODE': 'CODE', });
lyr_DAR_CHEFCHAOUEN_5.set('fieldAliases', {'REGION': 'REGION', 'PROVINCE': 'PROVINCE', 'CERCLE': 'CERCLE', 'CAIDAT': 'CAIDAT', 'COMMUNE': 'COMMUNE', 'COLLECTIVITE_ETH': 'COLLECTIVITE_ETH', 'FONCIER_ETH': 'FONCIER_ETH', 'SITUATION': 'SITUATION', 'SURFACE_HA': 'SURFACE_HA', 'NUM_TITRE': 'NUM_TITRE', 'NUM_REQ': 'NUM_REQ', 'NUM_DA': 'NUM_DA', 'WKT': 'WKT', 'SURFACE_GRAPHIQUE': 'SURFACE_GRAPHIQUE', });
lyr_REGION_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'CODE_REGIO': 'TextEdit', 'Population': 'TextEdit', 'Menages': 'TextEdit', 'Etrangers': 'TextEdit', 'Marocains': 'TextEdit', 'Nom_Region': 'TextEdit', 'RuleID': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_PROVINCE_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Code_Provi': 'TextEdit', 'Population': 'TextEdit', 'Menages': 'TextEdit', 'Etrangers': 'TextEdit', 'Marocains': 'TextEdit', 'Nom_Provin': 'TextEdit', 'Code_Regio': 'TextEdit', 'Superficie': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_COMMUNES_4.set('fieldImages', {'fid': 'TextEdit', 'nom_objet': 'TextEdit', 'id_lyr': 'TextEdit', 'id_metier': 'TextEdit', 'mapId': 'Range', 'typeGeom': 'TextEdit', 'provincemt': 'TextEdit', 'regionmt': 'TextEdit', 'id_objet': 'TextEdit', 'to_update': 'TextEdit', 'to_delete': 'TextEdit', 'id_objet_dar': 'TextEdit', 'approuve': 'TextEdit', 'categorie_org': 'TextEdit', 'ORGANISME': 'TextEdit', 'Cercle': 'TextEdit', 'COMMUNE': 'TextEdit', 'Centre': 'TextEdit', 'Region_Fr': 'TextEdit', 'Region_Ar': 'TextEdit', 'Province_F': 'TextEdit', 'Province_A': 'TextEdit', 'PROVINCE': 'TextEdit', 'REGION': 'TextEdit', 'Commune old': 'TextEdit', 'CODE': 'TextEdit', });
lyr_DAR_CHEFCHAOUEN_5.set('fieldImages', {'REGION': 'TextEdit', 'PROVINCE': 'TextEdit', 'CERCLE': 'TextEdit', 'CAIDAT': 'TextEdit', 'COMMUNE': 'TextEdit', 'COLLECTIVITE_ETH': 'TextEdit', 'FONCIER_ETH': 'TextEdit', 'SITUATION': 'TextEdit', 'SURFACE_HA': 'TextEdit', 'NUM_TITRE': 'TextEdit', 'NUM_REQ': 'TextEdit', 'NUM_DA': 'TextEdit', 'WKT': 'TextEdit', 'SURFACE_GRAPHIQUE': 'TextEdit', });
lyr_REGION_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'CODE_REGIO': 'no label', 'Population': 'no label', 'Menages': 'no label', 'Etrangers': 'no label', 'Marocains': 'no label', 'Nom_Region': 'no label', 'RuleID': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_PROVINCE_3.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Code_Provi': 'no label', 'Population': 'no label', 'Menages': 'no label', 'Etrangers': 'no label', 'Marocains': 'no label', 'Nom_Provin': 'no label', 'Code_Regio': 'no label', 'Superficie': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_COMMUNES_4.set('fieldLabels', {'fid': 'no label', 'nom_objet': 'no label', 'id_lyr': 'no label', 'id_metier': 'no label', 'mapId': 'no label', 'typeGeom': 'no label', 'provincemt': 'no label', 'regionmt': 'no label', 'id_objet': 'no label', 'to_update': 'no label', 'to_delete': 'no label', 'id_objet_dar': 'no label', 'approuve': 'no label', 'categorie_org': 'no label', 'ORGANISME': 'no label', 'Cercle': 'no label', 'COMMUNE': 'no label', 'Centre': 'no label', 'Region_Fr': 'no label', 'Region_Ar': 'no label', 'Province_F': 'no label', 'Province_A': 'no label', 'PROVINCE': 'no label', 'REGION': 'no label', 'Commune old': 'no label', 'CODE': 'no label', });
lyr_DAR_CHEFCHAOUEN_5.set('fieldLabels', {'REGION': 'inline label - visible with data', 'PROVINCE': 'inline label - visible with data', 'CERCLE': 'inline label - visible with data', 'CAIDAT': 'inline label - visible with data', 'COMMUNE': 'inline label - visible with data', 'COLLECTIVITE_ETH': 'inline label - visible with data', 'FONCIER_ETH': 'inline label - visible with data', 'SITUATION': 'inline label - visible with data', 'SURFACE_HA': 'inline label - visible with data', 'NUM_TITRE': 'header label - always visible', 'NUM_REQ': 'inline label - visible with data', 'NUM_DA': 'inline label - visible with data', 'WKT': 'hidden field', 'SURFACE_GRAPHIQUE': 'hidden field', });
lyr_DAR_CHEFCHAOUEN_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});