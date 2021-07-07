import React, { useState } from "react";
import reactCSS from "reactcss";
import { SketchPicker } from "react-color";

const ColorPicker = ({ color, onChange }) => {

  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleClick = () => {
    setDisplayColorPicker((value) => !value);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  //set display color to selection from color picker
  const handleChange = (color) => {
    console.log({ color });
    onChange([color.rgb.r, color.rgb.g, color.rgb.b]);
  };

  const styles = reactCSS({
    default: {
      color: {
        padding: "5px",
        display: "inline-block",
        cursor: "pointer",
        width: "50px",
        height: "50px",
        borderRadius: "50px",
        background: `rgba(${color.join(",")})`,
      },
      popover: {
        position: "absolute",
        zIndex: "2",
      },
      cover: {
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
      },
    },
  });

  return (
    <div>
      <div style={styles.color} onClick={handleClick} />

      {displayColorPicker ? (
        <div style={styles.popover}>
          <div style={styles.cover} onClick={handleClose} />
          <SketchPicker
            color={{ r: color[0], g: color[1], b: color[2] }}
            onChange={handleChange}
          />
        </div>
      ) : null}
    </div>
  );
};

export default ColorPicker;