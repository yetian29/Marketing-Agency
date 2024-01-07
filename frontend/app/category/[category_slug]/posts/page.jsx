"use client"

import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { getPostsByCategory } from "@/redux/features/blog/PostsSlice"
import { useParams } from 'next/navigation'
import moment from "moment"
// const posts = [
//     {
//       title: 'Boost your conversion rate',
//       href: '#',
//       category: { name: 'Article', href: '#' },
//       description:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
//       date: 'Mar 16, 2020',
//       datetime: '2020-03-16',
//       imageUrl:
//         'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
//       readingTime: '6 min',
//       author: {
//         name: 'Roel Aufderehar',
//         href: '#',
//         imageUrl:
//           'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       },
//     },
//     {
//       title: 'How to use search engine optimization to drive sales',
//       href: '#',
//       category: { name: 'Video', href: '#' },
//       description:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
//       date: 'Mar 10, 2020',
//       datetime: '2020-03-10',
//       imageUrl:
//         'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
//       readingTime: '4 min',
//       author: {
//         name: 'Brenna Goyette',
//         href: '#',
//         imageUrl:
//           'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       },
//     },
//     {
//       title: 'Improve your customer experience',
//       href: '#',
//       category: { name: 'Case Study', href: '#' },
//       description:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
//       date: 'Feb 12, 2020',
//       datetime: '2020-02-12',
//       imageUrl:
//         'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
//       readingTime: '11 min',
//       author: {
//         name: 'Daniela Metz',
//         href: '#',
//         imageUrl:
//           'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       },
//     },
//   ]
  
const Page = () => {

    const dispatch = useDispatch()
    const params = useParams()
    const category_slug = params.category_slug

   
    useEffect(() => {
        if (category_slug) {
            dispatch(getPostsByCategory(category_slug))
        }
    }, [dispatch, category_slug])
    const posts = useSelector((state) => state.post.posts)
    let categoryName
    if (posts && posts.length > 0) {
        categoryName = posts[0].category.name;
    }

    return(
   <div className="relative bg-gray-50 px-4 pt-16 pb-20 lg:px-[54px] lg:pt-24 lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div className="relative mx-auto w-full">
          <div className="text-left">
           
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{categoryName} Development</h2>
           
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-8 lg:max-w-none lg:grid-cols-3">
            { posts && posts.map((post, index) => (
              <div key={index} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
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
              </div>
            ))}
          </div>
        </div>
      </div> 


        
    )
}
export default Page;
