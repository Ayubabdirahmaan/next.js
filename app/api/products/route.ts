import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextResponse) {
    const data = [
        { id: 1, name: 'farah', class: 'a10' },
        { id: 2, name: 'sumaya', class: '0qwq' }
    ]
    return NextResponse.json(data)

}


export async function POST(request: NextRequest) {

    const body = await request.json()

    return NextResponse.json({
        message: 'created new product',
        data: body
    })
}