import { NextResponse } from "next/server";

export async function POST(request) {
    console.log(request);
    return NextResponse.json({ message: "아이템 작성" });
}
