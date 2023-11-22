import * as React from "react";
import Svg, { Path } from "react-native-svg";

function DishIcon(props) {
  return (
    <Svg width={80} height={80} viewBox="0 0 80 80" fill="none" {...props}>
      <Path
        d="M70 50c0-15.416-11.69-28.137-26.667-29.803v-6.863h-6.666v6.863C21.69 21.863 10 34.584 10 50v6.667h60V50zm-53.334 0c0-12.863 10.47-23.333 23.334-23.333 12.863 0 23.333 10.47 23.333 23.333H16.667zm-10 10h66.667v6.667H6.667V60z"
        fill="#BC5C3F"
      />
    </Svg>
  );
}

export default DishIcon;
