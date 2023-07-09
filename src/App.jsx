import './App.css'

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'



import HomePage from './pages/HomePage/HomePage'
import ContactPage from './pages/ContactPage/ContactPage'
import ProductPage from './pages/ProductPage/ProductPage'
import FaqPage from './pages/FaqPage/FaqPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/contacts' element={<ContactPage/>} />
          <Route path='/products' element={<ProductPage/>} />
          <Route path='/faq' element={<FaqPage/>} />
          <Route path='*' element={<NotFoundPage/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
