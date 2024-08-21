import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import InfoGrapics from './components/InfoGrapics.jsx'
import NotFound from './components/NotFound.jsx'
import Home from './pages/Home.jsx'
import ChatRoom from './pages/admin/ChatRoom.jsx'
import ProfileView from './pages/admin/ProfileView.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
  <Routes>
    <Route path='/philosopher/:id?' element={<InfoGrapics />}></Route>
    <Route path='/' element={<Home />}></Route>
    <Route path='/add' element={<App />}></Route>
    <Route path='/404' element={<NotFound />}></Route>
    <Route path='/admin/profileview' element={<ProfileView />}></Route>
    <Route path='/admin/chatroom' element={<ChatRoom />}></Route>
  </Routes>
</BrowserRouter>

   
  </React.StrictMode>,
)
