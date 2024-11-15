import { NavLink } from "react-router-dom"


const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/" className="w-36 h-8 rounded-lg bg-transparent items-center
      justify-center flex font-bold shadow-xl">
        <p className="blue-gradient_text text-xl ">
            David Jozic
        </p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink to="/about" className={({isActive}) => isActive ? 'text-blue-500'
        : 'text-black'}>
          About
        </NavLink>
        <NavLink to="/projects" className={({isActive}) => isActive ? 'text-blue-500'
        : 'text-black'}>
          Content
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar