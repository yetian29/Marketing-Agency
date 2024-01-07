import LogoCloud from "@/components/page/home/LogoCloud";
import Header from "@/components/page/services/Header";
import ServiceList1 from "@/components/page/services/ServiceList1";
import ServiceList2 from "@/components/page/services/ServiceList2";
import ServiceSection from "@/components/page/services/ServiceSection";

const Page = () => {
    return(
    <div>
            <Header/>
            <ServiceList1/>
            <ServiceList2/>
            <LogoCloud/>
            <ServiceSection/>
            
        </div>
    )
}
export default Page;
