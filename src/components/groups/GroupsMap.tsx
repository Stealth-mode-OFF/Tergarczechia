/** @jsxImportSource react */
import { useEffect, useRef } from 'react';

type GroupPin = {
  id: string;
  name: string;
  city: string;
  schedule: string;
  lat?: number;
  lng?: number;
  href: string;
  color?: string;
};

export default function GroupsMap({ groups }: { groups: GroupPin[] }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<any>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const maplibregl = (await import('maplibre-gl')).default;
      await import('maplibre-gl/dist/maplibre-gl.css');
      if (cancelled || !ref.current) return;

      const pins = groups.filter((g) => g.lat && g.lng);
      const bounds = new maplibregl.LngLatBounds();
      pins.forEach((p) => bounds.extend([p.lng!, p.lat!]));
      const center = pins.length > 0 ? bounds.getCenter() : { lng: 15.5, lat: 49.8 };

      const map = new maplibregl.Map({
        container: ref.current,
        style: {
          version: 8,
          sources: {
            osm: {
              type: 'raster',
              tiles: ['https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', 'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png'],
              tileSize: 256,
              attribution: '© OpenStreetMap contributors',
            },
          },
          layers: [{ id: 'osm', type: 'raster', source: 'osm' }],
        },
        center: [center.lng, center.lat],
        zoom: 6.3,
        minZoom: 5,
        maxZoom: 12,
        attributionControl: { compact: true },
      });

      map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-right');

      pins.forEach((p) => {
        const el = document.createElement('a');
        el.className = 'gmap-pin';
        el.href = p.href;
        el.setAttribute('aria-label', `${p.city} — ${p.name}`);
        el.style.setProperty('--pin-color', p.color ?? 'var(--accent)');
        el.innerHTML = `<span></span>`;
        new maplibregl.Marker({ element: el })
          .setLngLat([p.lng!, p.lat!])
          .setPopup(
            new maplibregl.Popup({ offset: 18, closeButton: false }).setHTML(
              `<strong>${p.name}</strong><br/><span style="color:#55606e">${p.schedule}</span><br/><a href="${p.href}" style="color:#B6671F;">Detail →</a>`,
            ),
          )
          .addTo(map);
      });

      if (pins.length > 1) {
        map.fitBounds(bounds, { padding: 48, maxZoom: 7.5, duration: 0 });
      }
      mapRef.current = map;
    })();

    return () => {
      cancelled = true;
      try { mapRef.current?.remove(); } catch {}
    };
  }, [groups]);

  return (
    <div className="groups-map-wrapper">
      <div ref={ref} className="groups-map" aria-label="Mapa meditačních skupin v ČR" />
      <style>{`
        .groups-map-wrapper {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--line);
          background: var(--surface);
        }
        .groups-map {
          height: 480px;
          width: 100%;
        }
        :global(.gmap-pin) {
          --pin-color: #B6671F;
          width: 24px;
          height: 24px;
          cursor: pointer;
          position: relative;
        }
        :global(.gmap-pin span) {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: var(--pin-color);
          border: 3px solid #FBF8F2;
          box-shadow: 0 2px 8px rgba(27,34,48,.25);
        }
        :global(.maplibregl-popup) { font-family: var(--font-sans, system-ui); }
        :global(.maplibregl-popup-content) {
          padding: 0.75rem 1rem;
          border-radius: 10px;
          font-size: 0.875rem;
        }
      `}</style>
    </div>
  );
}
