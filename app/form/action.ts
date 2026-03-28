'use server'
export async function greet(formData: FormData) {
    const name = formData.get('name')
    return `hello ${name} from server`
}