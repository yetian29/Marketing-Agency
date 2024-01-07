import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { getCategoryList } from "@/redux/features/category/CategoriesSlice"
import { useSelector } from 'react-redux';
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Header = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCategoryList())
    }, [dispatch])

    // Use useSelector to access data from the Redux store
    const categories = useSelector((state) => state.category.categories) 

    const [term, setTerm] = useState("")
    const  router = useRouter()

    const inputedInfo = (e) => {
        setTerm(e.target.value)
    } 

    const handleSearch = (e) => {
        e.preventDefault();
        router.push(`/search/${term}`);  
        setTerm("")
    }
    return(
        <div className="lg:px-12 px-4 mt-16">
            <h1 className="text-3xl font-medium">Blog</h1>
            <div className="mt-5 flex justify-between">

            <div className="flex gap-5">
            {
              categories && categories.map((item, index) => (
                <div key={index}>
                    <Link href={`/category/${item.slug}/posts`} className="text-xl font-medium hover:text-orange-button">{item.name}</Link>

                    {item.sub_category && item.sub_category.length > 0 && (
                        <Link href={`/category/${item.sub_category[0].slug}/posts`} className="ml-5 text-xl font-medium hover:text-orange-button">
                            {item.sub_category[0].name}
                        </Link>
                    )}
                </div>
    ))
   
 
            }
            </div>

            <form onSubmit={e => handleSearch(e)} className="w-[29%]">
                <div className="relative flex items-center">
                    <input
                    onChange={e => inputedInfo(e)}
                    id="search"
                    name="search"
                    required
                    className="block w-full bg-white border-orange-button border-2 rounded-3xl py-2 pl-4 pr-3 text-sm placeholder-gray-400 focus:outline-none focus:text-gray-900 focus:placeholder-gray-300 sm:text-sm"
                    placeholder="What are you looking for..."
                    type="search"
                    />
                    <button type='submit' className="absolute inset-y-0 right-0 pl-3 flex items-center bg-orange-button w-14 rounded-r-3xl cursor-pointer">
                        <i className='bx bx-search text-xl text-white flex pl-1'></i>
                    </button>
                </div>
            </form>                


            </div>
        </div>
   
    )
}
export default Header;
