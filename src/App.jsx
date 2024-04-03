import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Housing from './pages/housing/Housing'
import NotFound from './pages/notFound/NotFound'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

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
