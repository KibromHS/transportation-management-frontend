import Rect, { useState, useEffect, useCallback, useRef } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindowF,
  Libraries,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const libraries: Libraries = ["places"];

const GoogleTruckMap = ({ trucks }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: libraries,
  });
};

const mapRef = useRef(null);
const onoad = useCallback(function callback(map) {
  mapRef.current = null;
}, []);

const onUnmount = useCallback(function callback(map) {
  mapRef.current = null;
}, []);

const [selectedTruck, setSelectedTruck] = useState(null);

const defaultCenter = { lat: 38.9072, lng: -77.0369 }; // Default center (Washington, DC)
