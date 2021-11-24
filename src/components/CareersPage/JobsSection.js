import React from 'react'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router';

import { LinkSimple } from 'phosphor-react'
import SimpleLocalize from "../shared/SimpleLocalize";
import { FormattedMessage } from "react-intl";

const JobsSection = (props) => {
  const location = useLocation();
  const jaPage = location.pathname.includes('/ja')

  const linkLanguageSelector = (pageUrl) => {
    return jaPage ? `/ja${pageUrl}` : pageUrl
  }

  return (
    <SimpleLocalize {...props}>
      <div className="jobs-section">
        <div className="jobs-header">
          <h2>
            <FormattedMessage
              id="careers-header-black-one"
            />
          <span style={{color: "#2669A0"}}>
            <FormattedMessage
              id="careers-header-blue"
            />
          </span>
            <FormattedMessage
              id="careers-header-black-two"
            />
          </h2>
          <p>
            <FormattedMessage
              id="careers-page-description"
            />
          </p>
        </div>

        <div className="jobs-list">
          <div className="jobs-list__header">
            <h2><i className="ph-map-pin"></i>{jaPage ? '東京' : 'Tokyo'}</h2>
          </div>
          <div className="jobs-list__item">
            <div className="job-title">
              <p><Link to={linkLanguageSelector("/careers/senior-developer")}><LinkSimple size={18} /> Senior Developer</Link></p>
            </div>
            <div className="job-department">  
              <p>Engineering</p>
            </div>
            <div className="job-date">
              <p>10/06/2021</p>
            </div>
          </div>
          <div className="jobs-list__item">
            <div className="job-title">
              <p><Link to={linkLanguageSelector("/careers/senior-data-scientist")}><LinkSimple size={18} /> Senior Data Scientist</Link></p>
            </div>
            <div className="job-department">
              <p>Data Science / Machine Learning</p>
            </div>
            <div className="job-date">
              <p>10/15/2021</p>
            </div>
          </div>
        </div>
      </div>
    </SimpleLocalize>
  )
}

export default JobsSection
