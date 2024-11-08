import { useState } from 'react';
import logo from '../../assets/lifepath.png'
import Input from '../../design/Input'
import Label from '../../design/Label'
import { Link } from 'react-router-dom';
import Button from '../../design/Button';
import { FcGoogle } from 'react-icons/fc';
import { FiFacebook } from 'react-icons/fi';
import { FaApple } from 'react-icons/fa';
function Login() {
    const [selectedRole, setSelectedRole] = useState('');

    const handleRoleChange = (e) => {
        setSelectedRole(e.target.value);
    };
    return (
        <div className='p-3 px-36'>
            <img src={logo} alt="lifepath" className="w-36 h-fit mx-auto" />
            <form>
                <p className="text-[#909090] font-semibold mb-2" >
                    قم باختيار المستخدم
                </p>
                <div className="flex w-fit mb-2 items-center">
                    <Input
                        type="radio"
                        className="border-2 border-black"
                        id="doctor"
                        name="role"
                        value="doctor"
                        checked={selectedRole === 'doctor'}
                        onChange={handleRoleChange}
                    />
                    <Label inputId="doctor" text="طبيب" />
                </div>
                <div className="flex w-fit items-center">
                    <Input
                        type="radio"
                        id="patient"
                        name="role"
                        value="patient"
                        checked={selectedRole === 'patient'}
                        onChange={handleRoleChange}
                        className="text-blue-500 focus:ring-blue-500"
                    />
                    <Label InputId="patient" text="مريض" />
                </div>
                <p className="text-[#909090] font-semibold mb-2 w-full text-center">
                    قم بتسجيل الدخول او انشاء حساب  
                </p>
                <div >
                    <Label InputId="email" text="البريد الاكتروني" />
                    <Input
                        type="email"
                        holder="قم بكتابة البريد الاكتروني"
                        id="email"
                        name="email"
                        className="text-blue-500 focus:ring-blue-500 mx-0"
                    />
                </div>
                <div >
                    <Label InputId="password" text=" كلمة المرور" />
                    <Input
                        type="text"
                        holder="قم بكتابة كلمة السر"
                        id="password"
                        name="password"
                        className="text-blue-500 focus:ring-blue-500 mx-0"
                    />
                </div>
                <Link to="" className="text-red-500 pb-3 inline-block">
                    هل نسيت كلمة المرور؟
                </Link>

                <Button text="تسجيل الدخول" className="bg-[#4E70FB] text-white" type="submit"/>
            </form>

            <Link to=""className="text-red-500 p-3 inline-block w-full text-center ">
                    أنشاء حساب
            </Link>

            <Button icon={FcGoogle} text="تسجيل الدخول بواسطة جوجل" className="text-black justify-between px-20" />
            <Button icon={FiFacebook} text="تسجيل الدخول بواسطة فيسبوك"  className="text-black justify-between px-20"/>
            <Button icon={FaApple} text="تسجيل الدخول بواسطة أبل"  className="text-black justify-between px-20"/>

        </div>
    )
}

export default Login