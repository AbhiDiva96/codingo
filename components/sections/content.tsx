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
import { GFGCard,  LeetCodeCards } from "../CardCollection/allCard";


export const Content = () => {

  const [platform, setPlatform] = useState<string | null>(null);
  const [username, setUserName] = useState("");
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getCard = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!platform || !username) {
      setError("Please select a platform or enter a username.");
      return;
    }

    setError("");
    setResult(null);
    setLoading(true);
    try {
      const res = await fetch('/api', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, platform })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong.");
      } else {
        setResult(data);
      }

    } catch (err) {
      setError('Failed to fetch data.');
    } finally {
      setLoading(false);
    }
  };

const renderCard = () => {
  if (!result) {
    return null;
  }

  switch (platform) {
    case 'gfg':
      return (
        <GFGCard
          gotRank={result.gotRank}
          gfgusername={result.gfgusername}
          currentStreak={result.currentStreak}
          totalStreak={result.totalStreak}
          codingScore={result.codingScore}
          problemSolved={result.problemSolved}
          contestRating={result.contestRating}
        />
      ); // Added closing parenthesis here
     case 'leetcode':
      return (
        <LeetCodeCards
          rank={result.rank}
          leetusername={result.leetusername}
          iconGif={result.iconGif} name={""} iconGifBackground={""}   />
      );
    default:
      return null;
  }
};


  return (
    <div>
      <div className="flex justify-center">
        <div className="p-4 w-full border bg-gray-800 text-white border-gray-800/20 rounded">
          <div className="flex justify-center pb-8">
          <div className="py-4  flex justify-center">
            <DropdownMenu>
              <DropdownMenuTrigger className="border rounded border-gray-200/20 p-2">Choose Platform</DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-800 text-white">
                <DropdownMenuLabel className="border-b-2">Select Platform</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-green-400" onClick={() => setPlatform('gfg')}>GFG</DropdownMenuItem>
                <DropdownMenuItem className="text-yellow-400" onClick={() => setPlatform('leetcode')}>LeetCode</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setPlatform('codechef')}>CodeChef</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setPlatform('codeforce')}>CodeForce</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setPlatform('ninja')}>Ninja</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

          </div>
          <div className="flex justify-center pl-8">
            {platform && <p className="flex justify-center items-center mt-1">Selected Platform: {platform}</p>}
          </div>
       </div>
        

          <div className="flex justify-center">
            <form onSubmit={getCard}>
              <div className="flex justify-center">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                  className="w-64 px-2 py-2 text-gray-800 dark:text-white border rounded"
                />
              </div>
         
              <div className="pt-8 flex justify-center">
                <button
                  type="submit"
                  className="border px-2 py-1 text-white rounded"
                  disabled={loading}
                >
                  {loading ? "Generating..." : "Generate"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        {error && <p className="text-red-500">{error}</p>}
        {result && (
          <div className="p-4 rounded shadow">
            {renderCard()}
          </div>
        )}
      </div>
    



    </div>
  );
};