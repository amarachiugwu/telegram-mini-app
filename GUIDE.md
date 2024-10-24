// go to https://academy.assetchain.org/module-1-getting-started/dapp-starter-kit#telegram-app-starter-kit

// scroll down to Telegram App Starter Kit and clone the repo :
NB: add a dot to clone the repo into the current empty folder
git clone https://github.com/xendfinance/assetchain-telegram-starterkit-demo-app .

// delete .git folder from finder / file explorer

// run : npm install

// create a github repo
run git init
run: git add .

// run the below commands to add your code to created repo
NB: replace the github-repo link with yours
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/amarachiugwu/telegram-mini-app.git
git push -u origin main

// run : npm run dev

// interact with the starterkit: connect wallet

// packages the starter kit came with : tailwind css

// create src/components folder

// paste components/icons folder

// create a layouts folder in components

// create a dashboard folder in components/layouts

// create 4 folders in components/layouts/dashboard
data
lib
ui
types
and index.ts

// create index.ts in data folder

// create DashboardFooterMenu in data

import { DashboardMenuItemProps } from "../types";
import {
Coins,
Friends,
Hamster,
Mine,
} from "@/components/icons/ui";

export const DashboardFooterMenu: DashboardMenuItemProps[] = [
{
name: "exchange",
href: "/",
icon: <Coins />,
},
{
name: "mine",
href: "/mine",
icon: <Mine />,
},
{
name: "friends",
href: "/friends",
icon: <Friends />,
},
{
name: "earn",
href: "/earn",
icon: <Coins />,
},
{
name: "airdrop",
href: "/airdrop",
icon: <Hamster />,
},
];

// create index.ts in types folder

import { ReactNode } from "react"

export type DashboardMenuItemProps = {
name: string,
href: string,
icon: ReactNode
}

// create index.ts and utils in lib

// add to lib/utils.ts
export const isActivePath = (path: string, href: string) => path === href;

add to lib/index.ts
// export \* from './utils'

// create DashboardFooter.layout.ts and DashboardLayoutShell.tsx in ui

run rafce in DashboardFooter
import { DashboardFooterMenu } from '../data'

// paste DashboardFooter parent div

<div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-[#272a2f] flex justify-around items-center z-50 rounded-3xl text-xs">

</div>

// paste in the parent div
{DashboardFooterMenu.map((item) => (

))}

 <Link
            href={item.href}
            key={item.href}
            className={`text-center text-[#85827d] w-1/5 ${
              isActivePath(item.href, pathname as string)
                ? "bg-[#1c1f24] text-white m-1 p-2 rounded-2xl"
                : ""
            }`}
          >
            <div className="w-8 h-8 mx-auto"> {item.icon} </div>

            <p className="mt-1">{item.name}</p>
          </Link>

// import in DashboardFooter
import { isActivePath } from "../lib";
import { usePathname } from "next/navigation";

// define in DashboardFooter
const pathname = usePathname();

// at to top of DashboardFooter
"use client";

// in DashboardLayoutShell

//
run rafed

//
import DashboardFooter from "./DashboardFooter.layout";

// define type

: React.FC<{
children: React.ReactNode;
}>

//
destructure { children }

//
return <div className="bg-black flex justify-center">
{children}
<DashboardFooter />

</div>

// import DashboardLayoutShell in src/app/layout

//wrap children in layout
<DashboardLayoutShell>{children}</DashboardLayoutShell>

//remove class in layout

// create pages for mine, friends, earn, airdrop

// delete fonts

//
import { Inter, Manrope } from "next/font/google";

// and add new fonts
const inter = Inter({
subsets: ["latin"],
display: "swap",
variable: "--font-sans",
weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
subsets: ["latin"],
display: "swap",
variable: "--font-manrope",
weight: ["400", "500", "600", "700"],
});

// update layout classnames
className={`${inter.variable} ${manrope.variable}

// in src/app/page comment out connect button code and remove imports

// paste src/app/page

<div className="w-full bg-black text-white h-screen font-bold flex flex-col max-w-xl">
      <div className="px-4 z-10">
        <div className="flex items-center space-x-2 pt-4">
          <div className="p-1 rounded-lg bg-[#1d2025]">
            <Hamster size={24} className="text-[#d4d4d4]" />
          </div>
          <div>
            <p className="text-sm">Nikandr (CEO)</p>
          </div>
        </div>

        </div>
      </div>
    </div>


    // create a modules/dashboard/exchange folder in src

    // create data, libs, types, and ui folder in exchange

    // in data create index.ts in data

    paste export   const levelNames = [
    "Bronze",    // From 0 to 4999 coins
    "Silver",    // From 5000 coins to 24,999 coins
    "Gold",      // From 25,000 coins to 99,999 coins
    "Platinum",  // From 100,000 coins to 999,999 coins
    "Diamond",   // From 1,000,000 coins to 2,000,000 coins
    "Epic",      // From 2,000,000 coins to 10,000,000 coins
    "Legendary", // From 10,000,000 coins to 50,000,000 coins
    "Master",    // From 50,000,000 coins to 100,000,000 coins
    "GrandMaster", // From 100,000,000 coins to 1,000,000,000 coins
    "Lord"       // From 1,000,000,000 coins to ∞

];

// paste in page
const handleAnimationEnd = (id: number) => {
setClicks((prevClicks) => prevClicks.filter((click) => click.id !== id));
};

//paste this after div with class pt-4

 <div className="flex items-center justify-between space-x-4 mt-1">
          <div className="flex items-center w-1/3">
            <div className="w-full">
              <div className="flex justify-between">
                <p className="text-sm">{levelNames[levelIndex]}</p>
                <p className="text-sm">
                  {levelIndex + 1}{" "}
                  <span className="text-[#95908a]">/ {levelNames.length}</span>
                </p>
              </div>

            </div>
          </div>
        </div>

// import levelNames in page
// const [levelIndex, setLevelIndex] = useState(6);
// remove class in layout

// create utils.ts and index.ts

// paste in utils

import { levelMinPoints, levelNames } from "../data";

    export const calculateProgress = (levelIndex: number, points:number) => {
    if (levelIndex >= levelNames.length - 1) {
        return 100;
    }
    const currentLevelMin = levelMinPoints[levelIndex];
    const nextLevelMin = levelMinPoints[levelIndex + 1];
    const progress = ((points - currentLevelMin) / (nextLevelMin - currentLevelMin)) * 100;
    return Math.min(progress, 100);
    };

// export utils in index.ts
export \* from './utils'

// paste in data

export const levelMinPoints = [
0, // Bronze
5000, // Silver
25000, // Gold
100000, // Platinum
1000000, // Diamond
2000000, // Epic
10000000, // Legendary
50000000, // Master
100000000,// GrandMaster
1000000000// Lord
];

// paste in page after div with classname flex justify-between

<div className="flex items-center mt-1 border-2 border-[#43433b] rounded-full">
    <div className="w-full h-2 bg-[#43433b]/[0.6] rounded-full">
    <div className="progress-gradient h-2 rounded-full" style={{ width: `${calculateProgress()}%` }}></div>
    </div>
</div>

// add levelIndex and point to calculateProgress

// add points state
const [points, setPoints] = useState(22749365);

// add to global.ts

.progress-gradient {
background: linear-gradient(to right, #90ef89, #d692dd, #726edd);
}

// create public folder paste images directory

// paste in pages after div with classname w-1/3

<div className="flex items-center w-2/3 border-2 border-[#43433b] rounded-full px-4 py-[2px] bg-[#43433b]/[0.6] max-w-64">
            <Image
              src={"/images/binance-logo.png"}
              alt="Exchange"
              className="w-8 h-8"
              width={32}
              height={32}
            />
            <div className="h-[32px] w-[2px] bg-[#43433b] mx-2"></div>
            <div className="flex-1 text-center">
              <p className="text-xs text-[#85827d] font-medium">
                Profit per hour
              </p>
              <div className="flex items-center justify-center space-x-1">
                <Image
                  src={"/images/dollar-coin.png"}
                  alt="Dollar Coin"
                  className="w-[18px] h-[18px]"
                  width={18}
                  height={18}
                />
                <p className="text-sm">{formatProfitPerHour(profitPerHour)}</p>
                <Info size={20} className="text-[#43433b]" />
              </div>
            </div>
            <div className="h-[32px] w-[2px] bg-[#43433b] mx-2"></div>
            <Settings className="text-white" />
          </div>

// import components

// paste in page  
const profitPerHour = 126420;

// paste in utils
export const formatProfitPerHour = (profit: number) => {
if (profit >= 1000000000) return `+${(profit / 1000000000).toFixed(2)}B`;
if (profit >= 1000000) return `+${(profit / 1000000).toFixed(2)}M`;
if (profit >= 1000) return `+${(profit / 1000).toFixed(2)}K`;
return `+${profit}`;
};

// import formatProfitPerHour in page

// define 3 states in page
const [dailyRewardTimeLeft, setDailyRewardTimeLeft] = useState("");
const [dailyCipherTimeLeft, setDailyCipherTimeLeft] = useState("");
const [dailyComboTimeLeft, setDailyComboTimeLeft] = useState("");

// paste after div with px-4 z-10

<div className="flex-grow mt-4 bg-[#f3ba2f] rounded-t-[48px] relative top-glow z-0">
        <div className="absolute top-[2px] left-0 right-0 bottom-0 bg-[#1d2025] rounded-t-[46px]">
          <div className="px-4 mt-6 flex justify-between gap-2">
            <div className="bg-[#272a2f] rounded-lg px-4 py-2 w-full relative">
              <div className="dot"></div>
              <Image
                src={"/images/daily-reward.png"}
                alt="Daily Reward"
                className="mx-auto w-12 h-12"
                width={48}
                height={48}
              />
              <p className="text-[10px] text-center text-white mt-1">Daily reward</p>
              <p className="text-[10px] font-medium text-center text-gray-400 mt-2">{dailyRewardTimeLeft}</p>
            </div>
            <div className="bg-[#272a2f] rounded-lg px-4 py-2 w-full relative">
              <div className="dot"></div>
               <Image
                src={"/images/daily-cipher.png"}
                alt="Daily Cipher"
                className="mx-auto w-12 h-12"
                width={48}
                height={48}
              />
              <p className="text-[10px] text-center text-white mt-1">Daily cipher</p>
              <p className="text-[10px] font-medium text-center text-gray-400 mt-2">{dailyCipherTimeLeft}</p>
            </div>
            <div className="bg-[#272a2f] rounded-lg px-4 py-2 w-full relative">
              <div className="dot"></div>
              <Image
                src={"/images/daily-combo.png"}
                alt="Daily Combo"
                className="mx-auto w-12 h-12"
                width={48}
                height={48}
              />
              <p className="text-[10px] text-center text-white mt-1">Daily combo</p>
              <p className="text-[10px] font-medium text-center text-gray-400 mt-2">{dailyComboTimeLeft}</p>
            </div>
          </div>
        </div>
      </div>

// add style to global.css

.top-glow {
box-shadow: 0 -26px 20px rgba(243, 186, 47, 0.3);
}

/_ Define the keyframes for the blinking animation _/
@keyframes blink {
0% {
opacity: 1;
}

50% {
opacity: 0;
}

100% {
opacity: 1;
}
}

/_ Apply the animation to the dot class _/
.dot {
width: 6px;
height: 6px;
background-color: white;
border-radius: 50%;
position: absolute;
top: 10px;
right: 10px;
animation: blink 1s infinite;
}

// paste after gap 2

<div className="px-4 mt-4 flex justify-center">
            <div className="px-4 py-2 flex items-center space-x-2">
              <Image
                src={"/images/dollar-coin.png"}
                alt="Dollar Coin"
                className="w-10 h-10"
                width={40}
                height={40}
              />
              <p className="text-4xl text-white">{points.toLocaleString()}</p>
            </div>
          </div>

// paste in pages
const pointsToAdd = 11;

// paste in pages
const [clicks, setClicks] = useState<{ id: number, x: number, y: number }[]>([]);

// paste after justify center

<div className="px-4 mt-4 flex justify-center">
            <div
              className="w-80 h-80 p-4 rounded-full circle-outer"
              onClick={handleCardClick}
            >
              <div className="w-full h-full rounded-full circle-inner">
                <Image
                  src={"/images/main-character.png"}
                  alt="Main Character"
                  className="w-full h-full"
                  width={200}
                height={200} />
              </div>
            </div>
          </div>

paste in global.css

.circle-outer {
background: linear-gradient(to bottom, #575def, #202731);
display: flex;
align-items: center;
justify-content: center;
width: 90vw;
height: 90vw;
max-width: 360px;
max-height: 360px;
}

.circle-inner {
background: radial-gradient(circle, #4960b2, #282e3e);
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}

@keyframes float {
0% {
opacity: 1;
transform: translateY(0);
}

100% {
opacity: 0;
transform: translateY(-50px);
}
}

paste before div closing tag

{clicks.map((click) => (

<div
key={click.id}
className="absolute text-5xl font-bold opacity-0 text-white pointer-events-none"
style={{
            top: `${click.y - 42}px`,
            left: `${click.x - 28}px`,
            animation: `float 1s ease-out`,
          }}
onAnimationEnd={() => handleAnimationEnd(click.id)} >
{pointsToAdd}
</div>
))}

// paste in utils to calculate time left
export const calculateTimeLeft = (targetHour: number) => {
const now = new Date();
const target = new Date(now);
target.setUTCHours(targetHour, 0, 0, 0);

if (now.getUTCHours() >= targetHour) {
target.setUTCDate(target.getUTCDate() + 1);
}

const diff = target.getTime() - now.getTime();
const hours = Math.floor(diff / (1000 _ 60 _ 60));
const minutes = Math.floor((diff % (1000 _ 60 _ 60)) / (1000 \* 60));

const paddedHours = hours.toString().padStart(2, "0");
const paddedMinutes = minutes.toString().padStart(2, "0");

return `${paddedHours}:${paddedMinutes}`;
};

// paste in pages

useEffect(() => {
const updateCountdowns = () => {
setDailyRewardTimeLeft(calculateTimeLeft(0));
setDailyCipherTimeLeft(calculateTimeLeft(19));
setDailyComboTimeLeft(calculateTimeLeft(12));
};

    updateCountdowns();
    const interval = setInterval(updateCountdowns, 60000); // Update every minute

    return () => clearInterval(interval);

}, []);

// paste in page
useEffect(() => {
const pointsPerSecond = Math.floor(profitPerHour / 3600);
const interval = setInterval(() => {
setPoints((prevPoints) => prevPoints + pointsPerSecond);
}, 1000);
return () => clearInterval(interval);
}, [profitPerHour]);

// run in terminal
npm run build

// deploy to vercel

// deploy to telegram

/newbot

desc: assetchainLiveCall_bot

username: assetchainLiveCall_bot

save the next response

/newapp

select assetchainLiveCall_bot

title : Assetchain Live Call Bot

desc : Assetchain Live Call Bot

upload image from images folder

skip gif step

paste link

short name assetchainLiveCall_bot
