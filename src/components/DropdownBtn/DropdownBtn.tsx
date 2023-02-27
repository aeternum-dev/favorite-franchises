import React, {useState} from 'react';

import "./DropdownBtn.css";


function DropdownBtn(props : any) {
    const [open, setOpen] = useState(false);
    return (  
        <div className='DropdownBtn' onClick={() => setOpen(!open)}>
            <ul>
                <li className="Title">Star Wars</li>
                <li className="Backdrop">{/*This is where the picture goes*/}</li>
                {open && props.children }
            </ul>
        </div>
    );
}

export default DropdownBtn;