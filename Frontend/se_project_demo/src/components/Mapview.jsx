import React, {useEffect, useRef, useState} from "react";
import './Mapview.css';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { Map,TileLayer } from "leaflet";

const Mapview = () =>{

    const  [center,setcenter] = useState({lat: 23.0225 ,lng: 72.5714});
    const zoom_level = 9;
    const mapRef = useRef();



 
return (
    <div>
        <Map center={center} zoom = {zoom_level} ref={mapRef}>
            <TileLayer url={'https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=aMjcjZTWexYJQAsbw1G3'} attribution ={'https://api.maptiler.com/maps/basic-v2/tiles.json?key=aMjcjZTWexYJQAsbw1G3'} ></TileLayer>
        </Map>
    </div>
  
);
}

export default Mapview;