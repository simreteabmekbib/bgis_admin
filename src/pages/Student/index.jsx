import React, { useState, useEffect } from 'react';
import StudentLayout from './layout';
import {
    Grid,
    Typography,
    Card,
    CardContent,

  } from '@mui/material';

  import StudentService from "./Routes/StudentService";

function Index(props) {

	const [cardData, setCardData] = useState([]);

  useEffect(() => {
   
    let studentService = new StudentService();
      studentService
      .getImportantDates()
      //.then((result) => console.log(result.data[0]));
      .then((result) => {
        setCardData(result.data);
      });
  }, []);

	return (

		<StudentLayout>
            <Grid container spacing={3} columns={12} marginTop={1} marginBottom={5} >
      {cardData.map((elem) => (
          <Grid item xs={12} sm={12} md={12} key={cardData.indexOf(elem)}>
            <Card sx={{ boxShadow: 10 }}>
              <CardContent>
              <Typography fontSize={12} color='green'>
                  {elem.from}
                </Typography>
                <Typography variant='h4' color='black'>
                  {elem.name}
                </Typography>
                {/* <Typography fontSize={12} color='green' marginBottom={2}>
                  {elem.time}
                </Typography> */}
                <Typography variant='p' color='textSecondary'>
                  {elem.description}
                </Typography>
               
              </CardContent>
              
            </Card>
          </Grid>
         ))}
        </Grid>
        </StudentLayout>

	);
}

export default Index;