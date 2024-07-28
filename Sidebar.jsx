import * as React from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import GroupIcon from '@mui/icons-material/Group';
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar  flex-1 min-h-[100vh] border-solid border-gray-300  border-r-2">
            <div className="h-[50px] flex items-center justify-center">
                <Link to="/" className="no-underline">
                <span className="text-3xl font-bold">IntelliHire</span>
                </Link>
                
            </div>
            <hr className=" h-0 border-solid border-gray-300 border-t-2 "/>
            <div className="center mt-40 flex items-center justify-center">
                <ul className="cursor-pointer "> 
                    <li className="hover:bg-blue text-white text-xl ">
                        <DashboardIcon className="text-gray-500 "/>
                        <Link to='/Home' className="no-underline">
                        <span className="pl-2 text-xl text-violet-950 font-semibold ">Dashboard</span>
                        </Link>
                    </li >
                    <li className="mt-40 hover:bg-blue text-white text-xl">
                        <GroupIcon className="text-gray-500 "/>
                        <Link to="/list" className="no-underline">
                        <span className="pl-2 text-xl text-violet-950 font-semibold">Candidates</span>
                        </Link>
                        
                    </li>
                    <li className="mt-40 hover:bg-blue text-white text-xl">
                        <AssessmentIcon className="text-gray-500"/>
                        <Link to='/report' className="no-underline">
                        <span className="pl-2 text-xl text-violet-950 font-semibold">Reports</span>
                        </Link>  
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default Sidebar;