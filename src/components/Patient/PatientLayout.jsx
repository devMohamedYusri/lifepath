import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaHome, FaUser, FaCog, FaInfo, FaEnvelope, FaChartPie, FaFileAlt, FaCheckCircle } from 'react-icons/fa';
import { IoMdArrowDropdown } from "react-icons/io";
import { CiUser } from 'react-icons/ci';
import { IoBagOutline, IoSearchOutline } from 'react-icons/io5';
import logo from '../../assets/lifepath.jpg';
import { GoQuestion, GoSidebarCollapse, GoSidebarExpand } from 'react-icons/go';
import { RiCalendarScheduleLine } from 'react-icons/ri';

function PatientLayout() {
    const [profileOpen, setProfileOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [activeLink, setActiveLink] = useState('الصفحة الرئيسية');
    const links = [
        { name: 'الصفحة الرئيسية', icon: <FaHome />, link: '/patient/home', active: activeLink === 'الصفحة الرئيسية' },
        { name: 'الحجز', icon: <FaUser />, link: '/patient/booking', active: activeLink === 'الحجز' },
        { name: 'جدول المواعيد', icon: <RiCalendarScheduleLine />, link: '/patient/schedule', active: activeLink === 'جدول المواعيد' },
        { name: 'زيارات سابقة', icon: <FaCog />, link: '/patient/previous-visits/', active: activeLink === 'زيارات سابقة' },
        { name: 'الرسائل', icon: <FaInfo />, link: '/patient/messages', active: activeLink === 'الرسائل' },
        { name: 'زيارات منزلية', icon: <FaEnvelope />, link: '/patient/booking/home-visits', active: activeLink === 'زيارات منزلية' },
        { name: 'الصيدلية ', icon: <FaChartPie />, link: '/patient/pharmacy', active: activeLink === 'الصيدلية ' },
        { name: 'اسأل سؤال ', icon: <GoQuestion /> , link: '/patient/questions', active: activeLink === 'اسأل سؤال ' },
        { name: 'نصائح طبية', icon: <FaCheckCircle />, link: '/patient/medical-advices', active: activeLink === 'نصائح طبية' },
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
                    <Link to="/patient/pharmacy/cart">
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
                <div className={`flex flex-col ${sidebarOpen ? 'w-48' : 'w-16'} transition-all 
                                duration-300 ease-in-out bg-white h-full shadow-xl flex-shrink-0`}>
                    <div className="flex flex-col items-start h-full p-3 my-2 rounded-2xl w-full">
                        <div className="flex mr-auto">
                            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded-full">
                                {sidebarOpen ? <GoSidebarCollapse className='size-6' /> : <GoSidebarExpand className='size-6' />}
                            </button>
                        </div>
                        <div className="flex flex-col rounded-3xl">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.link}
                                    onClick={() => handleLinkClick(link.name)}
                                    className={`flex items-center ${link.active ? 'bg-[#4E70FB] text-white ' : ''} p-1 rounded-xl space-x-2`}
                                >
                                    <span className="size-8 flex items-center justify-center">{link.icon}</span>
                                    <span className={`${sidebarOpen ? 'm-0' : 'hidden'} flex items-center`}>{link.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex-grow overflow-y-auto bg-gray-200 h-full ">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default PatientLayout;
