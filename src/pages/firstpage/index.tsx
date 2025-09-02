import PageLayout from "../../layouts/page";
import { useState } from "react";
import bober from "./assets/images.jpeg"

const FirstPage = () => {
  return (
    <PageLayout title="Перша сторінка">
      <img src={bober} alt="Bober" />
    </PageLayout>
  );
};

export default FirstPage;