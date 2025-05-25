// app/components/Map.tsx
import { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

export default function Map() {
    const mapContainer = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<maplibregl.Map | null>(null);

    useEffect(() => {
        if (!mapContainer.current) return;

        const map = new maplibregl.Map({
            container: mapContainer.current,
            style: 'https://demotiles.maplibre.org/style.json',
            center: [0, 0],
            zoom: 2,
        });

        mapRef.current = map;

        return () => {
            map.remove();
        };
    }, []);

    return <div ref={mapContainer} className="w-full h-[500px]" />;
}
