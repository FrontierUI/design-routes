import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ Menus, isOpenMain }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);

  useEffect(() => {
    setIsOpen(isOpenMain);
  }, [isOpenMain]);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };

  const subMenuDrawer = {
    enter: { height: 'auto', overflow: 'hidden' },
    exit: { height: 0, overflow: 'hidden' },
  };

  return (
    <div>
      <button className="lg:hidden z-[999] relative" onClick={toggleDrawer}>
        {isOpen ? <X /> : <Menu />}
      </button>

      <motion.div
        className="fixed left-0 right-0 top-16 overflow-y-auto h-full bg-gray-100 backdrop-blur text-[#111] p-4 pb-20"
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? '0%' : '-100%' }}
      >
        <ul>
          {Menus.map(({ name, href, subMenu }, i) => {
            const isClicked = clicked === i;
            const hasSubMenu = subMenu?.length;
            return (
              <li key={name} className="">
                {href ? (
                  <Link
                    to={href}
                    className="flexBetween p-4 hover:bg-white/5 rounded-md cursor-pointer relative"
                    onClick={() => {
                      setClicked(isClicked ? null : i);
                      toggleDrawer();
                    }}
                  >
                    {name}
                    {hasSubMenu && (
                      <ChevronDown
                        className={`ml-auto ${isClicked && 'rotate-180'} `}
                      />
                    )}
                  </Link>
                ) : (
                  <span
                    className="flexBetween p-4 hover:bg-white/5 rounded-md cursor-pointer relative"
                    onClick={() => setClicked(isClicked ? null : i)}
                  >
                    {name}
                    {hasSubMenu && (
                      <ChevronDown
                        className={`ml-auto ${isClicked && 'rotate-180'} `}
                      />
                    )}
                  </span>
                )}
                {hasSubMenu && (
                  <motion.ul
                    initial="exit"
                    animate={isClicked ? 'enter' : 'exit'}
                    variants={subMenuDrawer}
                    className="ml-4"
                  >
                    {subMenu.map(({ name, href, icon }) => (
                      <li
                        key={name}
                        className="p-2 itemsCenter hover:bg-white/5 rounded-md gap-x-2 cursor-pointer"
                        onClick={() => toggleDrawer()}
                      >
                        <Link
                          to={href}
                          className="flex items-center justify-start transition duration-300 hover:text-[#0000ff] text-gray-900"
                          onClick={() => toggleDrawer()}
                        >
                          <img src={icon} className="w-8 mr-2" alt="" />
                          {name}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
};

export default MobileMenu;
