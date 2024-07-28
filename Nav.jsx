import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";


const Navbar = () => {

    return (
        <div className="navbar h-12 border-b-2 border-gray-300 flex items-center text-sm text-black">
            <div className=" w-full p-5 flex items-center justify-between">
                <div className="flex items-center border-2 border-black rounded-xl p-1">
                    <input type="text" placeholder="Search..." className="border-none outline-none bg-transparent placeholder-text-sm placeholder-black text-black" />
                    <SearchOutlinedIcon />
                </div>
                <div className=" flex items-center">
                    <div className="flex items-center mr-5 relative">
                        <LanguageOutlinedIcon className="icon text-20 text-black" />
                       <span className="text-black font-serif">English</span> 
                    </div>
                    <div className="flex items-center mr-5 relative">
                        <DarkModeOutlinedIcon
                            className="text-20 text-black"

                        />
                    </div>
                    <div className="flex items-center mr-5 relative bg-blue-500">
                        <Link to='/login' className='no-underline'>
                            <Button className="hover:bg-blue-400 text-lg font-bold">
                               <span font-bold text-xl>Login</span> 
                            </Button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
