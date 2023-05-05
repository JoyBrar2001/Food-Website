import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { BsCartFill, BsFillSaveFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb'
import { MdFavorite, MdHelp } from 'react-icons/md';
import { FaWallet, FaUserFriends } from 'react-icons/fa';
import { AiFillTag } from 'react-icons/ai'

const Navbar = () => {

  const [nav, setNav] = useState(false);

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      
      <div className='flex items-center'>

        <div onClick={() => setNav(!nav)} className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div>

        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          Best <span className='font-bold'>Eats</span>
        </h1>

        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
          <p className='bg-black text-white rounded-full p-2'>Delivery</p>
          <p className='p-2'>Pickups</p>
        </div>

      </div>

      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg-[500px]'>
        <AiOutlineSearch size={20} />
        <input className='bg-transparent p-2 focus:outline-none' type="text" placeholder='Search Foods' />
      </div>

      <button className='bg-black text-white hidden md:flex items-center py-2 px-4 rounded-full'>
        <BsCartFill size={20} className='mr-2' />
        Cart
      </button>

      <div className={nav ? 'bg-black/80 fixed top-0 left-0 w-full h-screen' : 'bg-black/80 hidden top-0 left-0 w-full h-screen z-'}></div>

        <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300 p-4': 'fixed top-0 left-[-300px] w-[300px] h-screen bg-white z-10 duration-300 p-4'}>
          <AiOutlineClose size={30} className='absolute right-4 top-4 cursor-pointer' onClick={() => setNav(!nav)} />
          <h2 className='text-2xl pb-4'>Best <span className='font-bold'>Eats</span></h2>

            <ul className='flex flex-col p-4 text-gray-800'>
              <li className='text-xl py-4 flex items-center'>
                <TbTruckDelivery size={25} className='mr-2' />
                <p>Orders</p>
              </li>
              <li className='text-xl py-4 flex items-center'>
                <MdFavorite size={25} className='mr-2' />
                <p>Favorites</p>
              </li>
              <li className='text-xl py-4 flex items-center'>
                <FaWallet size={25} className='mr-2' />
                <p>Wallet</p>
              </li>
              <li className='text-xl py-4 flex items-center'>
                <MdHelp size={25} className='mr-2' />
                <p>Help</p>
              </li>
              <li className='text-xl py-4 flex items-center'>
                <AiFillTag size={25} className='mr-2' />
                <p>Promotions</p>
              </li>
              <li className='text-xl py-4 flex items-center'>
                <BsFillSaveFill size={25} className='mr-2' />
                <p>Best Ones</p>
              </li>
              <li className='text-xl py-4 flex items-center'>
                <FaUserFriends size={25} className='mr-2' />
                <p>Invite Friends</p>
              </li>
            </ul>

        </div>

    </div>
  );
}

export default Navbar;
