import React from 'react'
import { PageContext } from './data/PageContext'
import { useContext } from 'react';

export const HeaderMenuItem = ({ text }) => {

    const { activePage, setActivePage } = useContext(PageContext);    

    // const IWasClicked = ()   =>{

    //     setActivePage(text)
    // }

    return (
        <li>
            <a 
                onClick={ ()=> setActivePage(text) }
                //className="headeranchor"
                className={`headeranchor ${activePage === text ? 'active' : ''}`}
                href="#">
                { text }
            </a>
        </li>
      )    
}