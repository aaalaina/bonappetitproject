import React from 'react';
import Hero from '../Components/herostuff/Hero';
import Navbar from "../Components/navbarstuff/navbar";
import Footer from '../Components/footerstuff/footer';
import Articles from '../Components/articlestuff/articles';
export default function Home() {
  return (
    <div>
<Navbar />
<Hero />
<Articles />
<Footer />
    </div>
  )
}
