import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/index'
import Home from './pages/Home/index'
import Error from './pages/Error/index'
import About from './pages/About/index'
import Footer from './components/Footer/index'
import Housing from './pages/HousingSheet/index'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <div className="whole__container">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/housingSheet/:id" element={<Housing />} />
                    <Route path="/404" element={<Error />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
