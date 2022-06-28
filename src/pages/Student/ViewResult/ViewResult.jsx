import React, { useState } from 'react';
import MaterialTable from 'material-table';
import { ThemeProvider, createTheme, Button, Grid, Autocomplete, TextField, Box, Icon } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import { useForm } from "react-hook-form";
import { columns, rows } from './tableData'

export default function View() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [show, setShow] = useState(false);
  const theme = createTheme();
  const [filteredData, setFilteredData] = useState([]);
  const status = ["present", "absent"]
  const [resultInitialValue, setresultInitialValue] = useState("");
  const [subjectInitialValue, setsubjectInitialValue] = useState("");
  const [statusInitialValue, setstatusInitialValue] = useState("");

  const [tableData, setTableData] = useState(rows)
  const onSubmit = (data) => {
    console.log(data.result)
    setresultInitialValue(data.result);
    setsubjectInitialValue(data.name);
    setstatusInitialValue(data.status);

    const filteredDataWanted = tableData.filter(row => row.name === data.name);
    setFilteredData(filteredDataWanted)
    setShow(true);
  };

  // const result = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  const name = ["Amharic", "Biology", "Chemistry", "Physics"]
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <form style={{ margin: theme.spacing(4), }} noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <h1>View Result</h1>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={name}
              fullWidth
              renderInput={(params) => <TextField {...params} label="name" variant="outlined"
                {...register('name', { required: 'Required' })}
                error={!!errors?.name}
                helperText={errors?.name ? errors.name.message : null} />}
            />
          </Grid>
          <Grid item xs={6}>
          <Box textAlign='center'>
            <Button style={{
            padding: theme.spacing(1.5),
            width: '30%',
            }}
            variant="contained"
            color="primary"
            //className={classes.button}
            endIcon={<Icon>send</Icon>}
            type='submit'
            >
            Find Result
            </Button></Box>
          </Grid>
        </Grid>

      </form>
      {show && <ThemeProvider theme={theme}>
        <MaterialTable
          columns={columns} data={filteredData}
          onSelectionChange={(selectedRows) => console.log(selectedRows)}
          options={{
            sorting: true, search: true,
            searchFieldAlignment: "right", searchAutoFocus: true, searchFieldVariant: "standard",
            filtering: true, paging: true, pageSizeOptions: [2, 5, 10, 20, 25, 50, 100], pageSize: 5,
            paginationType: "stepped", showFirstLastPageButtons: true, paginationPosition: "bottom", exportButton: true,
            exportAllData: true, exportFileName: "TableData", addRowPosition: "first", actionsColumnIndex: -1, selection: false, filtering: false,
            showSelectAllCheckbox: false, showTextRowsSelected: false, selectionProps: rowData => ({
              color: "primary",         
            }),
            grouping: true, columnsButton: true,
            rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5" } : null,
            headerStyle: { background: "#2196f3", color: "#fff" }
          }}
          title="Result"/>

      </ThemeProvider>}
    </div>
  );

}