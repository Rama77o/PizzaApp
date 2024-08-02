import React from 'react'
import { BiSearchAlt } from "react-icons/bi"
import { TbMessageCircleHeart } from "react-icons/tb"
import { IoMdNotificationsOutline } from "react-icons/io"
import { TbArrowRightRhombus } from "react-icons/tb"
import { BsQuestionCircle } from "react-icons/bs"
import adminImg from "../../Assets/adminImg.jpeg"
import cardVideo from "../../Assets/cardVideo.mp4"
import cardImg from "../../Assets/cardImg.png"
import "./top.css"

const Top = () => {
  return (
    <div className='topSection'>
      <div className='headerSection flex'>

        <div className='title'>
          <h1>Welcome To planti</h1>
          <p>Hello , welcome back!</p>
        </div>

        <div className='searchbar flex'>
          <input type='search' placeholder='Search Dashboard' />
          <BiSearchAlt className='icon' />
        </div>

        <div className='adminDiv flex'>
          <TbMessageCircleHeart className='icon' />
          <IoMdNotificationsOutline className='icon' />
          <div className='adminImg'>
            <img src={adminImg} alt='adminImg' />
          </div>
        </div>

      </div>
      <div className='cardSection flex'>

        <div className='rightCard flex'>
          <h1>Create and sell and extraordinary products</h1>
          <p>The world's fast growing industry today are natural made products!</p>
          <div className='buttons flex'>
            <button className='btn'>Explore More</button>
            <button className='btn transparent'>Top Sallers</button>
          </div>
          <div className='videoDiv'>
            <video src={cardVideo} autoPlay loop muted></video>
          </div>
        </div>

        <div className='leftCard flex'>
          <div className='main flex'>
            <div className='textDiv'>
              <h1>My State</h1>
              <div className='stat flex'>
                <span>
                  today<br /><small>4 orders</small>
                </span>
                <span>
                  this month<br /><small>175 orders</small>
                </span>
              </div>
              <span className='flex link'>
                Go To my Orders <TbArrowRightRhombus className='icon' />
              </span>
            </div>
            <div className='imgDiv'>
              <img src={cardImg} alt='cardImg' />
            </div>
          </div>
          <div className='sidebarCard'>
            <BsQuestionCircle className='icon' />
            <div className='cardContent'>
              <div className='circle1'></div>
              <div className='circle2'></div>
              <h3>Help Center</h3>
              <p>Having trouble in planti,
                please contact us from for more questions
              </p>
              <button className='btn'>Go To Help Center</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Top