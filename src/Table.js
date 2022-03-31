import React from 'react'
import Row from './Row'
const Table = ({posts}) => {
  return (
    <div className='table-container'>
      <table>
         <tbody>
           {posts.map((post) => (
             <Row key = {post.id} post = {post}/>
           ))}
         </tbody>
      </table>
     

    </div>
  )
}

export default Table