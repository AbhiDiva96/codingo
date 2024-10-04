import { scrapeLeetCodeForMultipleUsers } from "@/lib/BattelGround/user";
import { NextRequest, NextResponse } from "next/server";



export async function POST(req: NextRequest){

      const {username} = await req.json();

      if(!username){
        return NextResponse.json({message: 'username required'}, {status:400})
      }

      try{
         const allUserData = await scrapeLeetCodeForMultipleUsers(username);
          return NextResponse.json(allUserData);  // Logs data for all the users
      }catch(error){
        console.error('erro while fetchng')
        return NextResponse.json({message: 'user not found'}, {status:500})
      }
}