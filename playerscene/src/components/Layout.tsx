import { Box, Grid, Paper } from "@material-ui/core";
import PageTypography from "./PageTypography";
export default function Layout() {
  return (
    <Box m={3}>
      <Grid container spacing={3}>
        {/* Title */}
        <Grid item xs={12}>
          <Box m={3}>
            <PageTypography variant="h1" dataPath="title" />
          </Box>
          <Box m={1}>
            <PageTypography variant="body1" dataPath="info" />
          </Box>
        </Grid>

        {/* Second row */}
        <Grid item xs={12} md={6}>
          <Box>
            <Paper elevation={2}>1</Paper>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Paper elevation={2}>1</Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
