import { Outlet } from 'react-router-dom'
import Home from '../Home'
import Sidebar from '../Sidebar/'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar/>
      <div className="container">
        <span className="tags top-tag">&lt;/div&gt;</span>
        <br/>
        <span className="tags second-top">&lt;body&gt;</span>
        
        <Outlet />
        <span className="tags bottom-tags">&lt;/body&gt;</span>
        <br/>
          <span className=" tags bottom-tag-html">&lt;/div&gt;</span>
        
      </div>
    </div>
  )
}

export default Layout