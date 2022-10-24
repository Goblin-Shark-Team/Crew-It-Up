import  {MenuItems}  from  './menuItems' ;

function Navbar()  {
const menuItem = [
  {
    location: 'Pensacola',
    url: '/Pensacola',
  },
  {
    location: 'Austin',
    url: '/Austin',
  },
  {
   location: 'London',
   url: '/London',
  },
  {
   location: 'New York',
   url: '/NewYork',
  },
 ];


 return (
  <nav>
   <ul className = 'menus'>
    {MenuItems.map((menu, index) => {
     return (
      <li 
        className = "menu-items" 
        key = {index} >
        <a href = {menu.url}> {menu.location}</a>
      </li>
     );
    })}
   </ul>
  </nav>
 );
};

export default Navbar;