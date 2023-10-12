import React, { useEffect } from 'react'
import { Image, Form } from 'react-bootstrap'
import pizzaLeft from "../assets/pizzaLeft.jpg"
import Aos from "aos";
import "aos/dist/aos.css"

const Contact = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className='d-flex align-items-center justify-content-center contact' style={{ height: "84vh" }}>
      <Image src={pizzaLeft} fluid className='w-50 contactImg'
        style={{
          objectFit: "cover",
          height: '100%'
        }} />
      <div className='w-50 contactDiv' style={{ padding: "35px" }}>
        <h1 data-aos="fade-right" date-aos-duration="2000"
          style={{
            fontFamily: "Pacifico",
            textAlign: "center",
            marginBottom: "3rem"
          }}>Contact US</h1>
        <Form data-aos="fade-right" date-aos-duration="4000">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" placeholder="Your Full Name" style={{ borderBottom: "1px solid black" }} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Your Full Name" style={{ borderBottom: "1px solid black" }} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder='Your Full Text' style={{ borderBottom: "1px solid black" }} />
          </Form.Group>
        </Form>
      </div>
    </div>
  )
}

export default Contact