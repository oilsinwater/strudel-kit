import { Box, LinearProgress, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import { LinearMeter } from '../../../components/LinearMeter';
import { useContributeData } from '../_context/ContextProvider';
  
/**
 * Panel to display information and status of validation checks in the contribute-data Task Flow.
 * This component is rendered as part of the `<ReviewDataset>` page.
 */
export const ValidationChecks: React.FC = () => {  
  const { state, dispatch } = useContributeData();

  /**
   * Content to render on the page for this component
   */
  return (
    <Paper
      sx={{
        height: '100%',
        padding: 2,
      }}
    >
      <Stack>
        <Typography
          component="h2"
          variant="h6"
        >
          Validation Checks
        </Typography>
        <Typography>
          Running the dataset metadata and datafile against our standard set of metadata, data and congruency checks helps to validate the data and find potential issues with format or compatibility. 
        </Typography>
        <Typography>
          These checks help to improve discoverability and reusability of your research data, and also fastens the process of verifying the data for the public release.
        </Typography>
        <Typography>
          We run checks to gauge the following aspects of uploaded dataset.
        </Typography>
        {state.runningChecks && (
          <Box>
            <Stack sx={{ marginBottom: 2, marginTop: 2, }}>
              <LinearProgress />
              <Typography variant="body2">Running validation checks</Typography>
            </Stack>
          </Box>
        )}
        {!state.runningChecks && state.checksComplete && (
          <Box>
            <Stack sx={{ marginBottom: 2, marginTop: 2, }}>
              <LinearMeter value={90} />
              <Stack direction="row">
                <Typography 
                  variant="body2"
                  color="success.main"
                >
                  Passed: 22 checks
                </Typography>
                <Typography 
                  variant="body2"
                  color="neutral.dark"
                >
                  Warning: 2 checks
                </Typography>
              </Stack>
            </Stack>
          </Box>
        )}
        <Box>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography fontWeight="bold">
              Findability
            </Typography>
            {!state.runningChecks && state.checksComplete && (
              <Box sx={{ width: '60%' }}>
                <LinearMeter value={100} />
              </Box>
            )}
          </Stack>
          <Typography>
            Determine how easy it is for someone to find your dataset
          </Typography>
          {state.runningChecks && <Box>Test</Box>}
        </Box>
        <Box>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography fontWeight="bold">
              Accessibility
            </Typography>
            {!state.runningChecks && state.checksComplete && (
              <Box sx={{ width: '60%' }}>
                <LinearMeter value={100} />
              </Box>
            )}
          </Stack>
          <Typography>
            Determine how easy it is for someone to access your dataset
          </Typography>
        </Box>
        <Box>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography fontWeight="bold">
              Interoperability
            </Typography>
            {!state.runningChecks && state.checksComplete && (
              <Box sx={{ width: '60%' }}>
                <LinearMeter value={90} />
              </Box>
            )}
          </Stack>
          <Typography>
            Determine how easy it is to make use of the information in your dataset
          </Typography>
        </Box>
        <Box>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography fontWeight="bold">
              Reusability
            </Typography>
            {!state.runningChecks && state.checksComplete && (
              <Box sx={{ width: '60%' }}>
                <LinearMeter value={90} />
              </Box>
            )}
          </Stack>
          <Typography>
            Determine how easy it is for someone to reuse your dataset
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
}