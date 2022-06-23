import React, { useState } from 'react';
import AdminLayout from './layout';
import MaterialTable from 'material-table';
import { ThemeProvider, Button, Grid, Autocomplete, TextField, Box, Icon } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import theme from '../../styles/theme/theme'

export default function ViewStudents() {


  const [tableData, setTableData] = useState([
    { name: "Simreteab", dob: "12-04-2022", email: "abebe@gmail.com", phoneNumber: "0967543489", alternative: "0978346234", branchId: "Kera123", username: "abebe123"},
    { name: "Simreteab", dob: "12-04-2022", email: "abebe@gmail.com", phoneNumber: "0967543489", alternative: "0978346234", branchId: "Kera123", username: "abebe123"},
    { name: "Simreteab", dob: "12-04-2022", email: "abebe@gmail.com", phoneNumber: "0967543489", alternative: "0978346234", branchId: "Kera123", username: "abebe123"},
    { name: "Simreteab", dob: "12-04-2022", email: "abebe@gmail.com", phoneNumber: "0967543489", alternative: "0978346234", branchId: "Kera123", username: "abebe123"},
    { name: "Simreteab", dob: "12-04-2022", email: "abebe@gmail.com", phoneNumber: "0967543489", alternative: "0978346234", branchId: "Kera123", username: "abebe123"},
    { name: "Simreteab", dob: "12-04-2022", email: "abebe@gmail.com", phoneNumber: "0967543489", alternative: "0978346234", branchId: "Kera123", username: "abebe123"},
    { name: "Simreteab", dob: "12-04-2022", email: "abebe@gmail.com", phoneNumber: "0967543489", alternative: "0978346234", branchId: "Kera123", username: "abebe123"},
    { name: "Simreteab", dob: "12-04-2022", email: "abebe@gmail.com", phoneNumber: "0967543489", alternative: "0978346234", branchId: "Kera123", username: "abebe123"},
    { name: "Simreteab", dob: "12-04-2022", email: "abebe@gmail.com", phoneNumber: "0967543489", alternative: "0978346234", branchId: "Kera123", username: "abebe123"},
    { name: "Simreteab", dob: "12-04-2022", email: "abebe@gmail.com", phoneNumber: "0967543489", alternative: "0978346234", branchId: "Kera123", username: "abebe123"},
    { name: "Simreteab", dob: "12-04-2022", email: "abebe@gmail.com", phoneNumber: "0967543489", alternative: "0978346234", branchId: "Kera123", username: "abebe123"},
    { name: "Simreteab", dob: "12-04-2022", email: "abebe@gmail.com", phoneNumber: "0967543489", alternative: "0978346234", branchId: "Kera123", username: "abebe123"},
    { name: "Simreteab", dob: "12-04-2022", email: "abebe@gmail.com", phoneNumber: "0967543489", alternative: "0978346234", branchId: "Kera123", username: "abebe123"},
    { name: "Simreteab", dob: "12-04-2022", email: "abebe@gmail.com", phoneNumber: "0967543489", alternative: "0978346234", branchId: "Kera123", username: "abebe123"},
    { name: "Simreteab", dob: "12-04-2022", email: "abebe@gmail.com", phoneNumber: "0967543489", alternative: "0978346234", branchId: "Kera123", username: "abebe123"},
    { name: "Simreteab", dob: "12-04-2022", email: "abebe@gmail.com", phoneNumber: "0967543489", alternative: "0978346234", branchId: "Kera123", username: "abebe123"},
    { name: "Simreteab", dob: "12-04-2022", email: "abebe@gmail.com", phoneNumber: "0967543489", alternative: "0978346234", branchId: "Kera123", username: "abebe123"},
    { name: "Simreteab", dob: "12-04-2022", email: "abebe@gmail.com", phoneNumber: "0967543489", alternative: "0978346234", branchId: "Kera123", username: "abebe123"},
    { name: "Simreteab", dob: "12-04-2022", email: "abebe@gmail.com", phoneNumber: "0967543489", alternative: "0978346234", branchId: "Kera123", username: "abebe123"},
    { name: "Simreteab", dob: "12-04-2022", email: "abebe@gmail.com", phoneNumber: "0967543489", alternative: "0978346234", branchId: "Kera123", username: "abebe123"},
    { name: "Simreteab", dob: "12-04-2022", email: "abebe@gmail.com", phoneNumber: "0967543489", alternative: "0978346234", branchId: "Kera123", username: "abebe123"},
    { name: "Simreteab", dob: "12-04-2022", email: "abebe@gmail.com", phoneNumber: "0967543489", alternative: "0978346234", branchId: "Kera123", username: "abebe123"},
    { name: "Simreteab", dob: "12-04-2022", email: "abebe@gmail.com", phoneNumber: "0967543489", alternative: "0978346234", branchId: "Kera123", username: "abebe123"},
    { name: "Simreteab", dob: "12-04-2022", email: "abebe@gmail.com", phoneNumber: "0967543489", alternative: "0978346234", branchId: "Kera123", username: "abebe123"},
    { name: "Simreteab", dob: "12-04-2022", email: "abebe@gmail.com", phoneNumber: "0967543489", alternative: "0978346234", branchId: "Kera123", username: "abebe123"},

  ])
  
  const columns = [
    {
      title: "Name", field: "name",
      // cellStyle: { background:"#009688" }, headerStyle: { color: "#fff" } 
    },
    { title: "DOB", field: "dob"},
    { title: "Email", field: "email", },
    { title: "Phone Number", field: "phoneNumber", }, 
    { title: "Alternative", field: "alternative", },
    { title: "Branch Id", field: "branchId", },
    { title: "Username", field: "username", },
    //grouping: false, align: "center"
    // simretkebedeAyele//, lookup: { M: "Male", F: "Female" }, align: "center"
    //   { title: "City", field: "city",filterPlaceholder:"filter" },
    //   { title: "School Fee", field: "fee", type: "currency", currencySetting: { currencyCode: "INR", minimumFractionDigits: 1 },
    //   // cellStyle: { background:"#009688" }, headerStyle: { color: "#fff" } 
  ]
  return (
      <AdminLayout>
    <div>
      {/* style={{ width: '100%', height: '100%' }} */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
          <ThemeProvider theme={theme}>
        <MaterialTable
          columns={columns} data={tableData}
          editable={{
            onRowAdd: (newRow) => new Promise((resolve, reject) => {
              setTableData([...tableData, newRow])

              setTimeout(() => resolve(), 500)
            }),
            onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {
              const updatedData = [...tableData]
              updatedData[oldRow.tableData.id] = newRow
              setTableData(updatedData)
              setTimeout(() => resolve(), 500)
            }),
            onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
              const updatedData = [...tableData]
              updatedData.splice(selectedRow.tableData.id, 1)
              setTableData(updatedData)
              setTimeout(() => resolve(), 1000)

            })
          }}
          actions={[
            {
              icon: () => <Button style={{ color: "white", background: "#2196f3" }} href="./AddResult"
              >Add</Button>,
              tooltip: "add assesment",
              onClick: (e, data) => console.log(data),
              //isFreeAction:true
            },
            {
              icon: () => <Button style={{ color: "white", background: "#2196f3" }} href=""
              >Approve</Button>,
              tooltip: "add assesment",
              onClick: (e, data) => console.log(data),
              //isFreeAction:true
            },
            {
              icon: () => <Button style={{ color: "white", background: "#2196f3" }} href=""
              >Deny</Button>,
              tooltip: "add assesment",
              onClick: (e, data) => console.log(data),
              //isFreeAction:true
            }
          ]}
          onSelectionChange={(selectedRows) => console.log(selectedRows)}
          options={{
            sorting: true, search: true,
            searchFieldAlignment: "right", searchAutoFocus: true, searchFieldVariant: "standard",
            filtering: true, paging: true, pageSizeOptions: [2, 5, 10, 20, 25, 50, 100], pageSize: 5,
            paginationType: "stepped", showFirstLastPageButtons: true, paginationPosition: "bottom", exportButton: true,
            exportAllData: true, exportFileName: "TableData", addRowPosition: "first", actionsColumnIndex: -1, selection: true, filtering: false,
            showSelectAllCheckbox: true, showTextRowsSelected: false, selectionProps: rowData => ({
              color: "primary",
              // disabled: ? rowData.section: null,            
            }),
            grouping: true, columnsButton: true,
            rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5" } : null,
            headerStyle: { background: theme.palette.tableHeader.main, color: "#fff" }
          }}
          title="List of Students"
          onRowClick={()=>console.log("navigate to User Profile")}
          icons={{
            Add: () => <AddIcon />, Edit: () => <EditIcon style={{ color: theme.palette.editIcon.main }} />,
            Delete: () => <DeleteIcon style={{ color: theme.palette.deleteIcon.main }} />
          }} />

      </ThemeProvider>
    </div>
    </AdminLayout>
  );

}