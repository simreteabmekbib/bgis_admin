import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    TextField
  } from '@mui/material';

  import BasicProfile from '../../../components/EditProfile/basicProfile';
  import EditAddress from '../../../components/EditProfile/editAddress';
  import EditContact from '../../../components/EditProfile/editContact';
  import EditPassword from '../../../components/EditProfile/editPassword';


// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function AccountProfileDetails() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Edit Profile" {...a11yProps(0)} />
          <Tab label="Edit Contacts" {...a11yProps(1)} />
          <Tab label="Edit Address" {...a11yProps(2)} />
          <Tab label="Edit Password" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <form
      autoComplete="off"
      noValidate
    >
      <Card>
        {/* <CardHeader
          subheader="The information can be edited"
          title="Profile"
        /> */}
        <Divider />
        <CardContent>
            <TabPanel value={value} index={0}>
                <BasicProfile/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <EditContact/>
            </TabPanel>
            <TabPanel value={value} index={2}>
            <EditAddress/>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <EditPassword/>
            </TabPanel>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
          >
            Save Edits
          </Button>
        </Box>
      </Card>
    </form>
    </Box>
  );
}
