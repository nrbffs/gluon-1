"use strict";function initOSM(e,o){var t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.href=e+"/css/ol.css",document.head.appendChild(t);var n=document.createElement("script"),r=!1;n.onload=n.onreadystatechange=function(){if(!(r||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState)){r=!0;var t=new Image;t.onload=function(){var e=new ol.style.Style({image:new ol.style.Icon({img:t,imgSize:[30,45],anchor:[.5,1]})}),c=new ol.Feature;c.setStyle(e),o(function(e,t,o,n,r){var a=new ol.Map({target:e,layers:[new ol.layer.Tile({source:new ol.source.OSM}),new ol.layer.Vector({source:new ol.source.Vector({features:[c]})})],view:new ol.View({center:ol.proj.fromLonLat(t),zoom:o})}),l=function(e){c.setGeometry(new ol.geom.Point(e))};return a.addEventListener("click",function(e){l(e.coordinate),r(ol.proj.toLonLat(e.coordinate))}),n&&l(ol.proj.fromLonLat(t)),a})},t.src="data:image/svg+xml,"+escape('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="30" height="45"><path d="M2,15A13,13,0,0,1,28,13Q28,28,15,45Q2,28,2,15" fill="#48b" stroke="#369" stroke-width="1.5" /><circle cx="15" cy="15" r="6" fill="#fff" /></svg>')}},n.src=e+"/build/ol.js",document.head.appendChild(n)}