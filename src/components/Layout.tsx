import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import SearchOverlay from './SearchOverlay'
import ScrollProgress from './ScrollProgress'
import PageTransition from './PageTransition'

export default function Layout() {
  const [searchOpen, setSearchOpen] = useState(false)
  const location = useLocation()
  const transparentOnTop = location.pathname === '/'

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollProgress />

      <Navbar onSearchOpen={() => setSearchOpen(true)} transparentOnTop={transparentOnTop} />
      <main className="flex-1">
        <PageTransition />
      </main>
      <Footer />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  )
}

