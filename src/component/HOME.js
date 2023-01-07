import React from "react";
import CARD from "./CARD";

export default function HOME() {
  return (
    <div className="container text-bg-info p-3">
      <div className="row justify-content-evenly my-5">
        <div className="col-4">
          <CARD />
        </div>
      </div>
    </div>
  );
}
