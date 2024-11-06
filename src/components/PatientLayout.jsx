import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaHome, FaUser, FaCog, FaInfo, FaEnvelope, FaChartPie, FaFileAlt } from 'react-icons/fa';
import { IoMdArrowDropdown } from "react-icons/io";
import { CiUser } from 'react-icons/ci';
import { IoBagOutline, IoSearchOutline } from 'react-icons/io5';
import logo from '../assets/lifepath.jpg';
import { GoSidebarCollapse, GoSidebarExpand } from 'react-icons/go';

function PatientLayout({ activeLink, setActiveLink }) {
    const [profileOpen, setProfileOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const links = [
        { name: 'الصفحة الرئيسية', icon: <FaHome />, link: '/patient/home', active: activeLink === 'الصفحة الرئيسية' },
        { name: 'الحجز', icon: <FaUser />, link: '/patient/profile', active: activeLink === 'الحجز' },
        { name: 'جدول المواعيد', icon: <FaCog />, link: '/patient/settings', active: activeLink === 'جدول المواعيد' },
        { name: 'الرسائل', icon: <FaInfo />, link: '/patient/about', active: activeLink === 'الرسائل' },
        { name: 'زيارات منزلية', icon: <FaEnvelope />, link: '/patient/contact', active: activeLink === 'زيارات منزلية' },
        { name: 'الصيدلية ', icon: <FaChartPie />, link: '/patient/reports', active: activeLink === 'الصيدلية ' },
        { name: 'التحاليل الطبية', icon: <FaFileAlt />, link: '/patient/documents', active: activeLink === 'التحاليل الطبية' },
    ];

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div className="flex flex-col h-screen overflow-hidden"> 
            <nav className="flex items-center justify-between shadow-lg z-10 bg-white">
                <div className='flex w-full items-center'>
                    <Link to="/patient/home" onClick={() => handleLinkClick('Home')} className="w-1/6 h-full">
                        <img src={logo} alt="Logo" className="h-16" />
                    </Link>
                    <div className="flex items-center border rounded-md w-2/6 relative h-full">
                        <Link className="h-15 absolute">
                            <IoSearchOutline className="size-10 p-2 h-full transform -scale-x-100" />
                        </Link>
                        <input
                            type="text"
                            placeholder="اكتب اسم الطبيب "
                            className="p-2.5 pr-14 outline-none h-full w-full rounded-md bg-blue-100"
                        />
                    </div>
                </div>
                <div className="flex items-center justify-end space-x-4 w-1/6">
                    <Link to="/cart">
                        <IoBagOutline className='w-6 h-8 m-4 text-[#4E70FB]' />
                    </Link>
                    <div className="relative flex flex-col items-center">
                        <CiUser className='w-8 h-8 m-4 mb-0 text-[#4E70FB]' onClick={() => setProfileOpen(!profileOpen)} />
                        <div className='flex'>
                            <IoMdArrowDropdown className={`w-6 h-6 text-[#4E70FB] ${profileOpen ? 'rotate-180' : ''}`} />
                            <span className="text-sm text-[#4E70FB]">حسابي</span>
                        </div>
                        {profileOpen && (
                            <div className="absolute top-full left-0 mt-2 w-fit bg-white shadow-lg rounded-md py-2">
                                <Link to="/patient/profile" onClick={() => handleLinkClick('Profile')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
                                <Link to="/patient/settings" onClick={() => handleLinkClick('Settings')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</Link>
                                <Link to="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</Link>
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            <div className="flex flex-grow overflow-hidden">
                <div className={`flex flex-col ${sidebarOpen ? 'w-[540px]' : 'w-16'} transition-all duration-300 ease-in-out bg-white h-full shadow-xl`}>
                    <div className="flex flex-col items-start h-full p-5 my-2 rounded-2xl">
                        <div className="flex mr-auto">
                            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded-full">
                                {sidebarOpen ? <GoSidebarCollapse className='size-6'/> : <GoSidebarExpand className='size-6' />}
                            </button>
                        </div>
                        <div className="flex flex-col gap-4">
                            {links.map((link) => (
                                <Link key={link.name} to={link.link} onClick={() => handleLinkClick(link.name)} className={`flex items-center ${link.active ? 'bg-[#4E70FB] text-white' : ''} space-y-2 p-0 rounded-xl`}>
                                    <span className="size-8  center p-3">{link.icon}</span>
                                    <span className={`${sidebarOpen ? 'mt-0' : 'hidden'}`}>{link.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex-grow overflow-y-auto bg-gray-200 h-full">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default PatientLayout;
