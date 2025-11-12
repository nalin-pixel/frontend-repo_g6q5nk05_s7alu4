export default function Events() {
  const events = [
    { time: '3:00 PM', title: 'Guest Arrival', desc: 'Welcome drinks and seating' },
    { time: '4:00 PM', title: 'Ceremony', desc: 'Exchange of vows' },
    { time: '6:00 PM', title: 'Cocktail Hour', desc: 'Drinks and light bites' },
    { time: '7:00 PM', title: 'Reception & Dinner', desc: 'Dinner, speeches, and dancing' },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Events</h2>
      <ul className="grid sm:grid-cols-2 gap-6">
        {events.map((e, idx) => (
          <li key={idx} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">{e.time}</p>
            <p className="font-semibold text-gray-800">{e.title}</p>
            <p className="text-gray-600">{e.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
