import React from 'react';
import {
  BarChart3, Search, Bell, User
} from 'lucide-react';

const NavBar: React.FC = () => {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
        e.preventDefault();
        console.log(`Navigating to ${section}`);
        // In a real app, you'd use a router here
      };

      const handleIconClick = (iconName: string) => {
        console.log(`${iconName} icon clicked`);
      };

    return (
        <nav className="bg-slate-900 text-white px-6 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
                <BarChart3 className="w-6 h-6 text-blue-400" />
                <span className="font-bold text-lg">Market Insights</span>
            </div>
            <div className="hidden md:flex space-x-6 text-sm">
                <a href="#" onClick={(e) => handleNavClick(e, 'Dashboard')} className="text-blue-400 border-b-2 border-blue-400 pb-2">Dashboard</a>
                <a href="#" onClick={(e) => handleNavClick(e, 'Competitors')} className="text-slate-300 hover:text-white">Competitors</a>
                <a href="#" onClick={(e) => handleNavClick(e, 'Industries')} className="text-slate-300 hover:text-white">Industries</a>
                <a href="#" onClick={(e) => handleNavClick(e, 'Reports')} className="text-slate-300 hover:text-white">Reports</a>
                <a href="#" onClick={(e) => handleNavClick(e, 'Alerts')} className="text-slate-300 hover:text-white">Alerts</a>
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
