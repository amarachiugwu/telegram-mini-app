import React from "react";
import { Coins, Friends, Hamster, Info, Mine, Settings } from "./data";

import { IconsNames, IIconProps } from "./icon.types";

const Icon: React.FC<IIconProps> = (props: IIconProps) => {
  return Icons(props)[props.name];
};

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
