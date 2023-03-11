import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Divider, Grid, Link } from "@mui/material";

export default function BasicCard() {
  return (
    <Grid item xs={3}>
      {" "}
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h4" component="h4">
            Our Address
          </Typography>
          <Divider variant="middle" />
          <Typography variant="body" component="p">
            Bibititi and Morogoro Rd Junction
            <br />
            P. O. Box 2958 Dar-es-salaam,
          </Typography>
        </CardContent>
        <CardActions>
          <Link>Tanzania principal@dit.ac.tz</Link>
        </CardActions>
      </Card>
    </Grid>
  );
}
