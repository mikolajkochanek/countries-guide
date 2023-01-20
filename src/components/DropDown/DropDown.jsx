import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';
import './DropDown.css'


function Dropdown({ options, value, onChange }) {

  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef(null);

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        style={{
            padding: "0.25rem",
            borderRadius: "0.25rem",
            cursor: "pointer",  
        }}
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="dropdown-container">
      <div className='dropdown-heading' onClick={handleClick}>
        {value || 'Select...'}
        <GoChevronDown  />
      </div>
        {isOpen && <div  className='dropdown-list'>{renderedOptions}</div> }
    </div>

  );
}

export default Dropdown;