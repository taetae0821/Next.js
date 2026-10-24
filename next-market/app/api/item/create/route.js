import { NextResponse } from "next/server";
import connetDB from "@/app/utils/database";
import { ItemModel } from "@/app/utils/schemaModel";

export async function POST(request) {
    const reqBody = await request.json();
    console.log(reqBody);
    try{
        await connetDB();
        await ItemModel.create(reqBody);
        return NextResponse.json({ message: "아이템 작성 성공" });
    }catch(err){
        console.log(err);
        return NextResponse.json({ message: "아이템 작성 실패"});
    }
}
