import React, { useState } from 'react';
import AdminLayout from './layout';
import {
    Box,
    Button,
    Container,
    CssBaseline,
    Grid,
    Stack,
    TextField,
    Typography,
    Tabs,
    Tab,
    IconButton,
    Card,
    CardContent,
    createTheme,
    CardActions,
  } from '@mui/material';
  import { set, useForm } from 'react-hook-form';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
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
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  

function AddImportantDates() {
    const theme = createTheme();
    const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data)
  };

  const [cardData, setCardData] = useState([
    { date: "25-02-2022",title: "Exam Date", time: "6:30 AM - 6:30 PM",
    description: "Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.", editing: false},
    { date: "25-02-2022",title: "Exam Date", time: "6:30 AM - 6:30 PM",
    description: "Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.", editing: false},

  ],);
  const [mainDescription, setMainDescription] = useState();

  return (
      <AdminLayout>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
        variant="fullWidth">
        <Tab label="Add Date" {...a11yProps(0)} />
        <Tab label="View Dates" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
      <form style={{ margin: theme.spacing(4), }} noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3} columns={12} marginTop={1} marginBottom={5} >
            <Grid item xs={6} sm={12} md={6}>
      <TextField
        id="date"
        label="Date"
        type="date"
        fullWidth
        //defaultValue="2017-05-24"
        //sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
        {...register('date', { required: 'Required' })}
                error={!!errors?.date}
                helperText={errors?.date ? errors.date.message : null}
      /></Grid>
      <Grid item xs={6} sm={12} md={6}>
      <TextField
        id="time"
        label="Time From"
        type="time"
        //defaultValue="07:30"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
        //sx={{ width: 150 }}
        fullWidth
        {...register('from', { required: 'Required' })}
                error={!!errors?.from}
                helperText={errors?.from ? errors.from.message : null}
      /></Grid>
      <Grid item xs={6} sm={12} md={6}>
              <TextField id="outlined-basic" label="Title" variant="outlined" fullWidth
                {...register('title', { required: 'Required' })}
                error={!!errors?.title}
                helperText={errors?.title ? errors.title.message : null} />
            </Grid>
      <Grid item xs={6} sm={12} md={6}>
      <TextField
        id="time"
        label="Time To"
        type="time"
        //defaultValue="07:30"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
        //sx={{ width: 150 }}
        fullWidth
        {...register('to', { required: 'Required' })}
                error={!!errors?.to}
                helperText={errors?.to ? errors.to.message : null}
      /></Grid>
      <Grid item xs={6} sm={12} md={6}>
              <TextField id="outlined-basic" label="Description" variant="outlined" fullWidth multiline={true}
                {...register('description', { required: 'Required' })}
                error={!!errors?.description}
                helperText={errors?.description ? errors.description.message : null} />
            </Grid>
            </Grid>
            <Box textAlign='center'>

            <Button style={{
              //   margin: theme.spacing(4),
              padding: theme.spacing(1.5),
              width: '30%',
            }}
              variant="contained"
              color="primary"
              //className={classes.button}
              //endIcon={<Icon>send</Icon>}
              type='submit'
            >
              Add Date
            </Button>
          </Box>
            </form>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Grid container spacing={3} columns={12} marginTop={1} marginBottom={5} >
      {cardData.map((elem) => (
          <Grid item xs={12} sm={12} md={12} key={cardData.indexOf(elem)}>
            <Card sx={{ boxShadow: 10 }}>
            <CardActions>
                {!elem.editing && <Grid container justifyContent="flex-end">
                <EditIcon style={{ color: "blue" }}
                onClick={()=>{
                  const newRow = {date: elem.date, title: elem.title, time: elem.time, description: elem.description, editing: true}
                  const updatedData = [...cardData]
              updatedData[cardData.indexOf(elem)] = newRow
              setCardData(updatedData)
        
                }}/>
                <DeleteIcon style={{ color: "red" }} onClick={()=>{
          const updatedData = [...cardData]
          updatedData.splice(cardData.indexOf(elem), 1)
          setCardData(updatedData)

        }}/>
                </Grid>}
                {elem.editing && <Grid container justifyContent="flex-end">
                <CheckIcon onClick={() =>{
              const newRow = {date: elem.date, title: elem.title, time: elem.time, description: mainDescription, editing: false}
              const updatedData = [...cardData]
          updatedData[cardData.indexOf(elem)] = newRow
          setCardData(updatedData)
            }}/>
            <ClearIcon onClick={() =>{
                  const newRow = {date: elem.date, title: elem.title, time: elem.time, description: elem.description, editing: false}
                  const updatedData = [...cardData]
              updatedData[cardData.indexOf(elem)] = newRow
              setCardData(updatedData)
        
                }}/>
                </Grid>}
              </CardActions>
              <CardContent>
              <Typography fontSize={12} color='green'>
                  {elem.date}
                </Typography>
                <Typography variant='h4' color='blue'>
                  {elem.title}
                </Typography>
                <Typography fontSize={12} color='green' marginBottom={2}>
                  {elem.time}
                </Typography>
                {!elem.editing && <Typography variant='p' color='textSecondary'>
                  {elem.description}
                </Typography>}
                {elem.editing && <TextField id="outlined-basic" label="Description" variant="outlined" fullWidth multiline={true} defaultValue={elem.description}
                onChange={(event) => {setMainDescription(event.target.value)}}
                // {...register('description', { required: 'Required' })}
                // error={!!errors?.description}
                // helperText={errors?.description ? errors.description.message : null} 
                />}
              </CardContent>
              
            </Card>
          </Grid>
         ))}
        </Grid>
      </TabPanel>
    </AdminLayout>

  );
}

export default AddImportantDates;
