export function FlowerAccent({ className = "" }: { className?: string }) {
  return (
    <div className={`${className}`}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="4" fill="#c5d11c" />
        <circle cx="24" cy="8" r="2.5" fill="#c5d11c" />
        <circle cx="24" cy="40" r="2.5" fill="#c5d11c" />
        <circle cx="8" cy="24" r="2.5" fill="#c5d11c" />
        <circle cx="40" cy="24" r="2.5" fill="#c5d11c" />
        <circle cx="14" cy="14" r="2" fill="#c5d11c" />
        <circle cx="34" cy="34" r="2" fill="#c5d11c" />
        <circle cx="34" cy="14" r="2" fill="#c5d11c" />
        <circle cx="14" cy="34" r="2" fill="#c5d11c" />
      </svg>
    </div>
  )
}
