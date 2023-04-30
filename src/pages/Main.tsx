import { Box, Button } from '@mui/material';

function App ()
{
  return (
    <>
      <Box>
        <Button variant="contained" component="label">
          Upload
          <input hidden accept="image/*" multiple type="file" />
        </Button>
      </Box>
    </>
  );
}

export default App;
