import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const DesktopMenu = ({ menu }) => {
  const [isHover, toggleHover] = useState(false);

  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: { duration: 0.5 },
      display: 'block',
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: { duration: 0.5 },
      transitionEnd: { display: 'none' },
    },
  };

  const hasSubMenu = menu?.subMenu?.length;

  return (
    <motion.li
      key={menu.name}
      className="group/link"
      onHoverStart={() => {
        toggleHoverMenu();
      }}
      onHoverEnd={toggleHoverMenu}
    >
      {menu.href ? (
        <Link
          to={menu.href}
          className="itemsCenter transition-all duration-150 hover:text-primary gap-1 cursor-pointer px-3 py-1 rounded-xl"
        >
          {menu.name}
          {hasSubMenu && (
            <ChevronDown className="mt-[0.6px] group-hover/link:rotate-180 duration-200" />
          )}
        </Link>
      ) : (
        <span className="itemsCenter transition-all duration-150 hover:text-primary gap-1 cursor-pointer px-3 py-1 rounded-xl">
          {menu.name}
          {hasSubMenu && (
            <ChevronDown className="mt-[0.6px] group-hover/link:rotate-180 duration-200" />
          )}
        </span>
      )}
      {hasSubMenu && (
        <motion.div
          className="sub-menu"
          initial="exit"
          variants={subMenuAnimate}
          animate={isHover ? 'enter' : 'exit'}
        >
          <div
            className={`grid gap-2 ${
              menu.gridCols === 3
                ? 'grid-cols-3'
                : menu.gridCols === 2
                ? 'grid-cols-2'
                : 'grid-cols-1'
            }`}
          >
            {hasSubMenu &&
              menu.subMenu.map((submenu, i) => (
                <div key={i} className="relative cursor-pointer">
                  {menu.gridCols > 1 && menu?.subMenuHeading?.[i] && (
                    <p className="text-lg mb-4 text-gray-500">
                      {menu?.subMenuHeading?.[i]}
                    </p>
                  )}
                  <Link
                    to={submenu.href}
                    className="itemsCenter gap-x-1 group/menubox"
                  >
                    <div className="w-fit p-1 rounded-md">
                      {/* <img src={submenu.icon} className="w-10" alt="" /> */}
                      {submenu.icon && <submenu.icon />}
                    </div>
                    <div>
                      <h6 className="font-semibold text-lg transition-all duration-150 hover:text-primary">
                        {submenu.name}
                      </h6>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </motion.div>
      )}
    </motion.li>
  );
};

export default DesktopMenu;
