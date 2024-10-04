'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import React, { useState } from "react";
import { Card } from "../card";


export const Content = () => {

   const [platform , setPlatform] = useState<string | null>(null);
   const [username, setUserName] = useState("");
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");
     const [loading, setLoading] = useState(false);


    const getCard = async (e: React.FormEvent) => {
         e.preventDefault();

         if(!platform || !username){
           setError("please selected platform or username")
         }

         setError("");
         setResult(null);
         setLoading(true);
      try{
         const res = await fetch('/api/gfg', {
          method: 'POST',
          headers: {
            "Content-Type" : "application/json"
          },
          body: JSON.stringify({username, platform})
         })

         const data = await res.json();

         if(!res.ok){
             setError(data.error || "something went wrong")
         }else{
             setResult(data)
         }


      }catch(err){
         setError('failed to fetch')
      } finally {
      setLoading(false);
    }
        
    }

    return <div>

         <div className="flex justify-center pt-24">
                <div className=" p-4 ">
                     <div className="">
                        <DropdownMenu>  
                            <DropdownMenuTrigger>Open</DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-transparent">
                                <DropdownMenuLabel>Select Platform</DropdownMenuLabel>
                                <DropdownMenuSeparator />

                                <DropdownMenuItem onClick={() => setPlatform('gfg')}>GFG</DropdownMenuItem>
                                 <DropdownMenuItem onClick={() => setPlatform('leetcode')}>LeetCode</DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => setPlatform('codechef')}>CodeChef</DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => setPlatform('codeforce')}>CodeForce</DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => setPlatform('ninja')}>Ninja</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>

                             {platform && <p className="mt-2">Selected Platform: {platform}</p>}

                     </div>

                       <div>
                         <form onSubmit={getCard}>

                            <div>
                                <input 
                                type="text"
                                placeholder="username" 
                                value={username}
                                onChange={(e) => setUserName(e.target.value)}
                                className="w-full px-4 py-2 border rounded"
                                />
                            </div>
                            <div>
                                <button type="submit"
                                 className="border px-2 text-white rounded"
                                 disabled={loading}
                                >
                                    {loading ? "Loading..." : "Get Card"}
                                </button>
                            </div>
                         </form>
                       </div>

                </div>
         </div>

         <div>
                  <div className="mt-6">
                    {error && <p className="text-red-500">{error}</p>}
                    {result && (
                      <div className="p-4 rounded shadow">
                           <Card 
                             gotRank={result.gotRank}
                             username={result.username}
                             currentStreak={result.currentStreak}
                              totalStreak={result.totalStreak}
                              codingScore= {result.codingScore}
                              problemSolved={result.problemSolved}
                              contestRating={result.contestRating}
                             /> 
                      </div>
                    )}
                  </div>

            
         </div>

   
   <div>
  
   </div>
    </div>
}