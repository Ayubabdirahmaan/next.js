import { NextResponse } from "next/server";

export async function GET(request: NextResponse) {
    return NextResponse.json({ message: 'Hello everyone chacked this api' })

}