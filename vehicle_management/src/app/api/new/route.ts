import { NextResponse } from "next/server";
import prisma from "../prisma_client";

export async function POST(request:Request) {
    const {name,status}=await request.json()
    try{
        const new_vehilce= await prisma.vehicle.create({
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
            staus:500
        }) 
    }
    
}