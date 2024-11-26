import { MdOutlineShoppingCart } from "react-icons/md";

function Header() {
  return (
    <div className="flex flex-row justify-between items-center border-b border-gray-200 pb-4">
      <div className="flex flex-row justify-between gap-8 items-center">
        <div>
          <h1 className="text-gray-950 font-bold text-2xl">Sneakers</h1>
        </div>
        <div>
          <ul className="flex flex-row gap-8 items-center ">
            <li>
              <a
                className="text-sm text-gray-600 font-light"
                href="Collections"
              >
                Collections
              </a>
            </li>
            <li>
              <a className="text-sm text-gray-600 font-light" href="Men">
                Men
              </a>
            </li>
            <li>
              <a className="text-sm text-gray-600 font-light" href="Women">
                Women
              </a>
            </li>
            <li>
              <a className="text-sm text-gray-600 font-light" href="About">
                About
              </a>
            </li>
            <li>
              <a className="text-sm text-gray-600 font-light" href="Contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className=" flex flex-row gap-8 justify-center items-center">
        <MdOutlineShoppingCart color="gray" className="w-6 h-6" />
        <div className="">
          <img
            src="/src/images/image-avatar.png"
            alt=""
            className="w-12 h-12"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
