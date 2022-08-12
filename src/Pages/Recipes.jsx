// gonna make this so prettyyy
import Veggie from "../Components/veggie";
import Popular from "../Components/popular";
import Dairy from "../Components/dairy";
import React from 'react'
import Navbar from "../Components/navbarstuff/navbar";
import Footer from '../Components/footerstuff/footer';

function Recipes() {
  return (
    <div>
        <Navbar />
        <Veggie />
        <Popular />
        <Dairy />
        <Footer />
    </div>
  )
}

export default Recipes