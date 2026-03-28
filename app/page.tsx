import React from 'react'
import { greet } from './form/action'

const HomePage = () => {
  return (
    <form action={greet}>
        <input type="text" name='name' />
        <button>submit</button>
    </form>
  )
}

export default HomePage