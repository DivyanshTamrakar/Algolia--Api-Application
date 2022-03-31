import React from 'react'

const Row = ({post}) => {
  return (
    <tr>
      {post.map((item) => (
          <li>{item}</li>
      ))}
    </tr>
  )
}

export default Row