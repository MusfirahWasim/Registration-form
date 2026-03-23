const ROLE_COLORS = {
  Designer: 'bg-violet-50 text-violet-600',
  Developer: 'bg-blue-50 text-blue-600',
  Manager: 'bg-amber-50 text-amber-600',
  Marketing: 'bg-emerald-50 text-emerald-600',
  Other: 'bg-stone-100 text-stone-500',
}

export default function UserCard({ user, index }) {
  const roleColor = ROLE_COLORS[user.role] || ROLE_COLORS.Other

  return (
    <div
      className="card-animate bg-white rounded-2xl border border-stone-100 shadow-sm p-6 flex gap-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-stone-900 text-white flex items-center justify-center text-base font-semibold tracking-wide">
        {user.initials}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold text-stone-900 leading-tight truncate">{user.name}</h3>
          <span className={`flex-shrink-0 text-xs font-medium px-3 py-1 rounded-full ${roleColor}`}>
            {user.role}
          </span>
        </div>
        <p className="text-sm text-stone-400 mt-1 truncate" style={{ fontFamily: "'DM Mono', monospace" }}>
          {user.email}
        </p>
        {user.bio && (
          <p className="text-sm text-stone-500 mt-2.5 leading-relaxed line-clamp-2">{user.bio}</p>
        )}
      </div>
    </div>
  )
}
