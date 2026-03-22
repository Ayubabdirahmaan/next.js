import { NextRequest, NextResponse } from "next/server";

interface productProps {
    params: {
        id: string;
    };
}

export async function GET(req: Request, { params }: productProps) {

    return Response.json({
        id: params.id,
        name: `product ${params.id}`,
        price: 100 * Number(params.id)
    })
}
