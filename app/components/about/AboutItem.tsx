"use client";

import React, { useState } from "react";

const AboutItem = ({items}) => {
  console.log("AboutItem item" + items);
  if (!items || !items.length) {
      return <>
     this is the about page about nothing
      </>;
  }
  const itemInfo = items.join(" and ");
  return <>
     this is the about page about {itemInfo}
  </>;
};

export default AboutItem;