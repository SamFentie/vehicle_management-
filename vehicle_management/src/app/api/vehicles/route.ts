import { NextResponse } from "next/server";
import prisma from "../prisma_client";

export async function GET(){
    const vehicles=await prisma.vehicle.findMany()
    const formattedData = vehicles.map(item => ({
        ...item,
        last_modified: new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "short",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true
        }).format(new Date(item.last_modified))
      }));
    return NextResponse.json({
        formattedData
    })
}
