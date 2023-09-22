import React from "react";
import Logo from '../assets/logo.png'
import Test from '../assets/Test.png'
import Exam from '../assets/Exam.png'
import User from '../assets/User.png'

const Menu = ({dBlock}) => {
  return (
    <div className={`menu-container ${dBlock}`}>
      {/* page logo  */}
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      {/* menu list  */}
      <div className="menu-wrapper">
        <ul>
          <li className="active">
            <img src={Test} alt="" className="menuelog " />
            <p>Quiz</p>
          </li>
          <li>
            <img src={Exam} className="menuelog" alt="" />
            <p>Exam</p>
          </li>
          <li>
            <img src={User} className="menuelog" alt="" />
            <p>Assign user</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
