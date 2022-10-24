import  {menuItems}  from  './menuItems' ;
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