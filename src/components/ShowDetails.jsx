import React from 'react'
import { useParams } from 'react-router-dom'
function ShowDetails() {
    const data = useParams();
  return (
    <div>Show id {data.id}</div>
  )
}

export default ShowDetails