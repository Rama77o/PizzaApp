import React from 'react'
import { Container } from 'react-bootstrap';
import { BsFacebook, BsYoutube, BsInstagram } from 'react-icons/bs';
import { MdEmail } from "react-icons/md"

const Footer = () => {
  return (
    <div className='bg-dark text-light d-flex align-items-center' style={{
      height: "16vh",
      textAlign: "center",
      lineHeight: "1"
    }}>
      <Container>
        <div direction='horizontal'
          className='d-flex justify-content-between'
          style={{
            fontSize: "50px",
            margin: "auto",
            maxWidth: "40%"
          }}>
          <BsFacebook />
          <BsYoutube />
          <MdEmail />
          <BsInstagram />
        </div>
        <div style={{transform: "translate(10px, 10px)"}}>
          @ 2023 pizza.com
        </div>
      </Container>
    </div>
  )
}

export default Footer