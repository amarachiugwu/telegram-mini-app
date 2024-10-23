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