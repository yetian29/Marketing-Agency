import Header from "@/components/about/Header";
import Content from "@/components/about/Content";
import OurClient from "@/components/about/OurClients";
import OurAchievements from "@/components/about/OurAchievements";
import Images from "@/components/about/Images";
import Benefit from "@/components/about/Benefit"
import Team from "@/components/about/Team";

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
