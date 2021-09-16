import React from 'react'

export const Section = ({ title, list, handleToggle }) => (
  <div className="column is-12-mobile is-12-tablet footer-list">
    <div className="dropdown-footer is-block">
      <div className="is-size-6 has-text-white mb-1 is-flex is-justify-content-space-between is-align-items-center">
        <p>{title}</p>
        <button className="dropdown-toggle-button button is-small is-success is-inverted" onClick={handleToggle}>+</button>
      </div>
      <div className="content">
        { 
          list.map((el, index) => (
            <a key={index} href="#!" className="has-text-white is-size-7" style={{display: 'block'}}>{el}</a>
          ))
        }
      </div>
    </div>
  </div>
)
