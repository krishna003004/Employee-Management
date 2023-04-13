import React from 'react'

function Header({ setadding }) {
  return (
    <header>
      <h1>Employee Management System</h1>
      <div style={{ marginTop: '30px', marginBottom: '18px' }}>
        <button className='round-button' onClick={()=>{setadding(true)}}>
          Add Button
        </button>
      </div>
    </header>
  )
}

export default Header