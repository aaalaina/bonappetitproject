import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <section className="footer-wrapper">
        <div className="logoname footer-col">
          <h1>Bon Appétit</h1>
        </div>

        <ul className="footer-col footer-nav-list">
          <li>RECIPES</li>
          <li>SHOPPING</li>
          <li>CONTACT</li>
        </ul>

        <ul className="footer-col footer-socials-list">
          <li>
            <a href="https://twitter.com/bonappetit">Twitter</a>
          </li>
          <li>
            <a href="https://www.pinterest.com/bonappetitmag/">Pinterest</a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCbpMy0Fg74eXXkvxJrtEn3w">
              YouTube
            </a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Bedtime_procrastination">
              Wikipedia
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/bonappetitmag/?hl=en">
              Instagram
            </a>
          </li>
        </ul>
      </section>

      <section className="footer-bottom">
        <p className="copyright">&copy; Copyright 2022</p>
      </section>
    </footer>
  );
}
