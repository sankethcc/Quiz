import React, { useState } from 'react'
import profile from '../assets/profile.png'
import bell  from '../assets/bell.png'
import imports  from '../assets/imports.png'
import Language from './Language'
import FillDetails from './FillDetails'
import InputQuestion from './InputQuestion'

const MainContainer = ({close, toggleMenu}) => {
  const [input, setInput] = useState([])
  const onChange = (e)=>{
    setInput(e.target.value)
  }

  return (
    <div className="main-container">
            <div className="profile-wrapper">
              <h3>Create quiz</h3>
              <div className="profile-box">
                <div>
                  <img className="info-header" src={bell} alt="" />
                </div>
                <img className="profile-logo" src={profile} alt="" />
                <div className={`hamburger ${close}`}  onClick={toggleMenu}>
                  <span></span>
                  <span className='hide'></span>
                  <span></span>
                </div>
              </div>
            </div>
            <Language />
            <FillDetails />
            <div className="question-wrapper">
                <h3>Question</h3>
                <div className="input-question">
                  <input  placeholder='Question' className="text-field" type="text" onChange={onChange} value={input} />
                  <img className="imports" src={imports} alt="" />
                </div>
                <h3>Options:</h3>
                <div>
                  <InputQuestion />
                  <InputQuestion />
                  <InputQuestion />
                  <InputQuestion />
                  
                </div>
                <p className="add-another">Add another option</p>
            </div>
            <div className="btn-div">
              <button>Post</button>
            </div>
        </div>
  )
}

export default MainContainer
