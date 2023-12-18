"use client"

import { Typewriter } from 'react-simple-typewriter'

import Link from 'next/link'


const navigation = [
    { name: "Web", href: "#"},
    { name: "Video Games", href: "#"},
    { name: "Ethical Hacking", href: "#"},
]

const Header = () => {
    return (
        <div className="relative px-4 lg:px-14 z-0 bg-gray-100">
          <div className="mx-auto w-full  pt-20 pb-32 sm:pt-48 sm:pb-40">
              <div>
                <h1 className="font-medium tracking-tight text-4xl text-orange-button">
                  Agency for <span> </span>
                    <span>
                    <Typewriter
                    words={["Dreamers", "Creators", "You"]}
                    cursor
                    cursorStyle='|'
                    loop={0}
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                    </span>
                </h1>
                <div className="mt-10 p-1 flex items-center gap-8">


                {navigation.map(( item, index ) => (
                    <Link key={index} href={item.href} className="font-medium text-lg relative overflow-hidden group">
                        <span className="relative mb-4">
                                {item.name}
                            <span className="absolute left-0 right-0 bottom-0 h-[1.5px] bg-orange-button transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 hover:underline-offset-4"></span>

                        </span>
                    </Link>

                ))}
                </div>
              </div>
          </div>
        </div>
    )
}
export default Header;
