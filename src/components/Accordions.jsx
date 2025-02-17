import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../contentData/utils';

const AccordionContext = React.createContext({});

const useAccordion = () => React.useContext(AccordionContext);

export function AccordionContainer({ children, className }) {
  return <div className={cn('grid grid-cols-1', className)}>{children}</div>;
}

export function AccordionWrapper({ children }) {
  return <div>{children}</div>;
}

export function Accordion({ children, multiple, defaultValue }) {
  const [activeIndex, setActiveIndex] = React.useState(
    multiple ? (defaultValue ? [defaultValue] : []) : [defaultValue]
  );

  function onChangeIndex(value) {
    setActiveIndex((currentActiveIndex) => {
      if (!multiple) {
        return value === currentActiveIndex ? null : value;
      }
      if (currentActiveIndex.includes(value)) {
        return currentActiveIndex.filter((i) => i !== value);
      }
      return [...currentActiveIndex, value];
    });
  }

  return React.Children.map(children, (child) => {
    const value = child.props.value;
    const isActive = multiple
      ? Array.isArray(activeIndex) && activeIndex.includes(value)
      : Array.isArray(activeIndex)
      ? activeIndex[0] === value
      : activeIndex === value;

    return (
      <AccordionContext.Provider value={{ isActive, value, onChangeIndex }}>
        {child}
      </AccordionContext.Provider>
    );
  });
}

export function AccordionItem({ children, value }) {
  const { isActive } = useAccordion();
  return (
    <div
      className={`rounded-lg transitAll overflow-hidden mb-2 ${
        isActive
          ? 'active border-2  border-primary  bg-gray-50'
          : 'bg-gray-50 border-2 hover:border-primary'
      }`}
      value={value}
    >
      {children}
    </div>
  );
}

export function AccordionHeader({ children, icon }) {
  const { isActive, value, onChangeIndex } = useAccordion();
  return (
    <motion.div
      className={`p-4 cursor-pointer transition-all font-monaSemibold text-slate-900  hover:bg-primary hover:text-white transitAll flex justify-between items-center ${
        isActive ? 'active bg-primary text-white shadow-lg' : 'bg-gray-50'
      }`}
      onClick={() => onChangeIndex(value)}
    >
      {children}
      {icon ? (
        <div
          className={`${
            isActive ? 'rotate-45' : 'rotate-0'
          } transition-transform`}
        >
          {icon}
        </div>
      ) : (
        <ChevronDown
          className={`${
            isActive ? 'rotate-180' : 'rotate-0'
          } transition-transform`}
        />
      )}
    </motion.div>
  );
}

export function AccordionPanel({ children }) {
  const { isActive } = useAccordion();
  return (
    <AnimatePresence initial={true}>
      {isActive && (
        <motion.div
          initial={{ height: 0, overflow: 'hidden' }}
          animate={{ height: 'auto', overflow: 'hidden' }}
          exit={{ height: 0 }}
          transition={{ type: 'spring', duration: 0.5, bounce: 0 }}
          className={`bg-gray-50`}
        >
          <motion.article
            initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
            exit={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            transition={{ type: 'spring', duration: 0.4, bounce: 0 }}
            className={`p-3 bg-transparent text-black`}
          >
            {children}
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
