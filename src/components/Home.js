import React, { useEffect } from 'react'
import { Button, Image } from 'react-bootstrap'
import homePizza from "../assets/pizza.jpeg"
import Aos from "aos";
import "aos/dist/aos.css"

const Home = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <>
      <Image src={homePizza}
        fluid
        style={{
          width: "100%",
          height: "84vh",
          objectFit: "cover",
          position: "relative"
        }} />
      <div style={{
        position: "absolute",
        top: "43%",
        left: "20px"
      }}>
        <h1 data-aos="fade-right" date-aos-duration="2000"
          style={{
            fontFamily: "Pacifico",
            fontSize: "45px",
            letterSpacing: "4"
          }}>
          Resturant of Pizza</h1>
        <p data-aos="fade-right" date-aos-duration="4000" className='fs-3' style={{ letterSpacing: "2" }}>PIZZA TO FIT ANY TASTE</p>
        <Button data-aos="fade-right" date-aos-duration="6000" variant='dark' style={{ padding: ".5rem 2.5rem" }}>ORDER</Button>
      </div>
    </>
  )
}

export default Home