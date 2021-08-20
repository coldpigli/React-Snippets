import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({list}) => {
  return <>
  {list.map((item)=>{
    return <div className = "grocery-item">
      {item.title}
    </div>
  })}
  </>
  
}

export default List
