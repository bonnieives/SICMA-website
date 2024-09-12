import React from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

const LocationApi = () => {
    const mapStyles = {
        height: "400px",
        width: "30%",
        borderRadius: "10px",
        boxShadow: "0px 4px 6px rgba(0,0,0,0.8)",
        border: "1px solid #979F82"

    };

    const defaultCenter = {
        lat: -5.81601,
        lng: -35.20083
    };

    const sicmaLocation = {
        lat: -5.813808,
        lng: -35.199025
    };

    return (
        <LoadScript googleMapsApiKey="AIzaSyA9odQv6ZF_Qazr8dpn4m14Q29QuTURvSQ">
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={15}
                center={defaultCenter}
            >
                <MarkerF position={sicmaLocation} />
            </GoogleMap>
        </LoadScript>
    );
};

export default LocationApi;
