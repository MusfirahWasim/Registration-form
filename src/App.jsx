import { useState } from 'react'
import RegistrationForm from './components/RegistrationForm'
import UserCard from './components/UserCard'

const SEED_USERS = [
  // {
  //   id: 1,
  //   name: 'Alex Rivera',
  //   email: 'alex@studio.io',
  //   role: 'Designer',
  //   bio: 'Crafting interfaces that feel intuitive and alive.',
  //   initials: 'AR',
  // },
  // {
  //   id: 2,
  //   name: 'Sam Chen',
  //   email: 'sam@devhub.co',
  //   role: 'Developer',
  //   bio: 'Full-stack engineer obsessed with clean code.',
  //   initials: 'SC',
  // },
]

export default function App() {
  const [users, setUsers] = useState(SEED_USERS)

  const handleRegister = (user) => {
    setUsers((prev) => [user, ...prev])
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f0efed' }}>
      <header className="border-b border-stone-200 bg-white/70 backdrop-blur-md sticky top-0 z-10">
        <div className="w-full px-12 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-base font-semibold text-stone-900 tracking-tight">User Registration</span>
          </div>
          <span className="text-sm text-stone-400 font-mono">
            {users.length} {users.length === 1 ? 'member' : 'members'}
          </span>
        </div>
      </header>

      <main className="w-full px-12 py-10">
        <div className="grid gap-10 items-start" style={{ gridTemplateColumns: '440px 1fr' }}>
          <div className="sticky top-24">
            <RegistrationForm onRegister={handleRegister} />
          </div>

          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-semibold text-stone-900 tracking-tight">Registered Users</h1>
              </div>
            </div>
            
            <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
              {users.map((user, i) => (
                <UserCard key={user.id} user={user} index={i} />
              ))}
            </div>
          
          </div>
        </div>
      </main>
    </div>
  )
}
