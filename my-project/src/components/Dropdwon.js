import react from 'react'
import { Link } from 'react-router-dom'

export default function Dropdown({ isOpen, toggle }) {
  return (
    <div
      className={
        isOpen
          ? 'sticky top-11 z-10 grid grid-rows-4 text-center items-center '
          : 'hidden'
      }
      onClick={toggle}
    >
      <Link className="p-4" to="/">
        Home
      </Link>
      <Link className="p-4" to="/menu">
        Menu
      </Link>
      <Link className="p-4" to="/about">
        About
      </Link>
      <Link className="p-4" to="/contact">
        Contact
      </Link>
    </div>
  )
}
