import { scrapeCodechef } from "@/lib/CodechefUserData";
import { scrapeCodeForce } from "@/lib/CodeForceUserData";
import { scrapeGFG } from "@/lib/gfgUserData";
import { scrapeLeetCode } from "@/lib/leetcodeUserData";
import { scrapeNinaj } from "@/lib/NinjaUserData";
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
      case 'codechef':
        data = await scrapeCodechef(username);
        break;
      case 'codeforce':
        data = await scrapeCodeForce(username);
        break;
      case 'ninja':
        data = await scrapeNinaj(username);
        break;
      default:
        return NextResponse.json({ error: 'Invalid platform' }, { status: 400 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error scraping data:');
    return NextResponse.json({ error: `Failed to scrape data:` }, { status: 500 });
  }
}