import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AI from './components/AI'
import BlogCard from './components/BlogCard'
import InfoCard from './components/InfoCard'
import PopularDoctor from './components/popularDoctor'
import SpecialistCard from './components/SpecialistCard'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/no" element={<InfoCard />} />
          <Route path="/blog" element={<BlogCard />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/popular-doctor" element={<PopularDoctor />} />
          <Route path="/" element={<SpecialistCard />} />

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
