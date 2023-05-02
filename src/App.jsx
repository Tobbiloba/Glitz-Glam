import { useState } from 'react'
import './App.css'

import HomePage from './components/HomePage'
import product1 from './assets/product1.jpg'
import product2 from './assets/product2.jpg'
import product3 from './assets/product3.jpg'
import product4 from './assets/product4.jpg'
import product5 from './assets/product5.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HomePage />
      <div>
        <section className="hero-image">
          <h2>Welcome to Glitz&Glam Pink Lips Accessories</h2>
          <p>
            We offer a range of lip care products that will help you achieve the
            perfect pink lips.
          </p>
          <a href="#" className="cta-button">
            Shop Now
          </a>
        </section>
        <section className="about-us">
          <h3>About Us</h3>
          <p>
            We are a company that is dedicated to providing our customers with
            the best lip care products on the market. Our products are made with
            all-natural ingredients that are safe and effective.
          </p>
        </section>
        <section className="products">
          <h3>Our Products</h3>
          <p>Take a look at our range of lip care products:</p>
          <ul>
            <li>
              <a href="https://wa.link/gyc4rg">
                <img src={product2} alt="Product 1" />
                <p>Lips Mask</p>
              </a>
            </li>
            <li>
              <a href="https://wa.link/gyc4rg">
                <img src={product1} alt="Product 2" />
                <p>Lips Scrub</p>
              </a>
            </li>
            <li>
              <a href="https://wa.link/gyc4rg">
                <img src={product3} alt="Product 3" />
                <p>Mini Pink Lips Kit</p>
              </a>
            </li>
            <li>
              <a href="https://wa.link/gyc4rg">
                <img src={product5} alt="Product 5" />
                <p>Lips Gloss</p>
              </a>
            </li>
            <li>
              <a href="https://wa.link/gyc4rg">
                <img src={product4} alt="Product 4" />
                <p>Mink Eye Lashes</p>
              </a>
            </li>
          </ul>
        </section>
        {/* <section className="contact-us">
          <h3>Contact Us</h3>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </section> */}
        <footer>
          <p>Copyright © 2023 Pink Lips Brand. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default App
