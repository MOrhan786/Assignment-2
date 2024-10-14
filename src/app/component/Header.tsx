import Link from "next/link"


const Header = () => {
  return (
  
    <div>
      <header className="bg-gray-800 py-4">
        <nav className="flex justify-between item-center px-6"> 
          <div className="text-2xl text-gray-200 ">HomePage</div>
           <ul className="flex gap-5 text-white">
           <li>
            <Link  className="hover:text-blue-300" href="/">HomePage</Link>
          </li>
          <li>
            <Link  className="hover:text-blue-300" href="/about">About Us</Link>
          </li>
          {/* Here we used Target tag ( which is open in next tab)*/}
          <li>
            <Link  className="hover:text-blue-700" href="/contact " target="_blank">
              Contact us
            </Link>
          </li>
          <li>
            <Link  className="hover:text-blue-600" href="/services">Services</Link>
          </li>


           </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header

