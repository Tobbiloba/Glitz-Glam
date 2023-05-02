import { useState } from 'react'
import './App.css'

import HomePage from './components/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HomePage />
      <div>
        <section className="hero-image">
          <h2>Welcome to Glitz&Glam Pink Lips Brand</h2>
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
              <a href="#">
                <img
                  src="https://cdn.shopify.com/s/files/1/0038/4886/3793/products/Ethique-Lip-Balm-EBJUI-Juicy-Pink-grapefruit-_-vanilla-lip-balm_4359864b-d6e2-4502-a861-b08cf01c1a36.jpg?v=1674614536"
                  alt="Product 1"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://cdn.shopify.com/s/files/1/0038/4886/3793/products/Ethique-Lip-Balm-EBJUI-Juicy-Pink-grapefruit-_-vanilla-lip-balm_4359864b-d6e2-4502-a861-b08cf01c1a36.jpg?v=1674614536"
                  alt="Product 2"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://cdn.shopify.com/s/files/1/0038/4886/3793/products/Ethique-Lip-Balm-EBJUI-Juicy-Pink-grapefruit-_-vanilla-lip-balm_4359864b-d6e2-4502-a861-b08cf01c1a36.jpg?v=1674614536"
                  alt="Product 3"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://cdn.shopify.com/s/files/1/0038/4886/3793/products/Ethique-Lip-Balm-EBJUI-Juicy-Pink-grapefruit-_-vanilla-lip-balm_4359864b-d6e2-4502-a861-b08cf01c1a36.jpg?v=1674614536"
                  alt="Product 4"
                />
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
