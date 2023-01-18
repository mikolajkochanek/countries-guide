import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';


function Dropdown({ options, value, onChange }) {

  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

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
    <div ref={divEl} style={{position: "relative", width: "12rem",}}>
      <div style={{padding: "0.75rem", backgroundColor: "#ffffff", width: "100%",borderRadius: "0.25rem", borderWidth: "1px", boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",}}
        onClick={handleClick}
      >
        {value?.label || 'Select...'}
        <GoChevronDown className="text-lg" />
      </div>
        {isOpen && <div style={{padding: "0.75rem", backgroundColor: "#ffffff", width: "100%",borderRadius: "0.25rem", borderWidth: "1px", boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"}}>{renderedOptions}</div> }
      </div>

  );
}

export default Dropdown;