function Header() {
    return (
      <header className="header-container">       
        <nav className='mainNav'>
          <a href='#home' className='navLink'>
            Home
          </a>
          <a href='#product' className='navLink'>
            Product
          </a>
          <a href='#company' className='navLink'>
            Company
          </a>
          <a href='#contact' className='navLink'>
            Contact
          </a>
        </nav>
      </header>
    );
  }
  
  export default Header;