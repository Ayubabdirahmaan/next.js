import React from 'react'

const Usersuspense = async() => {
    await new Promise((resolve) => setTimeout(resolve, 10000))
  return (
    <div>this message delay 2 seconds</div>
  )
}

export default Usersuspense
