import React, { useEffect, useState } from 'react';
import AdminLayout from './layout';
import MaterialTable from 'material-table';
import { ThemeProvider, Button, Grid, Autocomplete, TextField, Box, Icon } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import theme from '../../styles/theme/theme'

export default function ViewStudents() {


  const [tableData, setTableData] = useState([])

  const handleInitialData = async () => {

    const res = await fetch("https://localhost:7247/api/Admission/GetAllBranches/GetAllBranches", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status === 200) {
      // redirect
      const data = await res.json();

      console.log(data)
      await setTableData(data)
      console.log(tableData)

    } else {
      // display an error
    }
  };
  useEffect(() => {
    handleInitialData();
  }, []);

  const columns = [
    {
      title: "Name", field: "name"
      // cellStyle: { background:"#009688" }, headerStyle: { color: "#fff" } 
    },
    { title: "Address", field: "address", },
    { title: "Phone Number", field: "phoneNumber", },
    { title: "Description", field: "description", },

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
              onRowAdd: (newRow) => new Promise(async (resolve, reject) => {
                setTableData([...tableData, newRow])
                const res = await fetch("https://localhost:7247/api/Admission/AddBranch/AddBranch", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    name: newRow.name,
                    description: newRow.description,
                    address: newRow.address,
                    phoneNumber: newRow.phoneNumber
                  }),
                });
                if (res.status === 200) {
                  // redirect
                  console.log("success routing")

                } else {
                  // display an error
                }
                setTimeout(() => resolve(), 500)
              }),
              onRowUpdate: (newRow, oldRow) => new Promise(async (resolve, reject) => {
                const updatedData = [...tableData]
                updatedData[oldRow.tableData.id] = newRow
                setTableData(updatedData)
                const res = await fetch("https://localhost:7247/api/Admission/UpdateBranch/UpdateBranch", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    id: oldRow.id,
                    name: newRow.name,
                    description: newRow.description,
                    address: newRow.address,
                    phoneNumber: newRow.phoneNumber
                  }),
                });
                if (res.status === 200) {
                  // redirect
                  console.log("success routing")

                } else {
                  // display an error
                }
                setTimeout(() => resolve(), 500)
              }),
              onRowDelete: (selectedRow) => new Promise(async (resolve, reject) => {
                const updatedData = [...tableData]
                updatedData.splice(selectedRow.tableData.id, 1)
                setTableData(updatedData)
                const res = await fetch("https://localhost:7247/api/Admission/DeleteBranch/DeleteBranch", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    id: selectedRow.id,
                  }),
                });
                if (res.status === 200) {
                  // redirect
                  console.log("success routing")

                } else {
                  // display an error
                }
                setTimeout(() => resolve(), 1000)

              })
            }}
            actions={[

            ]}
            onSelectionChange={(selectedRows) => console.log(selectedRows)}
            options={{
              sorting: true, search: true,
              searchFieldAlignment: "right", searchAutoFocus: true, searchFieldVariant: "standard",
              filtering: true, paging: true, pageSizeOptions: [2, 5, 10, 20, 25, 50, 100], pageSize: 5,
              paginationType: "stepped", showFirstLastPageButtons: true, paginationPosition: "bottom", exportButton: true,
              exportAllData: true, exportFileName: "TableData", addRowPosition: "first", actionsColumnIndex: -1, selection: false, filtering: false,
              showSelectAllCheckbox: false, showTextRowsSelected: false, selectionProps: rowData => ({
                color: "primary",
                // disabled: ? rowData.section: null,            
              }),
              grouping: true, columnsButton: true,
              rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5" } : null,
              headerStyle: { background: theme.palette.tableHeader.main, color: "#fff" }
            }}
            title="List of Branches"
            onRowClick={() => console.log("navigate to User Profile")}
            icons={{
              Add: () => <AddIcon />, Edit: () => <EditIcon style={{ color: theme.palette.editIcon.main }} />,
              Delete: () => <DeleteIcon style={{ color: theme.palette.deleteIcon.main }} />
            }} />

        </ThemeProvider>
      </div>
    </AdminLayout>
  );

}