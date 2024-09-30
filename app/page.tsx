import Image from "next/image";

export default function Home() {
  return (
       <div>

        <div className="flex justify-center">
         <div>
            select your profile
            <div>
              <ul>
                <li>gfg</li>
                <li>leetcode</li>
                <li>codechef</li>
                <li>coding ninja</li>
                <li>codeforce</li>

              </ul>
            </div>
           </div>
            <input 
             placeholder="enter your username"
            type="text" 
            />
       </div>
        </div>
  );
}
