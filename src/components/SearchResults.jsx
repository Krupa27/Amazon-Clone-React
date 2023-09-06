import { useSearchParams,Link } from 'react-router-dom'
import { useEffect,useState } from 'react'
import { callAPI } from "../utils/CallApi"
import  ProductDetails  from "./ProductDetails"
import { GB_CURRENCY } from '../utils/constants'



const SearchResults = () => {
  const [searchParams] = useSearchParams(); 
  const [products,setProducts] = useState();

  const getsearchresults=()=>{
    const searchTerm = searchParams.get("searchTerm");
    const category = searchParams.get("category")


    callAPI(`data/search.json`)
    .then((SearchResults)=>{
      const categoryResults = SearchResults[category];
      if(searchTerm){
        const results = categoryResults.filter(product=> product.title.toLowerCase().includes(searchTerm.toLowerCase()))
        setProducts(results);
      }else{
        setProducts(categoryResults)
      }
    })
  }

useEffect(()=>{
 getsearchresults();
},[searchParams])

  return (
    <div className='min-w-[1200px] max-w-[1300px] m-auto'>
      { products && products.map((product,key)=>{
          return (
          <Link key={key} to={`/product/${product.id}`}>
            <div className='h-[250px] rounded mt-1 mb-1 grid grid-cols-12'>
            <div className='col-span-2 p-4 bg-gray-200'>
              <img className='m-auto' src={product.image_small} />
            </div>
            <div className='col-span-10 bg-gray-20 border border-gray-100 hover:bg-gray-100'>
              <div className='font-medium text-black p-2'>
                <ProductDetails product={product} ratings={true}/>
                <div className='text-xl xl:text-2xl pt-1'>{GB_CURRENCY.format(product.price)}</div>
              </div>
            </div>
            </div>
          </Link>
          )
        })
      }
    </div>
  )
}

export default SearchResults