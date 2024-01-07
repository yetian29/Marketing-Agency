import { getPostsLatestByCategories } from "@/redux/features/blog/PostsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import Link from "next/link";

const Posts =  () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPostsLatestByCategories())
    }, [dispatch])

    const categoriesWithPosts = useSelector((state) => state.post.categories_with_posts)
    
    return(
    <div className="relative bg-gray-50 px-4 pt-16 pb-20 lg:px-[54px] lg:pt-24 lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div className="relative mx-auto w-full">
            {
                categoriesWithPosts && categoriesWithPosts.map(({category, posts}, index) => (
                  <div key={index}>
                    <Link href={`/category/${category.slug}/posts`} className="flex justify-between mt-16">
                    
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{category.name} Development</h2>
                            <div className="flex items-center">
                               
                            <p className="font-semibold text-xl">See more</p>
                            <i className='bx bx-chevron-right text-2xl ml-2'></i>
                            </div> 
                    </Link>

                    <div className="mx-auto mt-12 grid max-w-lg gap-8 lg:max-w-none lg:grid-cols-3">
                        { posts && posts.map((post, index) => (
                        <Link href={`/blog/${post.slug}`} key={index} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                            <div className="w-[550px] h-[350px] overflow-hidden">
                            <img className="w-full h-full object-cover hover:scale-110 ease-out transition-transform duration-500" src={`${process.env.NEXT_PUBLIC_API_URL}/${post.img}`} alt="" />
                            </div>
                            <div className="flex flex-1 flex-col justify-between bg-white p-6">
                            <div className="flex-1">
                                <p className="text-sm font-medium text-indigo-600">
                                <a href="" className="hover:underline">
                                    {post.category.name}
                                </a>
                                </p>
                                <a href="" className="mt-2 block">
                                <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                                <p className="mt-3 text-base text-gray-500">{post.description}</p>
                                <div className="mt-4 flex justify-between">
                                    <p>{moment(post.date_created).format("LL")}</p>
                                    <p>{post.time_read} min read</p>
                                </div>
                                </a>
                            </div>
                            
                            </div>
                        </Link>
                        ))}
                    </div>
                  </div>

                ))}
        </div>
    </div> 
    )
}
export default Posts;