import Navbar from '../components/Navbar'
import SearchSection from '../components/SearchSection'
import FilterSection from '../components/FilterSection'
import JobListingSection from '../components/JobListingSection'
import StatsSection from '../components/StatsSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <SearchSection />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <FilterSection />
          <div className="md:col-span-3">
            <JobListingSection />
          </div>
        </div>
        <StatsSection />
      </main>
      <Footer />
    </div>
  )
}

