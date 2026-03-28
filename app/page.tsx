"use client"
import{ useActionState } from 'react'
import { greet } from './form/action'
const initialState = {
    message : ''
}
const HomePage = () => {
        const [state, FormData] = useActionState(greet, initialState)
  return (
    <form action={FormData}>
        <input type="text" name='name' />
        <button>submit</button>
        {
            state.message && (
                <p>{state.message}</p>
            )
        }
    </form>
  )
}

export default HomePage