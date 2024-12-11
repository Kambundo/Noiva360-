import React, { useState } from 'react';

function DropdownMenu({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="menu-item"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a href="#">{title}</a>
      {isOpen && (
        <div className="dropdown">
          {items.map((item, index) => (
            <a href="#" key={index}>
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
