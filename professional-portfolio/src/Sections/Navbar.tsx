import { useState } from "react";

type NavbarItem = {
    name: string;
    label: string;
    icon: string;
    className?: string;
}

const navbarItems: NavbarItem[] = [
    { name: "hero", label: "Home", icon: "home", className: "active", },
    { name: "about", label: "About", icon: "person", },
    { name: "skills", label: "Skills", icon: "handyman", },
    { name: "experience", label: "Experience", icon: "work", },
    { name: "projects", label: "Projects", icon: "tactic", },
    { name: "contact", label: "Contact", icon: "mail", },
]

const Navbar = () => {
    const [mouseIn, setMouseIn] = useState('');

    return (
        <header id="header" className="fixed flex flex-col justify-center top-0 left-0 bottom-0 z-[9997] p-5 overflow-y-auto">
            <div className="m-0 p-0">
                    {
                    navbarItems.map((item: NavbarItem) => (
                            
                        <a
                            href={`#${item.name}`}
                            className="flex items-center text-body-2 px-4 mb-2 rounded-full bg-body-3 h-14 overflow-hidden hover:text-body-3 hover:bg-blue"
                            onMouseEnter={() => setMouseIn(item.name)}
                            onMouseLeave={() => setMouseIn('')}
                            >
                                    <span className="material-symbols-outlined text-xl">{item.icon}</span>
                                    <span className={`pl-3 ${mouseIn === item.name ? '' : 'hidden'}`}>{item.label}</span>
                                </a>
                            
                        ))
                    }
           </div>
        </header>
    );
};

export default Navbar;