import React from "react";
import { Banner } from "src/Components/ForHelloPage/Banner/Banner";
import { SuperBanner } from "src/Components/ForHelloPage/SuperBanner/SuperBanner";

export const RespectPage = () => {
  return (
    <div>
      <Banner collapsible={false} />
      <div style={{ margin: 10 }}>
        <SuperBanner />
      </div>
    </div>
  );
};
