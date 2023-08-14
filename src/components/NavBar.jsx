import React from 'react'
import Search from './Search'
import {ShoppingCartIcon} from "@heroicons/react/24/outline"
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header className='min-w-[1000px]'>
        <div className='flex bg-amazonclone text-white h-[60px]'>
            <div className='flex items-center m-4'>
                <Link to={"/"}>
                    <img className='h-[35px] w-[100px] m-2' src={"../images/amazon.png"} />
                </Link>
                <div className='pr-4 pl-4'>
                    <div className='text-xs xl:text-sm'>Deliver To</div>
                    <div className='text-sm xl:text-base font-bold'>India</div>
                </div>
            </div>

            <div className='flex grow relative items-center'>
                <Search/>
            </div>

            <div className='flex items-center m-4'>
                 <div className='pr-4 pl-4'>
                    <div className='text-xs xl:text-sm'>Hello, sign in</div>
                    <div className='text-sm xl:text-base font-bold'>Accounts & Lists</div>
                </div>
                 <div className='pr-4 pl-4'>
                    <div className='text-xs xl:text-sm'>Return</div>
                    <div className='text-sm xl:text-base font-bold'>& Orders</div>
                </div>
                <Link to={"/checkout"}>
                    <div className='flex pr-3 pl-3'>
                        <ShoppingCartIcon className="h-[48px]" />
                        <div className='mt-7 text-xs xl:text-sm font-bold'>
                            Cart
                        </div>
                    </div>
                </Link>
            </div>
        </div>
        <div className='flex bg-amazonclone text-white space-x-3 text-xs xl:text-sm p-2 pl-5 font-semibold'>
            <div>Today's Deals</div>
            <div>Custom Service</div>
            <div>Registry</div>
            <div>Gift Cards</div>
            <div>Sell</div>
        </div>
    </header>
  )
}

export default NavBar