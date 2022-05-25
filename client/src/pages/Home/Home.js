import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Mission from '../../components/Mission/Mission'
import Community from '../../components/Community/Community'
import Passion from '../../components/Passion/Passion'

function Home() {
  return (
    <div>
        {/* Navbar */}
        <Navbar />
        {/* Hero */}
        <Hero />
        {/* Mission */}
        <Mission />
        {/* Community */}
        <Community />
        {/* Passion */}
        <Passion />
    </div>
  )
}

export default Home