'use server'

type stateForm = {
    message: string
}
export async function greet(PreveState: stateForm, formData: FormData): Promise<stateForm> {
    const name = formData.get('name') as string

    if(!name || name.trim() === " ") {
        return {message: 'name is required'}
    }
    return {message: `hello ${name} on server`}
}