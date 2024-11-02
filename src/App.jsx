import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Layout from './components/Layout';
import Home from './components/Home';
// import Profile from './components/Profile';
// import Settings from './components/Settings';
// import About from './components/About';
// import Contact from './components/Contact';
// import Reports from './components/Reports';
// import Documents from './components/Documents';

function App() {
    const [activeLink, setActiveLink] = useState('Home');
    return (
        <Router>
            <Layout activeLink={activeLink} setActiveLink={setActiveLink} />
            <Routes>
                {/* <Route path="/home" component={Home} /> */}
                {/* <Route path="/profile" component={Profile} />
                <Route path="/settings" component={Settings} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/reports" component={Reports} />
                <Route path="/documents" component={Documents} /> */}
                <Route path="/" exact component={Layout} />
            </Routes>
        </Router>
    );
}

export default App;
