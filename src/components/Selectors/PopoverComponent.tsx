import { Popover, Typography } from "@mui/material";

interface PopoverProps {
  info: string | JSX.Element;
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  handleClose: () => void;
  id: string | undefined;
}

const PopoverComponent = ({ info, open, anchorEl, handleClose, id }: PopoverProps) => (
  <Popover
    id={id}
    open={open}
    anchorEl={anchorEl}
    onClose={handleClose}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    elevation={6}
  >
    <Typography variant="body1" sx={{ p: 2, maxWidth: "490px" }}>
      {info}
    </Typography>
  </Popover>
);

export default PopoverComponent;
