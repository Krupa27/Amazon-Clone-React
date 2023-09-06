import {MagnifyingGlassIcon} from "@heroicons/react/24/outline"
import { useState,useEffect } from "react"
import { callAPI } from "../utils/CallApi"
import { useNavigate,createSearchParams } from 'react-router-dom'

const Search = () => {
  const [suggestions,setsuggestions] = useState(null);
  const [searchTerm,setsearchterm] = useState("");
  const [category,setcategory] = useState("All");
  const navigate = useNavigate()

  const onhandlesubmit = (e)=>{
    e.preventDefault();

    navigate({
      pathname:"search",
      search:`${
        createSearchParams({
          category:`${category}`,
          searchTerm:`${searchTerm}`
        })
      }`
    })

    setsearchterm("");
    setcategory("All");
  }

  const getsuggestions=()=>{
    callAPI("data/suggestions.json")
    .then((suggestionresults)=>{
      setsuggestions(suggestionresults);
    })
  }

  useEffect(()=>{
    getsuggestions();
  },[]);


  return (
    <div className='w-[100%]'>
        <div className='flex items-center h-10 bg-amazonclone-yellow rounded'>
            <select onChange={(e)=>setcategory(e.target.value)}  className='p-2 bg-gray-300 text-black border text-xs xl:text-sm'>
                <option>All</option>
                <option>Deals</option>
                <option>Amazon</option>
                <option>Fashion</option>
                <option>Computers</option>
                <option>Home</option>
                <option >Mobiles</option>
            </select>
            <input className='flex grow items-center h-[100%] rounded-l text-black type="text"' value={searchTerm} onChange={(e)=>setsearchterm(e.target.value)}/>
            <button onClick={onhandlesubmit} className='w-[45px]'>
                <MagnifyingGlassIcon className='h-[27px] m-auto stroke-slate-900'/>
            </button>
        </div>
        {suggestions && 
        <div className="bg-white text-black w-full z-40 absolute">
          {
            suggestions.filter((suggestion)=>{
              const currentsearch = searchTerm.toLowerCase();
              const title = suggestion.title.toLowerCase();
              return(
                currentsearch && 
                title.startsWith(currentsearch) && 
                title !== currentsearch
              )
            })
            .slice(0,10)
            .map((suggestion)=>(

              <div key={suggestion.id} onClick={()=>setsearchterm(suggestion.title)}>
                {suggestion.title}
              </div>
            ))
          }

        </div>

        }
    </div>
  )
}

export default Search