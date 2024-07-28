import Sidebar from "./Sidebar";
import Nav from "./Nav";
import Crd from "./Crd";
import Card2 from "./Card2";
import Card1 from "./Card1";
import Card3 from "./Card3";
import Featured from "./Featured";
import Charts from "./Charts";
import T from "./T";

const Home = () => {
    return (
        <div className="flex ">
            <Sidebar/>
            <div className="flex-[1111px]">
                <Nav/>
                <div className="flex p-5 gap-5">
                    <Crd type="card"/>
                    <Card2 type="card1"/>
                    <Card1 type="card2"/>
                    <Card3 type="card3"/>
                </div>
                <div className="flex p-5 gap-5">
                    <Featured/>
                    <Charts/>
                </div>
                <div className="ml-[550px] mt-[50px] ">
                <span className="text-black text-3xl font-semibold">
                        Top-5 Candidates
                    </span>
                </div>
                
                <div className="shadow-lg m-20 mt-2">
                    <T/>
                </div>
            </div>
        </div>
        
    );
};
export default Home;