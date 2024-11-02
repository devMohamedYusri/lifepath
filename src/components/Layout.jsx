import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaCog, FaInfo, FaEnvelope, FaChartPie, FaFileAlt } from 'react-icons/fa';
import { IoMdArrowDropdown } from "react-icons/io";
import { CiUser } from 'react-icons/ci';
import { IoBagOutline, IoSearchOutline } from 'react-icons/io5';
import logo from '../assets/lifepath.jpg';
import { GoSidebarCollapse, GoSidebarExpand } from 'react-icons/go';
function Layout({ activeLink, setActiveLink }) {
    const [profileOpen, setProfileOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const links = [
        { name: 'الصفحة الرئيسية', icon: <FaHome />, link: '/home', active: activeLink === 'Home' },
        { name: 'الحجز', icon: <FaUser />, link: '/profile', active: activeLink === 'Profile' },
        { name: 'جدول المواعيد', icon: <FaCog />, link: '/settings', active: activeLink === 'Settings' },
        { name: 'الرسائل', icon: <FaInfo />, link: '/about', active: activeLink === 'About' },
        { name: 'زيارات منزلية', icon: <FaEnvelope />, link: '/contact', active: activeLink === 'Contact' },
        { name: 'الصيدلية ', icon: <FaChartPie />, link: '/reports', active: activeLink === 'Reports' },
        { name: 'التحاليل الطبية', icon: <FaFileAlt />, link: '/documents', active: activeLink === 'Documents' },
    ];

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div className="flex flex-col overflow-x-hidden">
            {/* Nav bar */}
            <nav className="flex items-center justify-between shadow-lg z-10">
                <div className='flex  w-full items-center'>
                    <Link to="/home" onClick={() => handleLinkClick('Home')} className="w-1/6 h-full">
                        <img src={logo} alt="Logo" className="h-16 " />
                    </Link>
                    <div className="flex items-center border rounded-md w-2/6 relative h-full">
                        <Link className="h-15 absolute">
                            <IoSearchOutline className="size-10 p-2 h-full transform -scale-x-100" />
                        </Link>

                        <input
                            type="text"
                            placeholder="اكتب اسم الطبيب "
                            className="p-2.5 pr-14 outline-none h-full w-full  rounded-md bg-blue-100"
                        />
                    </div>
                </div>
                <div className="flex items-center justify-end space-x-4 w-1/6">
                    <Link to="/cart">
                        <IoBagOutline className='w-6 h-8 m-4 text-blue-500' />
                    </Link>
                    <div className="relative flex flex-col items-center">
                        <CiUser className='w-8 h-8 m-4 mb-0 text-blue-500' onClick={() => setProfileOpen(!profileOpen)} />
                        <div className='flex'>
                            <IoMdArrowDropdown className={`w-6 h-6 text-blue-500 ${profileOpen ? 'rotate-180' : ''}`} />
                            <span className="text-sm text-blue-500">حسابي</span>
                        </div>
                        {profileOpen && (
                            <div className="absolute top-full left-0 mt-2 w-fit bg-white shadow-lg rounded-md py-2">
                                <Link to="/profile" onClick={() => handleLinkClick('Profile')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
                                <Link to="/settings" onClick={() => handleLinkClick('Settings')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</Link>
                                <Link to="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</Link>
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            {/* side bar  */}
            <div className={`flex flex-col ${sidebarOpen ? 'w-64' : 'w-16'} transition-all duration-300 ease-in-out items-center bg-white h-[90vh]`}>
                <div className="flex flex-col items-start h-full shadow-xl p-5 my-2 rounded-2xl">
                    <div className="flex mr-auto">
                        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded-full ">
                            {sidebarOpen ? <GoSidebarCollapse className='size-6'/> : <GoSidebarExpand className='size-6' />
                            }
                        </button>
                    </div>
                    <div className="flex flex-col">
                        {links.map((link) => (
                            <Link key={link.name} to={link.link} onClick={() => handleLinkClick(link.name)} className={`flex items-center ${link.active ? 'bg-blue-500 text-white' : ''} space-y-2 pl-2 rounded-xl`}>
                                <span className="size-8 mt-4 p-2">{link.icon}</span>
                                <span className={`${sidebarOpen ? 'text-base space-y-1 p-2' : 'hidden'}`}>{link.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout; 