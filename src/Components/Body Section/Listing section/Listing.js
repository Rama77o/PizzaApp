import React from 'react'
import "./listing.css"
import { TbArrowRightRhombus } from "react-icons/tb"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import listImg1 from "../../Assets/listImg1.png"
import listImg2 from "../../Assets/listImg2.png"
import listImg3 from "../../Assets/listImg3.png"
import listImg4 from "../../Assets/listImg4.png"
import user1 from "../../Assets/user1.jpeg"
import user2 from "../../Assets/user2.jpeg"
import user3 from "../../Assets/user3.jpeg"
import user4 from "../../Assets/user4.jpeg"

const Listing = () => {
  return (
    <div className='listingSection'>

      <div className='heading flex'>
        <h1>My Listings</h1>
        <button className='flex btn'>
          See All <TbArrowRightRhombus className='icon' />
        </button>
      </div>

      <div className='secContainer flex'>

        <div className='singleItem'>
          <AiFillHeart className='icon' />
          <img src={listImg1} alt='listImg1' />
          <h3>Annual Vince</h3>
        </div>
        <div className='singleItem'>
          <AiOutlineHeart className='icon' />
          <img src={listImg2} alt='listImg2' />
          <h3>Coffee Plant</h3>
        </div>
        <div className='singleItem'>
          <AiOutlineHeart className='icon' />
          <img src={listImg3} alt='listImg3' />
          <h3>Button Fern</h3>
        </div>
        <div className='singleItem'>
          <AiFillHeart className='icon' />
          <img src={listImg4} alt='listImg4' />
          <h3>Spider Plant</h3>
        </div>

      </div>

      <div className='sallers flex'>

        <div className='topSallers'>
          <div className='heading flex'>
            <h1>Top Sallers</h1>
            <button className='flex btn'>
              See All <TbArrowRightRhombus className='icon' />
            </button>
          </div>
          <div className='card flex'>
            <div className='users'>
              <img src={user1} alt='user1' />
              <img src={user2} alt='user2' />
              <img src={user3} alt='user3' />
              <img src={user4} alt='user4' />
            </div>
            <div className='cardText'>
              <span>
                14.556 Plant sold<br />
                <small>
                  21sallers <span className='data'>7Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className='featuredSallers'>
          <div className='heading flex'>
            <h1>Featured Sallers</h1>
            <button className='flex btn'>
              See All <TbArrowRightRhombus className='icon' />
            </button>
          </div>
          <div className='card flex'>
            <div className='users'>
              <img src={user1} alt='user1' />
              <img src={user2} alt='user2' />
              <img src={user3} alt='user3' />
              <img src={user4} alt='user4' />
            </div>
            <div className='cardText'>
              <span>
                25.556 Plant sold<br />
                <small>
                  31sallers <span className='data'>14Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Listing