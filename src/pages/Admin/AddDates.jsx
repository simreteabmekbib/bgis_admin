import React, { useEffect, useState } from 'react';
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
import moment from 'moment';


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
  const onSubmit = async (data) => {
    var date = data.date;
var timeTo  = data.to;
var timeFrom = data.from;

// tell moment how to parse the input string
var momentObjTo = moment(date + timeTo, 'YYYY-MM-DDLT');
var momentObjFrom = moment(date + timeFrom, 'YYYY-MM-DDLT');

// conversion
var dateTimeTo = momentObjTo.format('YYYY-MM-DDTHH:mm:ss.ms');
var dateTimeFrom = momentObjFrom.format('YYYY-MM-DDTHH:mm:ss.ms');

console.log(dateTimeTo+"Z");
console.log(dateTimeFrom+"Z");

    const res = await fetch("https://localhost:7247/api/Admission/AddImportantDate/AddImportantDate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: data.title,
      description: data.description,
      from: dateTimeFrom+"Z",
      to: dateTimeTo+"Z" }),
    });
    if (res.status === 201) {
      // redirect
      console.log("success routing")

    } else {
      // display an error
    }
  };

  const [cardData, setCardData] = useState([]);
  const [mainDescription, setMainDescription] = useState();

  const handleInitialData = async () => {
    
        const res = await fetch("https://localhost:7247/api/Admission/GetImportantDates/GetAllImportantDates", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.status === 200) {
          // redirect
          const data = await res.json();

          console.log(data)
          await setCardData(data)
          console.log(cardData)
    
        } else {
          // display an error
        }
};
useEffect(() => {
  handleInitialData();
}, []);

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
        {...register('to')}
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
                  const newRow = {id: elem.id, name: elem.name, description: elem.description, from: elem.from, to: elem.to, editing: true}
                  const updatedData = [...cardData]
              updatedData[cardData.indexOf(elem)] = newRow
              setCardData(updatedData)
        
                }}/>
                <DeleteIcon style={{ color: "red" }} onClick={async ()=>{
          const updatedData = [...cardData]
          updatedData.splice(cardData.indexOf(elem), 1)
          setCardData(updatedData)
          const res = await fetch("https://localhost:7247/api/Admission/DeleteImportantDate/DeleteImportantDate", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    id: elem.id,
                  }),
                });
                if (res.status === 200) {
                  // redirect
                  console.log("success routing")

                } else {
                  // display an error
                }
        }}/>
                </Grid>}
                {elem.editing && <Grid container justifyContent="flex-end">
                <CheckIcon onClick={async () =>{
              const newRow = {name: elem.name, from: elem.from, to: elem.to, description: mainDescription, editing: false}
              const updatedData = [...cardData]
          updatedData[cardData.indexOf(elem)] = newRow
          setCardData(updatedData)
          const res = await fetch("https://localhost:7247/api/Admission/UpdateImportantDate/UpdateImportantDate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        id: elem.id,
        name: elem.name,
      description: mainDescription,
      from: elem.from,
      to: elem.to }),
    });
    if (res.status === 200) {
      // redirect
      console.log("success routing")

    } else {
      // display an error
    }
            }}/>
            <ClearIcon onClick={() =>{
                  const newRow = {name: elem.name, description: elem.description, from: elem.from, to: elem.to, editing: false}
                  const updatedData = [...cardData]
              updatedData[cardData.indexOf(elem)] = newRow
              setCardData(updatedData)
        
                }}/>
                </Grid>}
              </CardActions>
              <CardContent>
              <Typography fontSize={12} color='green'>
                  {moment(elem.from).format('LL')}
                </Typography>
                <Typography variant='h4' color='black'>
                  {elem.name}
                </Typography>
                <Typography fontSize={12} color='green' marginBottom={2}>
                  {moment(elem.from).format("dddd, h:mm:ss a")+" - " + moment(elem.to).format("h:mm:ss a")}
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
