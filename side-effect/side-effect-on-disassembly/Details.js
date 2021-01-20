import React, { useEffect, useCallback } from "react";

function Details({ closed }) {
  const handleKeyDown = useCallback(
    (event) => {
      if (event.keyCode === 27) {
        closed();
        console.info("ESC pressionado!");
      }
    },
    [closed]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Tempor id eu nisl
        nunc. At augue eget arcu dictum varius. A cras semper auctor neque.
        Neque viverra justo nec ultrices dui sapien. Ligula ullamcorper
        malesuada proin libero nunc. Purus semper eget duis at tellus at urna
        condimentum. Morbi tristique senectus et netus et malesuada fames ac
        turpis.
      </p>
    </div>
  );
}

export default Details;
