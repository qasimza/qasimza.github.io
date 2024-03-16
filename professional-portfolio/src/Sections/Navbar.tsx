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
        <header id="header" className="flex flex-col justify-center">
            <nav className="m-0 p-0">
                <ul className="list-none">
                    {
                        navbarItems.map((item: NavbarItem) => (
                            <li key={item.name} className={`${item.className}`}>
                                <a
                                    href={`#${item.name}`}
                                    className="flex items-center text-body-2 px-4 mb-2 rounded-full bg-body-3 h-14 w-100 overflow-hidden hover:text-body-3 hover:bg-blue"
                                    onMouseOver={() => setMouseIn(item.name)}
                                    onMouseOut={() => setMouseIn('')}
                                >
                                    <span className="material-symbols-outlined text-xl">{item.icon}</span>
                                    <span className={`pl-3 ${mouseIn === item.name ? '' : 'hidden'}`}>{item.label}</span>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;