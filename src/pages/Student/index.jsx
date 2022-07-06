import React, { useEffect, useState } from 'react';
import StudentLayout from './layout';
import {
    Grid,
    Typography,
    Card,
    CardContent,

  } from '@mui/material';
  import moment from 'moment';

function Index(props) {

	const [cardData, setCardData] = useState([]);
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
              {moment(elem.from).format('LL')}
                </Typography>
                <Typography variant='h4' color='black'>
                {elem.name}
                </Typography>
                <Typography fontSize={12} color='green' marginBottom={2}>
                {moment(elem.from).format("dddd, h:mm:ss a")+" - " + moment(elem.to).format("h:mm:ss a")}
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