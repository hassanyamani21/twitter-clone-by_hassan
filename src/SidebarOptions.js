import React from 'react';
import './sidebaroption.css';

function SidebarOptions({active , text , Icon }) {
    return (
        <div className ={`SidebarOption ${active && 'SidebarOption--active'} `}>
             <Icon /> 
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarOptions
