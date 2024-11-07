import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import PatientLayout from './components/PatientLayout';
import AdminLayout from './components/AdminLayout';
import DoctorLayout from './components/DoctorLayout';
import Home from './components/Home';
import Booking from './components/Booking';
import Specialist from './components/specialist';
import PreviousVisits from './components/PreviousVisits';
// import Profile from './components/Profile';
// import Settings from './components/Settings';
// import About from './components/About';
// import Contact from './components/Contact';
// import Reports from './components/Reports';
// import Documents from './components/Documents';

function App() {
    const [activeLink, setActiveLink] = useState('home');

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/patient/home" />} />
                <Route path="/patient/*" element={<PatientLayout activeLink={activeLink} setActiveLink={setActiveLink} />}>
                    <Route path="home" element={<Home />} />
                    <Route path="booking" element={<Booking />} />
                    <Route path="booking/specialist/:name" element={<Specialist />} />
                    <Route path="previous-visits/" element={<PreviousVisits />} />

                    {/* <Route path="profile" element={<Profile />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="reports" element={<Reports />} />
                    <Route path="documents" element={<Documents />} /> */}
                </Route>

                <Route path="/admin/*" element={<AdminLayout />}>
                </Route>

                <Route path="/doctor/*" element={<DoctorLayout />}>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
