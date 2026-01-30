import { Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";
import PopoverComponent from "./PopoverComponent";
import InfoButton from "./InfoButton";

import "./CheckboxWrapper.scss";

interface SelectorProps {
  label: string;
  checked: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  info?: string | JSX.Element;
  isImplemented?: boolean;
}

export const CheckboxWrapper = ({
  label,
  checked,
  value,
  info = "",
  onChange,
  isImplemented,
}: SelectorProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div className="selector__container">
      <FormControlLabel
        control={
          <Checkbox checked={checked} value={value} disabled={!isImplemented} onChange={onChange} />
        }
        label={label}
      />
      {info && (
        <>
          <InfoButton handleClick={handleClick} />
          <PopoverComponent
            info={info}
            open={open}
            anchorEl={anchorEl}
            handleClose={handleClose}
            id={id}
          />
        </>
      )}
    </div>
  );
};
