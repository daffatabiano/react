import Navbar from '../components/Navbar'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style.css'

const Menu = () => {

  const [menus, setMenus] = useState([]);
  const getMenu = () => {
    axios
      .get('https://api.mudoapi.tech/menus')
      .then(res => setMenus(res.data.data.Data))
      .catch(err => {
        console.log(err);
      })

  }

  useEffect(() => {
    getMenu();
  }, [])

  return (
    <div className='menuPages'>
      <Navbar />
      <h1>Our Menu</h1>
      <div className="menu">
        {menus.map((items, index) => (
          <div key={index} className='card'>
            <h1>{items.name}</h1>
            <img style={{ width: '200px' }} src={items.imageUrl} />
            <p>{items.description}</p>
            <Link to={`/menu/${items.id}`}>
              <button>Detail</button>
            </Link>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Menu;