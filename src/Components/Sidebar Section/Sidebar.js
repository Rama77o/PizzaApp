import React from 'react'
import "./sidebar.css"
import { AiOutlineDashboard, AiOutlineLineChart } from "react-icons/ai";
import { TiShoppingCart } from "react-icons/ti";
import { MdOutlineExplore } from "react-icons/md";
import { RiProductHuntLine } from "react-icons/ri";
import { SlPieChart } from "react-icons/sl";
import { LuContact } from "react-icons/lu"
import { LiaMoneyBillSolid } from "react-icons/lia"
import { BsQuestionCircle } from "react-icons/bs";
import logo from "../Assets/logo.jpg"

const Sidebar = () => {
  return (
    <div className='sidebar grid'>
      <div className='logoDiv flex'>
        <img src={logo} alt='logo' />
        <h2>Planti.</h2>
      </div>
      <div className='menuDiv'>
        <h3 className='divTitle'>QUICK MENU</h3>
        <ul className='menuLists grid'>
          <li className='listItem'>
            <a href="#" className='menuLink flex'>
              <AiOutlineDashboard className='icon' />
              <span className='smallText'>Dashboard</span>
            </a>
          </li>
          <li className='listItem'>
            <a href="#" className='menuLink flex'>
              <AiOutlineLineChart className='icon' />
              <span className='smallText'>My Order</span>
            </a>
          </li>
          <li className='listItem'>
            <a href="#" className='menuLink flex'>
              <MdOutlineExplore className='icon' />
              <span className='smallText'>Explore</span>
            </a>
          </li>
          <li className='listItem'>
            <a href="#" className='menuLink flex'>
              <SlPieChart className='icon' />
              <span className='smallText'>Products</span>
            </a>
          </li>
        </ul>
      </div>
      <div className='menuDiv'>
        <h3 className='divTitle'>QUICK MENU</h3>
        <ul className='menuLists grid'>
          <li className='listItem'>
            <a href="#" className='menuLink flex'>
              <TiShoppingCart className='icon' />
              <span className='smallText'>Charts</span>
            </a>
          </li>
          <li className='listItem'>
            <a href="#" className='menuLink flex'>
              <RiProductHuntLine className='icon' />
              <span className='smallText'>Trends</span>
            </a>
          </li>
          <li className='listItem'>
            <a href="#" className='menuLink flex'>
              <LuContact className='icon' />
              <span className='smallText'>Contact</span>
            </a>
          </li>
          <li className='listItem'>
            <a href="#" className='menuLink flex'>
              <LiaMoneyBillSolid className='icon' />
              <span className='smallText'>Billings</span>
            </a>
          </li>
        </ul>
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
  )
}

export default Sidebar