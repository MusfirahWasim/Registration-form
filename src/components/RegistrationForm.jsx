import { useState } from 'react'

const ROLES = ['Designer', 'Developer', 'Manager', 'Marketing', 'Other']

export default function RegistrationForm({ onRegister }) {
  const [form, setForm] = useState({ name: '', email: '', role: '', bio: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.role) e.role = 'Please select a role'
    return e
  }

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const handleSubmit = () => {
    const e = validate()
    if (Object.keys(e).length) return setErrors(e)
    onRegister({
      ...form,
      id: Date.now(),
      initials: form.name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2),
    })
    setForm({ name: '', email: '', role: '', bio: '' })
    setErrors({})
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 2000)
  }

  const inputClass = (field) =>
    `w-full bg-white border ${errors[field] ? 'border-red-400' : 'border-stone-200'}
    rounded-xl px-5 py-3.5 text-base text-stone-800 placeholder-stone-400
    outline-none focus:border-stone-700 transition-colors duration-200`

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-10">
      <div className="mb-10">
        <p className="text-xs font-mono text-stone-400 tracking-widest uppercase mb-2">New User</p>
        <h2 className="text-3xl font-semibold text-stone-900 tracking-tight">Registration</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-xs font-medium text-stone-500 mb-2 uppercase tracking-wider">Full Name</label>
          <input type="text" placeholder="Jane Doe" value={form.name} onChange={handleChange('name')} className={inputClass('name')} />
          {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-xs font-medium text-stone-500 mb-2 uppercase tracking-wider">Email Address</label>
          <input type="email" placeholder="jane@example.com" value={form.email} onChange={handleChange('email')} className={inputClass('email')} />
          {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-xs font-medium text-stone-500 mb-2 uppercase tracking-wider">Role</label>
          <div className="relative">
            <select value={form.role} onChange={handleChange('role')} className={`${inputClass('role')} appearance-none pr-10 cursor-pointer`}>
              <option value="">Select a role…</option>
              {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none text-xs">▾</span>
          </div>
          {errors.role && <p className="text-red-400 text-xs mt-1.5">{errors.role}</p>}
        </div>

        <div>
          <label className="block text-xs font-medium text-stone-500 mb-2 uppercase tracking-wider">
            Short Bio <span className="text-stone-300 normal-case tracking-normal font-normal">(optional)</span>
          </label>
          <textarea rows={4} placeholder="Tell us something about yourself…" value={form.bio} onChange={handleChange('bio')} className={`${inputClass('bio')} resize-none`} />
        </div>

        <button
          onClick={handleSubmit}
          className={`w-full py-4 rounded-xl text-base font-medium tracking-wide transition-all duration-200
            ${submitted ? 'bg-green-500 text-white scale-[0.99]' : 'bg-stone-900 text-white hover:bg-stone-700 active:scale-[0.99]'}`}
        >
          {submitted ? '✓ Added Successfully' : 'Register User'}
        </button>
      </div>
    </div>
  )
}
