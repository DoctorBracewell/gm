import {
  Box,
  FormControl,
  FormControlLabel,
  Grid,
  MenuItem,
  Paper,
  Switch,
  TextField,
  Typography,
} from "@material-ui/core";
import { useState } from "react";

interface FormTextData {
  id: string;
  label: string;
  placeholder: string;
}
const formTextData: FormTextData[] = [
  {
    id: "start-snippet",
    label: "Start Snippet",
    placeholder: "This will be put before the start of the cutscene.",
  },
  {
    id: "end-snippet",
    label: "End Snippet",
    placeholder:
      "This will be put at the end of the cutscene, after the player has been made visible and returned to gamemode 2.",
  },
];
export default function Options() {
  const [optionsState, setOptionsState] = useState({
    gamemode: 3,
    invisible: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;
    setOptionsState({
      ...optionsState,
      [name]: checked ?? value,
    });
  };

  return (
    <Paper elevation={3}>
      <Box p={3}>
        <FormControl className="options-form" fullWidth>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h3">Options</Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                id="gamemode"
                name="gamemode"
                label="Gamemode"
                value={optionsState.gamemode}
                onChange={handleChange}
                variant="outlined"
                select
                fullWidth
              >
                <MenuItem value={0}>Survival</MenuItem>
                <MenuItem value={1}>Creative</MenuItem>
                <MenuItem value={2}>Adventure</MenuItem>
                <MenuItem value={3}>Spectator</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Switch
                    id="invisible"
                    name="invisible"
                    checked={optionsState.invisible}
                    onChange={handleChange}
                    color="primary"
                  />
                }
                label="Invisible: "
                labelPlacement="start"
              />
            </Grid>

            {formTextData.map((componentData) => (
              <Grid item xs={12}>
                <TextField variant="outlined" fullWidth {...componentData} />
              </Grid>
            ))}
          </Grid>
        </FormControl>
      </Box>
    </Paper>
  );
}
