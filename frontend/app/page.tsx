import BlogSection from "@/components/home/BlogSection"
import Features from "@/components/home/Features"
import Header from "@/components/home/Header"
import Incentive from "@/components/home/Incentive"
import LogoCloud from "@/components/home/LogoCloud"
import BlogList from "@/components/home/BlogList"

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
