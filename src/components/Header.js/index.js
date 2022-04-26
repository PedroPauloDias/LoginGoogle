import { Link } from 'react-router-dom';
import React from 'react';
import { AreaHeader } from './styled';

import { AiFillHome } from "react-icons/ai";

import { MdOutlineBuildCircle } from "react-icons/md";
import { MdLogout } from "react-icons/md";




function Header(props) {
  return (
    <AreaHeader>
       <div className="container">
        <div className="logo">
          <img src="../../../Logo.png"/>
        </div>

        <nav>
          <ul>
            <li><Link to="/"><AiFillHome/> Inicío</Link></li>
            <li><Link to="/config"><MdOutlineBuildCircle/>Configurações</Link></li>
            <li><Link to="/logout"><MdLogout/> Sair</Link></li>            
          </ul>

          <div className="avatar">
            <img src={props.user.avatar} />
            <label>{props.user.name }</label>
          </div>
        </nav>

      </div>
    </AreaHeader>
  );
}
export default Header;