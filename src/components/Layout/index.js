import { Outlet } from 'react-router-dom'
import Home from '../Home'
import Sidebar from '../Sidebar/'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar/>
      <div className="container">
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout