
import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const places = [
  {
    name: "Место нашей первой встречи",
    coordinates: { lng: 37.6173, lat: 55.7558 }, // Fixed coordinates format
    description: "Здесь началась наша история...",
  },
  {
    name: "Наш любимый парк",
    coordinates: { lng: 37.6273, lat: 55.7658 },
    description: "Где мы любим гулять вместе",
  },
];

const SpecialPlaces = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = 'YOUR_MAPBOX_TOKEN';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [37.6173, 55.7558],
      zoom: 12
    });

    places.forEach(place => {
      const marker = new mapboxgl.Marker({ color: '#ea384c' })
        .setLngLat([place.coordinates.lng, place.coordinates.lat])
        .setPopup(new mapboxgl.Popup().setHTML(
          `<h3 class="font-playfair text-lg">${place.name}</h3>
           <p class="text-sm text-gray-600">${place.description}</p>`
        ))
        .addTo(map.current!);
    });

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="py-12">
      <h2 className="text-3xl font-playfair text-center mb-8">
        Наши особенные места
      </h2>
      <div 
        ref={mapContainer} 
        className="w-full h-[400px] rounded-lg shadow-lg overflow-hidden"
      />
    </div>
  );
};

export default SpecialPlaces;
