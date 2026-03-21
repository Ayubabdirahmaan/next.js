import React from 'react'

interface userDetails {
    params : {
        userId: string,
        postId: string
    }
}
const userDetails = ({params}: userDetails) => {
  return (
    <div>userDetails page{params.userId} {params.postId}</div>
  )
}

export default userDetails