import React from 'react'
import "./activity.css"
import user1 from "../../Assets/user1.jpeg"
import user2 from "../../Assets/user2.jpeg"
import user3 from "../../Assets/user3.jpeg"
import user4 from "../../Assets/user4.jpeg"
import user5 from "../../Assets/user5.jpeg"
import { TbArrowRightRhombus } from "react-icons/tb"

const Activity = () => {
  return (
    <div className='activitySection'>

      <div className='heading flex'>
        <h1>Top Sallers</h1>
        <button className='flex btn'>
          See All <TbArrowRightRhombus className='icon' />
        </button>
      </div>

      <div className='secContainer grid'>

        <div className='singleCustomer flex'>
          <img src={user1} alt='user1' />
          <div className='customDetails'>
            <span className='name'>ola martha</span>
            <small>ordered a new plant</small>
          </div>
          <div className='duration'>2 min ago</div>
        </div>

        <div className='singleCustomer flex'>
          <img src={user2} alt='user1' />
          <div className='customDetails'>
            <span className='name'>ola martha</span>
            <small>ordered a new plant</small>
          </div>
          <div className='duration'>2 min ago</div>
        </div>

        <div className='singleCustomer flex'>
          <img src={user3} alt='user3' />
          <div className='customDetails'>
            <span className='name'>ola martha</span>
            <small>ordered a new plant</small>
          </div>
          <div className='duration'>2 min ago</div>
        </div>

        <div className='singleCustomer flex'>
          <img src={user4} alt='user4' />
          <div className='customDetails'>
            <span className='name'>ola martha</span>
            <small>ordered a new plant</small>
          </div>
          <div className='duration'>2 min ago</div>
        </div>

        <div className='singleCustomer flex'>
          <img src={user5} alt='user5' />
          <div className='customDetails'>
            <span className='name'>ola martha</span>
            <small>ordered a new plant</small>
          </div>
          <div className='duration'>2 min ago</div>
        </div>

      </div>

    </div>
  )
}

export default Activity