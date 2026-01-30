import { InfoOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";

interface InfoButtonProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const InfoButton = ({ handleClick }: InfoButtonProps) => (
  <IconButton
    aria-label="info"
    onClick={handleClick}
    size="small"
    color="primary"
    sx={{ height: "34px" }}
  >
    <InfoOutlined />
  </IconButton>
);

export default InfoButton;
