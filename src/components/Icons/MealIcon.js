import * as React from "react";
import Svg, { Path } from "react-native-svg";

function MealIcon(props) {
  const { size = 72, color = "#BC5C3F" } = props;

  return (
    <Svg width={size} height={size} viewBox="0 0 72 72" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36 66C19.431 66 6 52.569 6 36 6 19.431 19.431 6 36 6c16.569 0 30 13.431 30 30 0 16.569-13.431 30-30 30zm0-6a24 24 0 100-48 24 24 0 000 48zM21 45h6v6l-6-6zm30 0l-6 6v-6h6zM27 21v6h-6l6-6zm18 0l6 6h-6v-6zm-7.5 6a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm-15 12a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm27 3a4.5 4.5 0 100-9.002 4.5 4.5 0 000 9.002zM36 39a3 3 0 100-6 3 3 0 000 6zm-1.5 15a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"
        fill={color}
      />
    </Svg>
  );
}

export default MealIcon;
