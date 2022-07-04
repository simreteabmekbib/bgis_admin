import React, { useState } from 'react';
import StudentLayout from './layout';
import {
    Grid,
    Typography,
    Card,
    CardContent,

  } from '@mui/material';

function Index(props) {

	const [cardData, setCardData] = useState([
		{ date: "25-02-2022",title: "Exam Date", time: "6:30 AM - 6:30 PM",
		description: "Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.", editing: false},
		{ date: "25-02-2022",title: "Exam Date", time: "6:30 AM - 6:30 PM",
		description: "Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.", editing: false},
	
	  ],);

	return (

		<StudentLayout>
      <Typography variant='h4' color='black' textAlign="center">
                  Important Dates
                </Typography>
            <Grid container spacing={3} columns={12} marginTop={1} marginBottom={5} >
      {cardData.map((elem) => (
          <Grid item xs={12} sm={12} md={12} key={cardData.indexOf(elem)}>
            <Card sx={{ boxShadow: 10 }}>
              <CardContent>
              <Typography fontSize={12} color='green'>
                  {elem.date}
                </Typography>
                <Typography variant='h4' color='black'>
                  {elem.title}
                </Typography>
                <Typography fontSize={12} color='green' marginBottom={2}>
                  {elem.time}
                </Typography>
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