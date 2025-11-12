import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/story', label: 'Our Story' },
  { to: '/events', label: 'Events' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/rsvp', label: 'RSVP' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-rose-100">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <span className="h-9 w-9 rounded-full bg-pink-600 text-white grid place-items-center font-bold">W</span>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Wedding of A & B</h1>
            <p className="text-xs text-gray-500">Together with their families</p>
          </div>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm text-gray-600">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `hover:text-pink-600 ${isActive ? 'text-pink-600 font-semibold' : ''}`
              }
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
