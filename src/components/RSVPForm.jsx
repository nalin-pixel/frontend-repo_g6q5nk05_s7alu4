import { useState } from 'react'

export default function RSVPForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    attending: true,
    guests: 1,
    side: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : name === 'guests' ? Number(value) : value,
    }))
  }

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setResult(null)
    try {
      const res = await fetch(`${baseUrl}/api/rsvp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Something went wrong')
      setResult({ ok: true, id: data.id })
      setForm({ name: '', email: '', phone: '', attending: true, guests: 1, side: '', message: '' })
    } catch (err) {
      setResult({ ok: false, message: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div id="rsvp" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">RSVP</h3>
      <p className="text-gray-600 mb-6">We'd love to know if you can join us. Please fill out the form below.</p>
      <form onSubmit={submit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="sm:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input required name="name" value={form.name} onChange={handleChange} className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300" placeholder="Your name" />
        </div>
        <div className="sm:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input required type="email" name="email" value={form.email} onChange={handleChange} className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300" placeholder="you@example.com" />
        </div>
        <div className="sm:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input name="phone" value={form.phone} onChange={handleChange} className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300" placeholder="Optional" />
        </div>
        <div className="sm:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Side</label>
          <select name="side" value={form.side} onChange={handleChange} className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300">
            <option value="">Select</option>
            <option value="Bride">Bride</option>
            <option value="Groom">Groom</option>
            <option value="Family">Family</option>
            <option value="Friend">Friend</option>
          </select>
        </div>
        <div className="sm:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Guests (incl. you)</label>
          <input type="number" min={1} max={10} name="guests" value={form.guests} onChange={handleChange} className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300" />
        </div>
        <div className="sm:col-span-1 flex items-center gap-3">
          <input id="attending" type="checkbox" name="attending" checked={form.attending} onChange={handleChange} className="h-4 w-4 text-pink-600" />
          <label htmlFor="attending" className="text-sm text-gray-700">I will attend</label>
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} rows="3" className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300" placeholder="Any note for the couple"></textarea>
        </div>
        <div className="sm:col-span-2">
          <button disabled={loading} type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-lg transition-colors">
            {loading ? 'Submitting...' : 'Send RSVP'}
          </button>
        </div>
      </form>
      {result && (
        <div className={`mt-4 p-3 rounded-lg ${result.ok ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
          {result.ok ? 'Thank you! Your RSVP has been recorded.' : `Error: ${result.message}`}
        </div>
      )}
      <p className="mt-3 text-xs text-gray-500">Powered by a secure backend. If this fails here, try again later.</p>
    </div>
  )
}
