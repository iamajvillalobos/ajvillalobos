import React, { useState, setState } from "react";
import WorkHistorySidebar from "./WorkHistorySidebar";
import WorkHistoryContents from "./WorkHistoryContents";

function WorkHistory() {
  const history = [
    {
      position: "Senior Ruby on Rails Developer",
      company: "Kangarootime",
      start_date: "July 2019",
      end_date: "Present",
      link: "https://kangarootime.com",
      highlights: [
        "Maintain the legacy application that Child Care Centers use all over the US",
        "Refactored a significant part of the application for that contributed to a more streamlined process of identifying children statuses",
        "Work on adding COVID related features for the app to help centers screen children and make it easier for them to onboard incoming children",
      ],
    },
    {
      position: "Software Engineer",
      company: "Bloom Solutions",
      start_date: "November 2017",
      end_date: "December 2020",
      link: "https://www.bloom.solutions/",
      highlights: [
        "Helped maintain BloomRemit, our B2B remittance platform that facilitated over $100m in transactions",
        "Introduced TailwindCSS & VueJS for easier component styling of our apps",
        "Help on the syncing of multiple banks and crypto platforms to our dashboard for our Bloom Trade app that we use internally",
      ],
    },
    {
      position: "Integrations Developer",
      company: "Tanda",
      start_date: "June 2017",
      end_date: "January 2018",
      link: "https://www.tanda.co/",
      highlights: [
        "Built several web services to connect API’s from external sources, then grab and process for the core application",
        "Streamline sales teams processes with a web app that combines multiple apps they use and sync data between apps",
        "Extends operations outside the core application to support popular messaging platforms like Facebook Chat & Hipchat",
      ],
    },
    {
      position: "Ruby on Rails Developer",
      company: "Aelogica",
      start_date: "June 2016",
      end_date: "June 2017",
      link: "https://aelogica.com/",
      highlights: [
        "Help maintain a microservice architecture app built with Rails",
        "Worked on multiple ruby gems that need to integrate with various companies on their inventory systems",
        "Exposed to ETL processes when working with a large amount of data",
      ],
    },
    {
      position: "Ruby on Rails Developer",
      company: "Proudcloud",
      start_date: "August 2015",
      end_date: "June 2016",
      link: "https://proudcloud.io/",
      highlights: [
        "Help on the migration of the app from Rails to EmberJS w/ Rails API",
        "Integrate JSON Web Token for authentication",
        "Design responsive email templates on Sendgrid",
      ],
    },
    {
      position: "Front-end Developer",
      company: "You Source",
      start_date: "September 2014",
      end_date: "August 2015",
      link: "https://www.you-source.com/",
      highlights: [
        "Convert designs from UI/UX designer to rails templates",
        "Collaborate with the Senior UI/UX to create a front-end framework with Bootstrap as a base to have a consistent style",
        "Help on the migration of the app to SPA with Angular & Rails API",
      ],
    },
  ];

  const initialState = {
    currentActive: history[0].company,
  };
  const [state, setState] = useState(initialState);

  function handleTabChange(e) {
    setState({ currentActive: e });
  }

  return (
    <div className="flex flex-col md:flex-row">
      <div className="mb-4 md:mr-4 md:mr-4 md:flex-shrink-0">
        <WorkHistorySidebar history={history} onTabChange={handleTabChange} />
      </div>
      <WorkHistoryContents
        history={history}
        currentActive={state.currentActive}
      />
    </div>
  );
}

export default WorkHistory;
