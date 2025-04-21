import Container from "@/design/Container.jsx";
import image from "@/assets/react.svg";
import Button from "@/design/Button.jsx";
import { useState } from "react";
import { HeartPulse, Pill , FileText, Video } from 'lucide-react';

export default function Profile() {
    let patient = {
        name: "محمود علي",
        age: 35,
        image: image,
        gender: "ذكر",
        bloodType: "O+",
        email: "john.doe@email.com",
        phone: "(555) 123-4567",
        dob: "15 مارس 1989",
        insurance: "بلو كروس #12345",
        emergencyContact: {
            name: "احمد محمود علي",
            relationship: "اخ",
            phone: "(555) 987-6543"
        }
    }

    const [activeTab, setActiveTab] = useState('medicalHistory');
    const tabActivated=(tab) =>{
        setActiveTab(tab)
    }
    return (
        <div className=" m-2" >
            <Container className="p-3">
                <img src={patient.image}
                    alt="Patient Profile"
                    className="w-24 h-24 rounded-full border" />
                <div>
                    <h2 className="text-2xl font-bold py-3">{patient.name}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                        <p className="text-gray-600">العمر: {patient.age} | Gender: {patient.gender}</p>
                        <p className="text-gray-600">فصيلة الدم: {patient.bloodType}</p>
                        <p className="text-gray-600">الايميل: {patient.email}</p>
                        <p className="text-gray-600">رقم الهاتف: {patient.phone}</p>
                        <p className="text-gray-600">تاريخ الميلاد:{patient.dob}</p>
                        <p className="text-gray-600">التامين:{patient.insurance}</p>
                        <p className="text-gray-600">في حالة الطوارئ : {patient.emergencyContact.name}</p>
                        <p className="text-gray-600"> صلة قرابة للحالةالطوارئ : {patient.emergencyContact.name}</p>
                        <p className="text-gray-600">رقم هاتف للطوارئ: {patient.emergencyContact.phone}</p>
                    </div>
                    <div className="w-fit">
                        <Button className="p-2" text="edit profile" />
                    </div>
                </div>
            </Container>

            <Container className="p-0 mt-2 sm:p-1 md:p-2">
                <div className="my-2 flex flex-wrap gap-1 w-full sm:gap-3">
                    <Button icon={HeartPulse} className="hover:bg-blue-100" onClick={() => tabActivated('medicalHistory')}>Medical History</Button>
                    <Button icon={Pill} className="hover:bg-blue-100" onClick={() => tabActivated('prescriptions')}>Prescriptions</Button>
                    <Button icon={FileText} className="hover:bg-blue-100" onClick={() => tabActivated('labReports')}>Lab Reports</Button>
                    <Button icon={Video} className="hover:bg-blue-100" onClick={() => tabActivated('recordedSessions')}>Recorded Sessions</Button>
                </div>
                <div className="tab-content">
                    {activeTab === 'medicalHistory' && <div>Content for Medical History</div>}
                    {activeTab === 'prescriptions' && <div>Content for Prescriptions</div>}
                    {activeTab === 'labReports' && <div>Content for Lab Reports</div>}
                    {activeTab === 'recordedSessions' && <div>Content for Recorded Sessions</div>}
                </div>
            </Container>
        </div>
    );
}
