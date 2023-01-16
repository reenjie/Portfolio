import React from "react";
import "../../Styles/App.css";
import Typewriter from "typewriter-effect";
function Header(props) {
  return (
    <div className="header">
      <div className="greetings">
        <h1>
          <Typewriter
            options={{
              strings: ["Hi There, I am Reenjay", "And I am a Web Developer"],
              autoStart: true,
              loop: false,
            }}
            onInit={(typewriter) => {
              typewriter.typeString("Scroll down for more information ッ");
            }}
          />
        </h1>
      </div>
    </div>
  );
}

export default Header;
