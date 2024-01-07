
"use client"

import Carousel from '@itseasy21/react-elastic-carousel';

const posts = [
    { image: "/images/about/01.webp"},
    { image: "/images/about/02.webp"},
    { image: "/images/about/03.webp"},
    { image: "/images/about/04.webp"},
  ]
  
  export default function Images(){
    return (


            <Carousel>
                {posts.map((post, index) => (
                    <div key={index}>
                        <img className=" h-auto w-full object-cover" src={post.image} alt="" />

                    </div>

                ))}
            </Carousel>

    )
  }
