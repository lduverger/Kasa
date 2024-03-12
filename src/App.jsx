import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Housing from './pages/Housing'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
      <div className='application'>
        <div className='main'>
          <Header />
          <Routes>
            <Route path='/Kasa' element={<Home />}></Route>
            <Route path='/Kasa/about' element={<About />}></Route>
            <Route path='/Kasa/housing/:id' element={<Housing />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </div>
        <div className='main_footer'>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
