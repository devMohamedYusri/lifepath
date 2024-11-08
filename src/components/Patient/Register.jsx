import { useState } from 'react';
import logo from '../../assets/lifepath.png'
import Input from '../../design/Input'
import Label from '../../design/Label'
import { Link } from 'react-router-dom';
import Button from '../../design/Button';
function Register() {
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
                    <Label InputId="fullName" text="الاسم بالكامل  " />
                    <Input
                        type="text"
                        holder="قم بكتابة اسمك ثلاثي بينه مسافات  "
                        id="fullName"
                        name="fullName"
                        className="text-blue-500 focus:ring-blue-500 mx-0"
                    />
                </div>
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
                    <Label InputId="text" text="رقم الهاتف" />
                    <Input
                        type="text"
                        holder="قم بكتابة رقم هاتفك"
                        id="password"
                        name="password"
                        className="text-blue-500 focus:ring-blue-500 mx-0"
                    />
                </div>

                <div >
                    <Label InputId="password" text=" كلمة المرور" />
                    <Input
                        type="password"
                        holder="قم بكتابة كلمة السر"
                        id="password"
                        name="password"
                        className="text-blue-500 focus:ring-blue-500 mx-0"
                    />
                </div>
                <div >
                    <Label InputId="password" text=" تأكيد كلمة المرور" />
                    <Input
                        type="password"
                        holder="قم بتاكيد كلمة السر"
                        id="password"
                        name="password"
                        className="text-blue-500 focus:ring-blue-500 mx-0"
                    />
                </div>
                <Button text=" انشاء حساب" className="bg-[#4E70FB] text-white" type="submit"/>
            </form>

            <Link to=""className="text-red-500 p-3 inline-block w-full text-center ">
                    لدي حساب بالفعل ؟
            </Link>
        </div>
    )
}

export default Register