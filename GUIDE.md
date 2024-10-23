go to https://academy.assetchain.org/module-1-getting-started/dapp-starter-kit#telegram-app-starter-kit

scroll down to Telegram App Starter Kit and clone the repo :
NB: add a dot to clone the repo into the current empty folder
git clone https://github.com/xendfinance/assetchain-telegram-starterkit-demo-app .

delete .git folder from finder / file explorer

run : npm install

create a github repo
run git init
run: git add .

run the below commands to add your code to created repo
NB: replace the github-repo link with yours
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/amarachiugwu/telegram-mini-app.git
git push -u origin main

run : npm run dev

interact with the starterkit: connect wallet

packages the starter kit came with : tailwind css

create a public/images directory and add images

create a public/icons directory and add svgs

create a src/components folder

create components/icon folder

create an index.ts file in components folder

create an index.ts file in components/icons folder
create an data.ts file in components/icons folder
create an icon.tsx file in components/icons folder
create an icon.types.ts file in components/icons folder

inside data.ts add
export {default as Coins} from 'public/icons/coins.svg'
export {default as Friends} from 'public/icons/friends.svg'
export {default as Hamster} from 'public/icons/hamster.svg'
export {default as Info} from 'public/icons/info.svg'
export {default as Mine} from 'public/icons/mine.svg'
export {default as Settings} from 'public/icons/settings.svg'

type rfced in icon.tsx

import all icons from data in icon.tsx
import {Coins, Friends, Hamster, Info, Mine, Settings} from './data'

define icon types

export enum IconsNames {
COINS = 'coins',
FRIENDS = 'friends',
HAMSTER = 'hamster',
INFO = 'info',
MINE = 'mine',
SETTINGS = 'settings',
}

export interface IIconProps {
name: IconsNames;
width: number;
height: number;
className?: string;
}

import types in icon.tsx
import { IconsNames, IIconProps } from './Icon.types';

define Icon and Icons and export Icon and defaut

const Icon : React.FC<IIconProps> = (props : IIconProps) => {
return Icons(props)[props.name];
}

const Icons = (props: IIconProps) => {
return {
[IconsNames.COINS]: <Coins {...props} />,
[IconsNames.FRIENDS]: <Friends {...props} />,
[IconsNames.HAMSTER]: <Hamster {...props} />,
[IconsNames.INFO]: <Info {...props} />,
[IconsNames.MINE]: <Mine {...props} />,
[IconsNames.SETTINGS]: <Settings {...props} />,
};
};

export default Icon;

export component and type from icons/index.ts
export { default as Icon } from './Icon';
export { IconsNames } from './Icon.types';

export icons from component/index.ts
export \* from './icons'

add " bg-black flex justify-center " class to layout body
