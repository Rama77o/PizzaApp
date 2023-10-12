import React, { useEffect } from 'react'
import aboutImg from "../assets/multiplePizzas.jpeg"
import makePizza from "../assets/makingpizza.jpeg"
import { Container } from 'react-bootstrap'
import Aos from "aos";
import "aos/dist/aos.css"

const About = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className='about'>
      <img src={aboutImg} alt="aboutImg"
        style={{
          width: "100%",
          height: "35vh",
          objectFit: "cover"
        }} />
      <Container>
        <div className='d-flex justify-content-center align-items-center'
          style={{
            margin: "3rem 0",
            height: "55vh",
            overflow: "hidden"
          }}>
          <img data-aos="fade-right" date-aos-duration="2000" className="makePizza" src={makePizza} alt='makePizza'
            style={{
              width: "200px",
              marginRight: "8rem"
            }} />
          <div data-aos="fade-right" date-aos-duration="4000" style={{ flexBasis: "70%" }}>
            <h1
              style={{
                fontFamily: "Pacifico",
                textAlign: "center",
                marginBottom: "3rem"
              }}>About Us</h1>
            <div
              style={{
                textAlign: "center",
                fontSize: "20px"
              }}>
              mfiojor rvigjb igbjitgj ijvijgb dskfopedj griog
              mfiojor rvigjb igbjitgj ijvijgb dskfopedj griog
              mfiojor rvigjb igbjitgj ijvijgb dskfopedj griog
              mfiojor rvigjb igbjitgj ijvijgb dskfopedj griog
              mfiojor rvigjb igbjitgj ijvijgb dskfopedj griog
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default About