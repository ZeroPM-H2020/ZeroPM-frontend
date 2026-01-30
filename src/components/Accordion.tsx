import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

interface AccordionWrapperProps {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any;
}

const AccordionWrapper = ({ title, content }: AccordionWrapperProps) => {
  return (
    <Accordion disableGutters elevation={0} style={{borderBottom: "1px solid var(--blue-adjusted, #1C6EAB)"}}>
      <AccordionSummary
        expandIcon={<ArrowDownwardIcon color="primary" />}
        aria-controls="panel1-content"
        id="panel1-header"
        sx={{content: {margin: "16px 0px"}}} 
      >
        <Typography variant="h3">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{content}</AccordionDetails>
    </Accordion>
  );
};

export default AccordionWrapper;
