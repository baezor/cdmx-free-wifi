import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";
import { locations } from "../data";

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>All Available Endpoints</Title>
      <Typography component="p" variant="h4">
        {locations.length}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Last updated {new Date().toLocaleDateString()}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View Endpoints
        </Link>
      </div>
    </React.Fragment>
  );
}
