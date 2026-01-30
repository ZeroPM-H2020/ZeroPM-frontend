import { Link, Typography } from "@mui/material";

export type ContactInfo = {
  contactFunction: string;
  name: string;
  email: string;
};

export interface contactComponentProps {
  contactFunction: string;
  name: string;
  email: string;
}
const ContactComponent = ({
  contactFunction,
  name,
  email,
}: contactComponentProps) => {
  return (
    <div>
      <Typography variant="body2">{contactFunction}</Typography>
      {name && <Typography variant="body1">{name}</Typography>}
      <Typography variant="body1" component={Link} href={`mailto:${email}`}>{email}</Typography>
    </div>
  );
};

export default ContactComponent;
