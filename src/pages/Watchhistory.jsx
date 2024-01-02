import React from 'react'
import { Link } from 'react-router-dom'

export default function Watchhistory() {
  return (
    <>
    <div className='container mt-5 mb-5 d-flex justify-content-between'>
      <h5>Watch History</h5>
      <Link to='/home' style={{textDecoration:"none", color:"white", fontSize:"15px", fontWeight:"600"}}>
        <i class="fa-solid fa-arrow-left me-3"></i>Back To Home
      </Link>
    </div>
    <table className='table container mb-5'>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>Url</th>
          <th>TimeStamp</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Heeriye</td>
          <td>https://www.youtube.com/watch?v=RLzC55ai0eo</td>
          <td>21-12-2023 01:23PM</td>
          <td>Delete</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Heeriye</td>
          <td>https://www.youtube.com/watch?v=RLzC55ai0eo</td>
          <td>21-12-2023 01:23PM</td>
          <td>Delete</td>
        </tr>
      </tbody>
    </table>
    </>
  )
}
