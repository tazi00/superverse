import React from "react";
import Button from "../../Ui/Components/Button";
import Heading from "../../Ui/Typography/Heading";
import { Flex } from "../../Ui/Layout/Grid";
import HomeSlider from "./Components/HomeSlider";
import NewsSlider from "./Components/NewsSlider";

function Home() {
  return (
    <>
      <HomeSlider />
      <NewsSlider />
    </>
  );
}

export default Home;
