'use client';

import { ScrapedData, ScrapedLeetCodeData } from "@/types";

import { GFGCard, LeetCodeCards } from "@/components/CardCollection/allCard";
import React, { useState } from "react";

export default function AllPage() {
  const [gfgusername, setgfgusername] = useState("");
  const [leetusername, setleetusername] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ScrapedData & ScrapedLeetCodeData | null>(null);
  const [loading, setLoading] = useState(false);

  const getAllCard = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Reset previous errors
    setLoading(true);

    if (!gfgusername && !leetusername) {
      setError("Please fill in both GFG and LeetCode usernames.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/allinone", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ gfgusername, leetusername }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Something went wrong. Please try again.");
      } else {
        setResult(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Improved card rendering with map
  const renderCards = () => {
    if (!result) return null;

    const cards = [];

    // Add GFG card if GFG data exists
    if (result.gfgusername) {
      cards.push(
        <GFGCard
          key="gfg"
          gotRank={result.gotRank}
          gfgusername={result.gfgusername}
          currentStreak={result.currentStreak}
          totalStreak={result.totalStreak}
          codingScore={result.codingScore}
          problemSolved={result.problemSolved}
          contestRating={result.contestRating}         />
      );
    }

    // Add LeetCode card if LeetCode data exists
    if (result.leetusername) {
      cards.push(
        <LeetCodeCards
          key="leetcode"
          rank={result.rank}
          leetusername={result.leetusername}
          iconGif={result.iconGif}
          name={""}
          iconGifBackground={""}
        />
      );
    }

    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <div key={card.key} className="p-4">
            {card}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex-1 pt-12 md:pl-[16rem]">
      <div className="flex justify-center border border-slate-400/20 p-4 gap-4">
        <form onSubmit={getAllCard} className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* GFG Username Input */}
            <div className="flex items-center md:gap-2 gap-14">
              <label className="text-xl font-bold text-green-700">GFG:</label>
              <input
                type="text"
                placeholder="GFG Username"
                value={gfgusername}
                onChange={(e) => setgfgusername(e.target.value)}
                className="border border-green-400/20 p-2"
              />
            </div>

            {/* LeetCode Username Input */}
            <div className="flex items-center gap-2">
              <label className="text-xl font-bold text-yellow-500">LeetCode:</label>
              <input
                type="text"
                placeholder="LeetCode Username"
                value={leetusername}
                onChange={(e) => setleetusername(e.target.value)}
                className="w-fit border border-yellow-400/20 p-2"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-8">
            <button
              type="submit"
              disabled={loading}
              className={`border p-2 ${loading ? "bg-gray-800 rounded" : "bg-slate-800/20 rounded text-white"}`}
            >
              {loading ? "Fetching..." : "Generate"}
            </button>
          </div>

          {/* Error Message */}
          {error && <div className="text-red-500 text-center pt-4">{error}</div>}
        </form>

      </div>
        {/* Cards Display */}
        <div className="pt-8">{renderCards()}</div>
    </div>
  );
}
