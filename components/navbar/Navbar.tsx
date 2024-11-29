import Logo from "./Logo"
import Menu from "./Menu";

export default function Navbar() {
    return ( 
        <nav className="bg-white" >
            <div className="container flex flex-col sm:flex-row sm:justify-start sm:items-center flex-wrap gap-10 py-2 px-0 mx-0">
                <Logo/> 
                <Menu/>  
            </div>
        </nav>
    );
}