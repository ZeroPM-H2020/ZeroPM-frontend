import { Grid, Link, Typography } from "@mui/material";
import "./Footer.scss";
import ContactComponent, { ContactInfo } from "./contactComponent";
import { contactConfig } from "./contactConfig";
import { linksConfig } from "./linksConfig";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo__container">
        <img src="ZeroPM logo.svg" alt="ZeroPM Logo" />
      </div>

      <Grid container spacing={10}>
        <Grid item xs={12} sm={6} lg={3}>
          <div>
            <Typography variant="caption" style={{ whiteSpace: "pre-wrap" }}>
              ZeroPM is a research project funded by EU’s research and innovation funding programme,
              Horizon 2020. ZeroPM will enable the EU Green Deal‘s ambition towards Zero Pollution
              of Persistent, Mobile Substances.
              {"\n"}
              {"\n"}
              ZeroPM will interlink{" "}
              <Link href="https://zeropm.eu/prevent/" target="_blank">
                Prevention
              </Link>
              ,{" "}
              <Link href="https://zeropm.eu/prioritize/" target="_blank">
                Prioritization
              </Link>
              , and{" "}
              <Link href="https://zeropm.eu/remove/" target="_blank">
                Removal
              </Link>{" "}
              strategies to achieve it’s goals. ZeroPM will look at subgroups of PMT/vPvM substances
              including PFAS, trazines and triazoles.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <div className="footer__content__container">
            {linksConfig.map((link, index) => (
              <Link key={`link-${index}`} href={link.href} target="_blank">
                {link.title}
              </Link>
            ))}
          </div>
        </Grid>

        <Grid item xs={12} sm={6} lg={3}>
          <div className="footer__content__container">
            {contactConfig.map((contact: ContactInfo, index: number) => (
              <ContactComponent
                key={`contact-${index}`}
                contactFunction={contact.contactFunction}
                name={contact.name}
                email={contact.email}
              />
            ))}
            <div>
              <Typography variant="body2">Norwegian Geotechnical Institute (NGI)</Typography>
              <Link href="https://www.ngi.no/en" target="_blank">
                www.ngi.no/en
              </Link>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <div className="footer__eu_content__container">
            <img src="EU flag.svg" alt="EU Flag" width={"100%"} />
            <Typography variant="caption">
              This project has received funding from the European Union’s Horizon 2020 research and
              innovation programme under grant agreement No 101036756
            </Typography>
          </div>
        </Grid>
      </Grid>
      {/** 
      <Grid container spacing={10}>
        {[1, 2, 3, 4].map((item) => (
          <Grid key={item} item xs={12} sm={12} md={6} lg={3}>
            <Paper>Item {item}</Paper>
          </Grid>
        ))}
      </Grid>*/}
    </footer>
  );
};

export default Footer;
