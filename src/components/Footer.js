import React from 'react'

//创建Footer展示组件
const Footer = ({ filter, changeFilter }) => {
  return (
    <div>
      Show:
      <button disabled={filter === 'all'} onClick={() => changeFilter('all')}>
        All
      </button>{' '}
      <button
        disabled={filter === 'active'}
        onClick={() => changeFilter('active')}
      >
        Active
      </button>{' '}
      <button
        disabled={filter === 'completed'}
        onClick={() => changeFilter('completed')}
      >
        Completed
      </button>
    </div>
  )
}

//导入Footer组件
export default Footer
