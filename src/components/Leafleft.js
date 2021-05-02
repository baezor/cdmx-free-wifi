
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LocationIcon } from './LocationIcon';
import API from '../api';

export default function LeafLeft(){
    return(
        <MapContainer center={[19.432608, -99.133209]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
          url='https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}'
          maxZoom={18}
          id={'mapbox/streets-v11'}
          tileSize={512}
          zoomOffset={-1}
          accessToken={'pk.eyJ1IjoiYmFlem9yIiwiYSI6ImNrbnowaDA4ODAweXYyb25zZ3NwZzZrancifQ.kqtxLGqycOOti7WtwyZLkw'}
        />
        {API.locations.map(location => (
          <Marker icon={LocationIcon} key={location.IDENTIFICADOR} position={location.geopoint.split(",")}>
            <Popup>
              {`Estado: ${location.CONECTIVIDAD}`}
            </Popup>
          </Marker>
        ))}  
      </MapContainer>
    )
}