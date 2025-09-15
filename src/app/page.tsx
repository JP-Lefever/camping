import Header from "@/components/layout/header/Header";
import Locations from "@/components/locations/Locations";
import Services from "@/components/services/Services";
import Opinion from "@/components/opinion/Opinion";


export default function Home() {


  return (
    <>
        <Header />
        <Locations/>
        <Services/>
        <Opinion/>
    </>

  );
}
