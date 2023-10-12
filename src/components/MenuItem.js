import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import FormatCurrency from './FormatCurrenct'
import Aos from "aos";
import "aos/dist/aos.css"

const MenuItem = ({ name, image, price }) => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
      }, [])

    return (
        <div data-aos="fade-right" date-aos-duration="4000">
            <Card
                style={{
                    width: '18rem',
                    cursor: "pointer",
                    boxShadow: "3px 5px 6px 1px #808080bf"
                }}>
                <Card.Img variant="top" src={image}
                    style={{
                        height: "200px",
                        width: "100%",
                        objectFit: "cover"
                    }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {FormatCurrency(price)}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MenuItem