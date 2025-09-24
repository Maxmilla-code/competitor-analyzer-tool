import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  BarChart3, Search, Bell, User
} from 'lucide-react';

const navLinks = [
    { to: '/', text: 'Dashboard' },
    { to: '/competitors', text: 'Competitors' },
    { to: '/industries', text: 'Industries' },
    { to: '/reports', text: 'Reports' },
    { to: '/alerts', text: 'Alerts' },
];

const NavBar: React.FC = () => {
    const handleIconClick = (iconName: string) => {
        console.log(`${iconName} icon clicked`);
    };

    const activeLinkStyle = {
        color: 'white',
        borderBottom: '2px solid #3b82f6',
    };

    return (
        <nav className="bg-slate-900 text-white px-6 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                    <BarChart3 className="w-6 h-6 text-blue-400" />
                    <span className="font-bold text-lg">Market Insights</span>
                </div>
                <div className="hidden md:flex space-x-6 text-sm">
                    {navLinks.map(link => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            style={({ isActive }) => isActive ? activeLinkStyle : {}}
                            className="text-slate-300 hover:text-white pb-2"
                        >
                            {link.text}
                        </NavLink>
                    ))}
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-slate-800 text-white pl-10 pr-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <Bell className="w-5 h-5 text-slate-300 hover:text-white cursor-pointer" onClick={() => handleIconClick('Bell')} />
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center cursor-pointer" onClick={() => handleIconClick('User')}>
                    <User className="w-5 h-5 text-white" />
                </div>
            </div>
        </nav>
    )
};

export default NavBar;
