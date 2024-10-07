import { scrapeGFG } from "@/lib/gfgUserData";
import { scrapeLeetCode } from "@/lib/leetcodeUserData";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { gfgusername, leetusername } = await req.json();

  // Check if both usernames are provided
  if (!gfgusername && !leetusername) {
    return NextResponse.json({ message: "Please provide both usernames" }, { status: 400 });
  }

  try {
    let gfgData = null;
    let leetCodeData = null;

    // Fetch GFG data if the username is provided
    if (gfgusername) {
      gfgData = await scrapeGFG(gfgusername);
    }

    // Fetch LeetCode data if the username is provided
    if (leetusername) {
      leetCodeData = await scrapeLeetCode(leetusername);
    }

    // Merge both results if available
    const result = {
      ...(gfgData || {}),     // Add GFG data if available
      ...(leetCodeData || {}), // Add LeetCode data if available
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to fetch user data" }, { status: 500 });
  }
}
