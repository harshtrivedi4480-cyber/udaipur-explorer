import { Routes, Route, useLocation } from 'react-router-dom'
import { Suspense, lazy, useEffect } from 'react'
import Layout from '@/components/Layout'
import LoadingState from '@/components/LoadingState'

const Home = lazy(() => import('@/pages/Home'))
const Places = lazy(() => import('@/pages/Places'))
const PlaceDetail = lazy(() => import('@/pages/PlaceDetail'))
const Food = lazy(() => import('@/pages/Food'))
const FoodDetail = lazy(() => import('@/pages/FoodDetail'))
const Stays = lazy(() => import('@/pages/Stays'))
const HotelDetail = lazy(() => import('@/pages/HotelDetail'))
const Experiences = lazy(() => import('@/pages/Experiences'))
const ExperienceDetail = lazy(() => import('@/pages/ExperienceDetail'))
const HiddenGems = lazy(() => import('@/pages/HiddenGems'))
const Stories = lazy(() => import('@/pages/Stories'))
const StoryDetail = lazy(() => import('@/pages/StoryDetail'))
const TripPlanner = lazy(() => import('@/pages/TripPlanner'))
const MapPage = lazy(() => import('@/pages/MapPage'))
const Saved = lazy(() => import('@/pages/Saved'))
const About = lazy(() => import('@/pages/About'))
const Contact = lazy(() => import('@/pages/Contact'))
const NotFound = lazy(() => import('@/pages/NotFound'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<LoadingState label="Loading" />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/places" element={<Places />} />
            <Route path="/places/:slug" element={<PlaceDetail />} />
            <Route path="/food" element={<Food />} />
            <Route path="/food/:slug" element={<FoodDetail />} />
            <Route path="/stays" element={<Stays />} />
            <Route path="/stays/:slug" element={<HotelDetail />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/experiences/:slug" element={<ExperienceDetail />} />
            <Route path="/hidden-gems" element={<HiddenGems />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/stories/:slug" element={<StoryDetail />} />
            <Route path="/trip-planner" element={<TripPlanner />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}
