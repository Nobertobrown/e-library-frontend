import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Divider, Grid, Link } from "@mui/material";

export default function BasicCard() {
  return (
    <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
      <Card sx={{ backgroundColor: "transparent" }} elevation={0} square>
        <CardContent sx={{ p: 0 }}>
          <Typography
            variant="subtitle1"
            component="h6"
            sx={{ fontWeight: "700", color: "primary.light", mb: "15px" }}
          >
            Our Address
          </Typography>
          <Divider
            variant="fullWidth"
            sx={{
              borderColor: "secondary.main",
              mb: "26px",
              borderBottomWidth: "2px",
            }}
          />
          <Typography variant="body1" component="p">
            Bibititi and Morogoro Rd Junction
            <br />
            P. O. Box 2958 Dar-es-salaam,Tanzania
          </Typography>
        </CardContent>
        <CardActions sx={{ p: 0 }}>
          <Link>principal@dit.ac.tz</Link>
        </CardActions>
      </Card>
    </Grid>
  );
}
