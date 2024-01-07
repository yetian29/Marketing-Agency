import Image from "next/image";

const Header = () => {
    return (
        <div className="relative px-4 lg:px-[54px] z-0 bg-white">
          <div className="mx-auto w-full pb-32 pt-20  grid lg:grid-cols-2 items-center">
              <div>
                <h1 className="font-medium tracking-tight text-4xl">
                Software Development Services 
                </h1>
                <p className="text-lg text-black mt-10">

                    We love to shake established thought-patterns and create what has never been attempted before. We take seeds and grow jungles

                </p>
              </div>
                <div className="lg:ml-20 mt-0">

                    <Image src="/images/services/Book.webp" width={400} height={400} alt=""/>
                </div>
          </div>
        </div>
    )
}
export default Header; 
