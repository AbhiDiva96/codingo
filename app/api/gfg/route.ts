import { scrapeGFG } from "@/lib/gfgUserData";
import { scrapeLeetCode } from "@/lib/leetcodeUserData";
import { NextRequest, NextResponse } from "next/server";



export async function POST(request: NextRequest) {
  const { username, platform } = await request.json();

  try {
    let data;
    if (platform === 'gfg') {
      data = await scrapeGFG(username);
    } else if (platform === 'leetcode') {
      data = await scrapeLeetCode(username);
    } else {
      return NextResponse.json({ error: 'Invalid platform' }, { status: 400 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to scrape data' }, { status: 500 });
  }
}