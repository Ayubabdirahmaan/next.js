'use server'
interface emailState {
    email: string,
    error: string
}
export async function eamilHandle(prevState: emailState, formData: FormData): Promise<emailState> {
    const email = formData.get('email')?.toString()

    if (!email || email.trim() === "") {
        return { email: '', error: 'email is required!' }
    }

    return { email: `Hell welcome ${email}`, error: 'No error data successfully!' }

}