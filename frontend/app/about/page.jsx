import Header from "@/components/page/about/Header";
import Content from "@/components/page/about/Content";
import OurClient from "@/components/page/about/OurClients";
import OurAchievements from "@/components/page/about/OurAchievements";
import Images from "@/components/page/about/Images";
import Benefit from "@/components/page/about/Benefit"
import Team from "@/components/page/about/Team";

const Page = () => {
    return(
        <>
            <Header/>
            <Content/>
            <OurClient/>
            <OurAchievements/>
            <Images/>
            <Benefit/>
            <Team/>
        </>
    )
}
export default Page;
