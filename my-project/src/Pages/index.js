import react from 'react'
import { Link } from 'react-router-dom'
import Content from '../components/Content'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Content />
    </div>
  )
}
