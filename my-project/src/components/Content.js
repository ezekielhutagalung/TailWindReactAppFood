import react from 'react'
import { Link } from 'react-router-dom'
import ImageOne from '../images/satay.jpg'
import ImageTwo from '../images/satay2.jpg'

export default function Content() {
  return (
    <div>
      <div className="menu-card">
        <img src={ImageOne} alt="egg" className="h-full rounded mb-20 shadow" />

        <div className="center-content">
          <h2 className="text-2xl mb-2">Young Goat Satay</h2>
          <p className="mb-2">
            Sweet Juicy Goat meat, with full of protein, and delicious{' '}
          </p>
          <span>$2</span>
        </div>
      </div>
      <div className="menu-card">
        <img src={ImageTwo} alt="egg" className="h-full rounded mb-20 shadow" />

        <div className="center-content">
          <h2 className="text-2xl mb-2">Chicken Village Satay</h2>
          <p className="mb-2">
            Juicy Chicken village meat, with full of protein, and delicious,
            vitamin b{' '}
          </p>
          <span>$2</span>
        </div>
      </div>
    </div>
  )
}
