import Logo from "./Logo"
import LinksDropdown from "./LinksDropdown"

export default function Navbar() {
    return ( 
        <nav className="bg-black" >
            <div className="container flex flex-col sm:flex-row sm:justify-start sm:items-center flex-wrap gap-10 text-white  py-2">
                <Logo/> 
                <LinksDropdown/>    
            </div>
            
        </nav>
    );
}