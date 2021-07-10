import { Box, Button, Grid, Paper } from "@material-ui/core";
import PageTypography from "./PageTypography";
import Options from "./Options";

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
        <Grid item container xs={12} md={6} spacing={3}>
          <Grid item xs={12}>
            <Options></Options>
          </Grid>
          <Grid item container xs={12}>
            <Box mx="auto" my={5}>
              <Button color="primary" variant="contained" size="large">
                <Box p={5} style={{ fontSize: "2em" }}>
                  Make the magic happen
                </Box>
              </Button>
            </Box>
          </Grid>
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
