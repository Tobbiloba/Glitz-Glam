// import { useHistory } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './Products.css'
import product1 from '../assets/product1.jpg'
import product2 from '../assets/product2.jpg'
import product3 from '../assets/product3.jpg'
import product4 from '../assets/product4.jpg'
import product5 from '../assets/product5.jpg'

const Products = () => {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/')
  }
  return (
    <div>
      <section className="about-us">
        <h3>About Us</h3>
        <p>
          We are a company that is dedicated to providing our customers with the
          best lip care products on the market. Our products are made with
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
              <p>LipGloss</p>
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
      <button onClick={handleClick}>Go Back</button>
    </div>
  )
}
export default Products
