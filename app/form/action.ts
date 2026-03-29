'use server'

type formSate = {
    message : string
}
export async function greet(prevState: formSate, formdata: FormData) : Promise<formSate> {
  const name = formdata.get("name")?.toString()
        if(!name || name.trim() === "") {
            return {message: 'form is required'}
        }
  return {message: `hello ${name} to server`}
}
