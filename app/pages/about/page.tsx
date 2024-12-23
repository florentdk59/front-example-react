import React from "react";
import AboutItem from "../../components/about/AboutItem";

const About = () => {
    const myItems =["Prosper", "Youplaboom"];
      return <>
        <div>About</div>
        <AboutItem items={myItems} />
    </>;
};

export default About;