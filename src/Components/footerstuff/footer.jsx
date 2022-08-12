import React from 'react';
import './footer.css';
export default function Footer() {
    return (
        <div className='FooterParent'>
            <div className='sentence'>
                <p>Recipes you want to make. Cooking advice that works. Restaurant recommendations you trust.</p>
            </div>
            <div className='f-links'>
                <h2>Social Media</h2>
                <ul className='ul-footer'>
                    <li>
                        <a href="https://twitter.com/bonappetit">Twitter</a>
                    </li>
                    <li>
                        <a href="https://www.pinterest.com/bonappetitmag/">Pinterest</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UCbpMy0Fg74eXXkvxJrtEn3w">YouTube</a>
                    </li>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Bedtime_procrastination">Wikipedia</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/bonappetitmag/?hl=en">Instagram</a>
                    </li>
                </ul>
                <p className='copyright'>&copy; Copyright 2022</p>
            </div>
            <div className='logoname'>
                <h1>Bon Appétit</h1>
            </div>
        </div>
    )
}

