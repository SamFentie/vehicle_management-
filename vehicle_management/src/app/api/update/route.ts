import { NextResponse } from "next/server";
import prisma from "../prisma_client";

export async function PATCH(request:Request) {
    const {id,name,status}=await request.json()
    try{
        const update_vehilce= await prisma.vehicle.update({
            where:{
                id:Number(id)
            },
            data:{
                vehicle_name :name,
                Status:status,
                last_modified: new Date()
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