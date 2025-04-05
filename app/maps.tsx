// components/GoogleMapView.tsx

import { useEffect, useRef } from "react";

const pois = [
  { name: "Mumbai", lat: 19.0760, lng: 72.8777 },
  { name: "Vile Parle", lat: 19.1006, lng: 72.8499 },
];

export default function GoogleMapView() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    const initMap = () => {
      if (!window.google || !mapRef.current) return;

      const map = new window.google.maps.Map(mapRef.current, {
        zoom: 10,
        center: { lat: 19.0760, lng: 72.8777 },
      });

      pois.forEach(({ name, lat, lng }) => {
        new window.google.maps.Marker({
          position: { lat, lng },
          map,
          title: name,
        });
      });

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            map.setCenter(userLocation);
            new window.google.maps.Marker({
              position: userLocation,
              map,
              title: "Your Location",
              icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
            });
          },
          () => console.warn("Geolocation permission denied.")
        );
      }
    };

    if (!window.google && apiKey) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
      script.async = true;
      script.onload = initMap;
      document.body.appendChild(script);
    } else if (window.google) {
      initMap();
    }
  }, []);

  return <div ref={mapRef} className="w-full h-[500px] rounded-xl border" />;
}
