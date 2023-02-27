import React from 'react';

function DropdownMenu() {
    function DropDownItem(props : any) {
        return (
            <div className='DropdownMenuBtn'>
            <ul>
                <li className="Title">Star Wars</li>
                <li className="Backdrop">{/*This is where the picture goes*/}</li>
            </ul>
            </div>
            );
        }
    }

    return (
        <div className='dropdown'>

        </div>
    );
}

export default DropdownMenu;