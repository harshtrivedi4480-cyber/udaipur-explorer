import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import SectionHeader from '@/components/SectionHeader'
import CategoryFilter from '@/components/CategoryFilter'
import SmartImage from '@/components/SmartImage'
import { useSEO } from '@/hooks/useSEO'
import { getAllMapPoints } from '@/lib/mapPoints'

// Leaflet's default marker icons reference bundler-specific asset paths that
// break under Vite; point them at the CDN-hosted originals instead.
const markerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
})

const UDAIPUR_CENTER: [number, number] = [24.585, 73.685]
const CATEGORIES = ['All', 'Place', 'Hidden Gem', 'Hotel', 'Experience'] as const

export default function MapPage() {
  useSEO({
    title: 'Map',
    description: 'An interactive map of every place, stay and experience in the Udaipur Explorer guide.',
    path: '/map',
  })

  const [params] = useSearchParams()
  const focusSlug = params.get('focus')
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>('All')

  const points = useMemo(() => getAllMapPoints(), [])
  const filtered = useMemo(
    () => (active === 'All' ? points : points.filter((p) => p.category === active)),
    [points, active],
  )
  const focusPoint = focusSlug ? points.find((p) => p.slug === focusSlug) : undefined

  return (
    <div>
      <section className="bg-sand px-6 pb-8 pt-40 lg:px-10 lg:pt-48">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Map"
            title="Udaipur, mapped."
            description="Every place, stay and experience in this guide, laid out across the city."
          />
          <div className="mt-8">
            <CategoryFilter categories={[...CATEGORIES]} active={active} onChange={(c) => setActive(c as (typeof CATEGORIES)[number])} />
          </div>
        </div>
      </section>

      <section className="px-0 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="h-[70vh] min-h-[420px] overflow-hidden rounded-sm border border-ink/10">
            <MapContainer
              center={focusPoint ? [focusPoint.latitude, focusPoint.longitude] : UDAIPUR_CENTER}
              zoom={focusPoint ? 15 : 13}
              scrollWheelZoom
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {filtered.map((point) => (
                <Marker key={`${point.category}-${point.id}`} position={[point.latitude, point.longitude]} icon={markerIcon}>
                  <Popup>
                    <div className="w-48">
                      <div className="aspect-[4/3] w-full overflow-hidden rounded">
                        <SmartImage src={point.image} alt={point.name} label={point.name} />
                      </div>
                      <p className="mt-2 text-xs uppercase tracking-wide text-ink/50">{point.category}</p>
                      <p className="font-serif text-base text-ink">{point.name}</p>
                      <p className="mt-1 text-xs text-ink/60">{point.shortDescription}</p>
                      <Link to={point.href} className="mt-2 inline-block text-xs text-terracotta underline">
                        View details
                      </Link>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </section>
    </div>
  )
}
