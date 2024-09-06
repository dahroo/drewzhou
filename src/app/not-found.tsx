import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center mt-7">
      <h1 className="text-xl font-bold mb-4">404</h1>
      <Link 
        href="/" 
        className="home hover:font-bold hover:italic"
      >
        home
      </Link>
    </div>
  )
}