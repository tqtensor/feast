import React from "react";
import { useParams } from "react-router-dom";

const ProfilingReportTab = () => {
  let { featureServiceName } = useParams();

  return (
    <React.Fragment>
      <iframe
        style={{ overflow: "none", height: "85vh", border: "none" }}
        title="html"
        width="100%"
        height="100%"
        src={`${process.env.PROFILING_URL || ""}/${featureServiceName}.html`}
      />
    </React.Fragment>
  );
};

export default ProfilingReportTab;
