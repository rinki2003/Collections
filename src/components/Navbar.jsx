import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between p-5 bg-blue-950 text-white">
        
        {/* Title */}
        <div className="text-2xl font-semibold">
          Media Search
        </div>

        {/* Right side links */}
        <div className="flex gap-6 text-lg font-medium">
          <Link
            to="/"
            className="hover:text-yellow-300 transition border-b-2 border-transparent hover:border-yellow-300"
          >
            Search
          </Link>

          <Link
            to="/collection"
            className="hover:text-yellow-300 transition border-b-2 border-transparent hover:border-yellow-300"
          >
            Collection
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
