import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((p) => ({ ...p, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact</h2>
      <p className="text-gray-600 mb-6">Have questions about the day, travel, or accommodation? Send us a note.</p>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white rounded-2xl shadow p-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input name="name" value={form.name} onChange={handleChange} required className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} rows="4" required className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300" />
        </div>
        <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-lg">Send</button>
        {sent && <p className="text-green-600">Thanks! We'll get back to you soon.</p>}
      </form>
    </div>
  )
}
