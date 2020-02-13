import React from "react";
import { SyncLoader } from "react-spinners";

const loadingStyle = {
  height: "90vh",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const Loading = () => {
  return <SyncLoader size={18} color={"#fc4d55"} css={loadingStyle} />;
};

export default Loading;
