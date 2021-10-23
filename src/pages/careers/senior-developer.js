import React from "react";

import Layout from '../../components/Layout'
import seniorDeveloper from "../../../data/CareersPage/seniorDeveloper";

import PositionHeader from "../../components/JobPage/PositionHeader";
import DescriptionRow from "../../components/JobPage/DescriptionRow";

const SeniorDeveloper = () => {
  const { title, location, department } = seniorDeveloper

  const jobInformation = seniorDeveloper.body.map(data =>
      <DescriptionRow
        key={data.id}
        header={data.header}
        content={data.content}
      />
    )
  
  return (
    <Layout pageTitle={title}>
      <div className="job-container">
        <PositionHeader
          title={title}
          location={location}
          department={department}
        />
        <div className="position-description">
          {jobInformation}
        </div>
      </div>
    </Layout>
  )
}

export default SeniorDeveloper
