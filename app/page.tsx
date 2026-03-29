"use client"
import { useActionState } from "react";
import { greet } from "./form/action";
const initialState = {
    message: ''
}
const HomePage = () => {
    const [state, formData ] = useActionState(greet, initialState )
  return (
    <form action={formData}>
        <input type="text" name="name" />
        <button>submit</button>
        {
            state.message && (
                <p>{state.message}</p>
            )
        }
    </form>
  )
};

export default HomePage;
