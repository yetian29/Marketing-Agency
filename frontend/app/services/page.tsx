import LogoCloud from "@/components/home/LogoCloud";
import Header from "@/components/services/Header";
import ServiceList1 from "@/components/services/ServiceList1";
import ServiceList2 from "@/components/services/ServiceList2";
import ServiceSection from "@/components/services/ServiceSection";

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
