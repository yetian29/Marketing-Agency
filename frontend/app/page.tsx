import BlogSection from "@/components/page/home/BlogSection"
import Features from "@/components/page/home/Features"
import Header from "@/components/page/home/Header"
import Incentive from "@/components/page/home/Incentive"
import LogoCloud from "@/components/page/home/LogoCloud"
import BlogList from "@/components/page/home/BlogList"

export default function Home() {
  return (
      <div>

            <Header/>
            <Incentive/>
            <BlogSection/>
            <Features/>
            <LogoCloud/>
            <BlogList/>
      </div>
  )
}
