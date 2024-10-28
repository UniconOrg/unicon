import React from 'react';
import { LatLngExpression } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Ubication.css'



// Establecer la ubicación de la CDMX
const cdmxLocation: LatLngExpression = [19.4326, -99.1332];

const UbicationSection: React.FC = () => {

    return (
        <div className='ubiaction-container' id='ubication-section'>
            <h2>Ubicación</h2>
            <p>Ciudad de México, México</p>
            <p>Ubicacion exacta por definir</p>
            <MapContainer
                center={cdmxLocation}
                zoom={12}
                className='map'
                scrollWheelZoom={false}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={cdmxLocation}>
                    <Popup>Ciudad de México</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default UbicationSection;
