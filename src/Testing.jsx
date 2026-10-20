import { Button, Box, Typography } from "@mui/material";

const add = (a, b) => {
  return a + b;
};

const Testing = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" color="primary">
        Testing for Test Cases
      </Typography>

      <Typography sx={{ mt: 2 }}>2 + 3 = {add(2, 3)}</Typography>

      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Save
      </Button>

      <Button variant="contained" color="secondary" sx={{ mt: 2, ml: 2 }}>
        Cancel
      </Button>
    </Box>
  );
};

export default Testing;
