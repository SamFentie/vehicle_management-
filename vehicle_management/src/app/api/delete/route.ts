import { NextResponse } from "next/server";
import prisma from "../prisma_client";

export async function DELETE(request:Request) {
    const {id}=await request.json()
    try{
        const delete_vehilce= await prisma.vehicle.delete({
            where:{
                id:Number(id)
            }
        })
        return NextResponse.json({
            status:200
        })  
    }catch(e){
        console.log("Error: "+e)
        return NextResponse.json({
            status:500
        })  
    }
    
}