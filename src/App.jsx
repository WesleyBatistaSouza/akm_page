import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import { createBrowserRouter } from 'react-router-dom'
import CampRoute from './routes/CampRoute'


const router = createBrowserRouter([
  {path: './pages/Campeonato.jsx', element: <CampRoute />},
])

export default function App() {



  return (<><Header /><main><Home /></main><Footer /></>)
}