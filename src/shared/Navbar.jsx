import { useState } from 'react'
import '../styles/styles.scss'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () =>{
        setIsOpen(!isOpen);
    }


  return (
    <div className={`navbar_container ${isOpen ? 'open' :''}`}>
        <div className="hamburger" onClick={toggleMenu}>
        ☰
        </div>
        <ul>
            <li>Action</li>
            <li>Animation</li>
            <li>Adventure</li>
            <li>Comedy</li>
            <li>Fantay</li>
            <li>Horror</li>
        </ul>
    </div>

  )
}

export default Navbar