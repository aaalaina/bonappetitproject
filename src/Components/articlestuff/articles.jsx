import React from 'react'
import {Link} from 'react-router-dom';
import './articles.css';

export default function Articles() {
  return (
    <div>
        <h1 className='artictles-heading'>What To Read</h1>
        <main className='main-home'>
        <section className='homesect'>
            <img src="https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2016/10/1024px-lower_east_side_6467552265.jpg" className='homeimg' alt=""/>
            <div className='home-text'>
            <h2> <Link to="https://www.bonappetit.com/story/dimes-square-restaurants-nyc">Do You Need to Care About Dimes Square? Probably Not</Link></h2>
            </div>
            <h4>The Lower East Side “microneighborhood” houses some great restaurants. That’s the only reason to visit.</h4>
        </section>
        <section className='homesect'>
            <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2020%2F11%2F04%2Fhaus-aperitif-review-FT-BLOG1020.jpg" className='homeimg' alt=""/>
            <div className='home-text'>
            <h2>< Link to="https://www.bonappetit.com/story/haus-sale-aperitif">Stylish Booze Brand Haus Was Buzzing. Why Did It Lose Funding?</Link></h2>
            <h4>Helena Price Hambrecht talks to Bon Appétit about the sale of her influential direct-to-consumer aperitif brand.</h4>
            </div>
        </section>
        <section className='homesect'>
            <img src="https://cdn2.lamag.com/wp-content/uploads/sites/6/2019/07/anne-preble-SAPvKo12dQE-unsplash-2048x1422.jpg" className='homeimg' alt=""/>
            <div className='home-text'>
            <h2><Link to="https://www.bonappetit.com/story/ode-to-grocery-outlet-bargain-market">The Inflation-Proof Joys of Grocery Outlet Bargain Market</Link></h2>
            <h4>Come for the cheap prices, stay for the hot cocoa pork rinds, spicy ice cream, and Dunkaroos cereal.</h4>
            </div>
        </section>
        <section className='homesect'>
            <img src="https://images.unsplash.com/photo-1547050605-2f268cd5daf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" className='homeimg' alt=""/>
            <div className='home-text'>
            <h2><Link to="https://www.bonappetit.com/story/mcdonalds-ends-mcplant-test-us-stores">Fast Food Took a Gamble on Fake Meat. It’s Not Paying Off</Link></h2>
            <h4>McDonald’s McPlant experiment reveals how fake meat at fast food restaurants is, as a whole, a grift.</h4>
            </div>
        </section>
        </main>
        {/* <section>
            <h2></h2>
            <h4></h4>
        </section>
        <section>
            <h2></h2>
            <h4></h4>
        </section> */}
    </div>
  )
}
