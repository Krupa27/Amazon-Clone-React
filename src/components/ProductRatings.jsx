import React from 'react'
import {StarIcon} from '@heroicons/react/24/outline'

const ProductRatings = (props) => {
    const starnumber = props.avgRating;
    const ratingnumber = props.ratings;
  return (
    <div className='flex'>
        {Array.from({length:starnumber},(_, i)=> <StarIcon key={i} className='stroke-[#F1B61F] fill-[#F1B61F] h-[20px]' />)}
        {Array.from({length: 5 - starnumber},(_, i)=> <StarIcon key={i} className='stroke-[#F1B61F] h-[20px]' />)}
        <span className='ml-3 text-blue-500'> {ratingnumber} ratings</span>
    </div>
  )
}

export default ProductRatings