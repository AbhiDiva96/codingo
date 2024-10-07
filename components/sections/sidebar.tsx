'use client'

import { useRouter } from "next/navigation";

export const SideBar = () => {
  const router = useRouter();

  return (
    <div>
      <div className="h-dvh ">
        <div className="py-2">
          <div
            className="flex justify-center text-lg font-bold py-2 cursor-pointer"
            onClick={() => router.push('/')} // Navigate to home
          >
            Home
          </div>
          <div
            className="flex justify-center text-lg py-2 cursor-pointer"
            onClick={() => router.push('/')} // Navigate to One Card page
          >
            One Card
          </div>
          <div
            className="flex justify-center text-lg py-2 cursor-pointer"
            onClick={() => router.push('/allpage')} // Navigate to All Card page
          >
            All Card
          </div>
        </div>
      </div>
    </div>
  );
};

