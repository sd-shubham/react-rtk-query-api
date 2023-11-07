import { useState } from 'react';
import {GoChevronDown,GoChevronLeft} from 'react-icons/go';
function ExpendablePanel({ header, children }) {
const [isExpended, setExpended] = useState(false);
const handleExpandleClick = () => {
    setExpended(!isExpended)
}
  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center">
        <div className="flex flex-row items-center justify-between">
            {header}
        </div>
        <div onClick={handleExpandleClick} className='cursor-pointer'>
        {isExpended ? <GoChevronDown /> : <GoChevronLeft />}
        </div>
      </div>
      <div className="p-2 border-t">
        {isExpended && children}
      </div>
    </div>
  );
}

export default ExpendablePanel;
