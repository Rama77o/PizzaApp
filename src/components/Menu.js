import React, { useEffect } from 'react';
import { MenuList } from '../helpers/MenuList.js';
import { Container } from 'react-bootstrap';
import MenuItem from './MenuItem.js';
import Aos from "aos";
import "aos/dist/aos.css"

const Menu = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div style={{ margin: "2rem 0" }}>
      <Container>
        <h1 data-aos="fade-right" date-aos-duration="2000"
          style={{
            fontFamily: "Pacifico",
            textAlign: "center",
            marginBottom: "3rem"
          }}>
          Our Menu</h1>
        <div className='d-flex justify-content-center'
         style={{
          flexWrap: "wrap",
          gap: "5rem"
        }}>
          {MenuList.map((item, key) => {
            return (
              <MenuItem key={key}
                image={item.image}
                price={item.price}
                name={item.name} />
            )
          })}
        </div>
      </Container>
    </div>
  )
}

export default Menu