import PageLayout from "../../layouts/page";
import { useState } from "react";
import bober from "./assets/images.jpeg"

const ThirdPage = () => {
  return (
    <PageLayout title="Друга сторінка">
      <img src={bober} alt="Bober" />
      <img src={bober} alt="Bober" />
      <img src={bober} alt="Bober" />
    </PageLayout>
  );
};

export default ThirdPage;