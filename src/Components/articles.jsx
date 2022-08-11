import React from 'react'
import {Link} from 'react-router-dom';
export default function Articles() {
  return (
    <div>
        <section>
            <h1> <Link to="https://www.bonappetit.com/story/dimes-square-restaurants-nyc">Do You Need to Care About Dimes Square? Probably Not</Link></h1>
            <h4>The Lower East Side “microneighborhood” houses some great restaurants. That’s the only reason to visit.</h4>
        </section>
        <section>
            <h1>< Link to="https://www.bonappetit.com/story/haus-sale-aperitif">Stylish Booze Brand Haus Was Buzzing. Why Did It Lose Funding?</Link></h1>
            <h4>Helena Price Hambrecht talks to Bon Appétit about the sale of her influential direct-to-consumer aperitif brand.</h4>
        </section>
        <section>
            <h1><Link to="https://www.bonappetit.com/story/ode-to-grocery-outlet-bargain-market">The Inflation-Proof Joys of Grocery Outlet Bargain Market</Link></h1>
            <h4>Come for the cheap prices, stay for the hot cocoa pork rinds, spicy ice cream, and Dunkaroos cereal.</h4>
        </section>
        <section>
            <h1><Link to="https://www.bonappetit.com/story/mcdonalds-ends-mcplant-test-us-stores">Fast Food Took a Gamble on Fake Meat. It’s Not Paying Off</Link></h1>
            <h4>McDonald’s McPlant experiment reveals how fake meat at fast food restaurants is, as a whole, a grift.</h4>
        </section>
        {/* <section>
            <h1></h1>
            <h4></h4>
        </section>
        <section>
            <h1></h1>
            <h4></h4>
        </section> */}
    </div>
  )
}
