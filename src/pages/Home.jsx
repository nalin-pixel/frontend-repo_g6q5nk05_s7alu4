import RSVPForm from '../components/RSVPForm'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(236,72,153,0.15),transparent_40%),_radial-gradient(circle_at_80%_0%,rgba(244,114,182,0.15),transparent_35%),_radial-gradient(circle_at_50%_100%,rgba(192,132,252,0.15),transparent_40%)]" />
        <div className="max-w-6xl mx-auto px-4 py-20 sm:py-28 relative">
          <div className="text-center">
            <p className="text-sm tracking-widest uppercase text-gray-600">We are getting married</p>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-gray-900 mt-3">Aarav & Bela</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Join us for a day of love, laughter, and celebration as we start our forever together.</p>
            <div className="mt-8 flex justify-center gap-3">
              <a href="/rsvp" className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-semibold shadow">RSVP Now</a>
              <a href="/events" className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold shadow">View Events</a>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-6xl mx-auto px-4 py-16 sm:py-24">
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-lg font-semibold text-gray-800">Date</h3>
            <p className="text-gray-600">Sunday, 15 June 2025</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-lg font-semibold text-gray-800">Ceremony</h3>
            <p className="text-gray-600">St. Mary's Cathedral, City Center</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-lg font-semibold text-gray-800">Reception</h3>
            <p className="text-gray-600">The Grand Hall, Riverside</p>
          </div>
        </div>
      </section>

      {/* RSVP */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <RSVPForm />
      </section>
    </div>
  )
}
