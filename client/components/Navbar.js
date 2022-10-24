import  {menuItems}  from  './MenuItems' ;
const menuItem = [
  {
    location: 'Pensacola',
    url: '/',
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
const Navbar = () => {
 return (
  <nav>
   <ul className = 'menus'>
    {menuItems.map((menu, index) => {
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