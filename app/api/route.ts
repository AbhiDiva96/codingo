// import { scrapeCodechef } from "@/lib/CodechefUserData";
// import { scrapeCodeForce } from "@/lib/CodeForceUserData";
// import { scrapeNinaj } from "@/lib/NinjaUserData";

import { scrapeGFG } from "@/lib/gfgUserData";
import { scrapeLeetCode } from "@/lib/leetcodeUserData";
import { NextRequest, NextResponse } from "next/server";



export async function POST(request: NextRequest) {
  const { username, platform } = await request.json();

   try {
    let data;
    switch(platform) {
      case 'gfg':
        data = await scrapeGFG(username);
        break;
      case 'leetcode':
        data = await scrapeLeetCode(username);
        break;
      // case 'codechef':
      //   data = await scrapeCodechef(username);
      //   break;
      // case 'codeforce':
      //   data = await scrapeCodeForce(username);
      //   break;
      // case 'ninja':
      //   data = await scrapeNinaj(username);
      //   break;
      default:
        return NextResponse.json({ error: 'Invalid platform' }, { status: 400 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error scraping data:', error);
    return NextResponse.json({ error: `Check your username or platform` }, { status: 500 });
  }
}