'use client'
import { useActionState } from "react"
import { eamilHandle } from "./EmailHandle"

const initialState = {
    email: '',
    error: ''
}
const EmailHandle = () => {
    const [state, formAction] = useActionState(eamilHandle, initialState)
  return (
    <div>
        <form action={formAction}>
            <input type="text" name='email' />
            <button>submit</button>
            {
                state.email && (
                    <p>{state.email}</p>
                )
            }
        </form>
    </div>
  )
}

export default EmailHandle