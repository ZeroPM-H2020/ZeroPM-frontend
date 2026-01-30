import { Typography } from "@mui/material";
import Footer from "./Footer/Footer";

import "./Main.scss";
import AccordionWrapper from "./Accordion";
import { accordionConfig } from "./Accordion-content-config";
import { FAQConfig } from "./FAQ-content-config";

const Main = () => {
  return (
    <div id="page-container">
      <div id="content-wrap">
        {/* Title */}
        <div className="titleContainer">
          <Typography variant="h1">Global Chemical Inventory</Typography>
          <Typography variant="h3">Version 0.9.0</Typography>
        </div>

        {/* Ingress */}
        <Typography variant="body2" style={{ whiteSpace: "pre-wrap" }}>
          This is the beta version (v 0.9.0) of the ZeroPM database, the Global Chemical Inventory.
          It builds on work from Wang et al. (2020). This version of the database is the most
          current, to view olders versions visit the{" "}
          <a
            href="https://zenodo.org/communities/zeropm-h2020/records?q=&l=list&p=1&s=10&sort=newest"
            target="_blank"
          >
            zenodo
          </a>{" "}
          page.
          {"\n"}
          {"\n"}
          The database is licensed under CC-BY4.0.
        </Typography>

        {/* Content */}
        <div>
          {accordionConfig.map((accordion, index) => (
            <AccordionWrapper
              key={`accordion-${index}`}
              title={accordion.title}
              content={accordion.content}
            />
          ))}
        </div>
        <div>
          <Typography variant="h2">Frequently asked questions</Typography>
          <div>
            {FAQConfig.map((accordion, index) => (
              <AccordionWrapper
                key={`accordion-${index}`}
                title={accordion.title}
                content={accordion.content}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
