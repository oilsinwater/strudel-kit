import { Box } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { TopBar } from '../../components/TopBar';
import { useDataFromSource } from '../../utils/useDataFromSource';
import { CompareDataProvider } from './_context/ContextProvider';
import definitions from './_definitions.json';
import { basename } from '../../main';

/**
 * Top-level wrapper for the compare-data Task Flow templates.
 * Inner pages are rendered inside the `<Outlet />` component
 */
const CompareDataWrapper: React.FC = () => {
  // strudel-kit-variable-next-line
  const scenarios = useDataFromSource('default/compare-data/scenarios.json', basename);

  /**
   * Content to render on the page for this component
   */
  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <TopBar />
      </Box>
      <Box>
        {/* strudel-kit-variable-next-line */}
        <CompareDataProvider 
          data={scenarios || []} 
          columns={definitions.columns.list.table} 
          dataIdField='id'
        >
          <Outlet />
        </CompareDataProvider>
      </Box>
    </Box>
  )
}

export default CompareDataWrapper;