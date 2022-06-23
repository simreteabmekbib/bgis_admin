import React, { useState } from 'react';
import MaterialTable from 'material-table'
import AddIcon from '@mui/icons-material/Add';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import { ThemeProvider, createTheme, Autocomplete, TextField } from '@mui/material';

function AddResult() {
    const theme = createTheme();
    const result = ["Pass", "Fail"];

  const [tableData, setTableData] = useState([
    { name: "simret", test: "", id: "ATR/5625/11", subject: "physics", section: "A" },
    { name: "helen", test: "", id: "ATR/5625/11", subject: "physics", section: "A" },
    { name: "kebede", test: "", id: "ATR/5625/11", subject: "physics", section: "A" },
    { name: "abebe", test: "", id: "ATR/5828/14", subject: "physics", section: "A" },
    { name: "melat", test: "", id: "ATR/5674/13", subject: "physics", section: "A" },
    { name: "simret", test: "", id: "ATR/5625/11", subject: "physics", section: "B" },
    { name: "helen", test: "", id: "ATR/5625/11", subject: "physics", section: "B" },
    { name: "kebede", test: "", id: "ATR/5625/11", subject: "physics", section: "B" },
    { name: "abebe", test: "", id: "ATR/5828/14", subject: "physics", section: "B" },
    { name: "melat", test: "", id: "ATR/5674/13", subject: "physics", section: "B" },
    { name: "simret", test: "", id: "ATR/5625/11", subject: "math", section: "A" },
    { name: "helen", test: "", id: "ATR/5625/11", subject: "math", section: "A" },
    { name: "kebede", test: "", id: "ATR/5625/11", subject: "math", section: "A" },
    { name: "abebe", test: "", id: "ATR/5828/14", subject: "math", section: "A" },
    { name: "melat", test: "", id: "ATR/5674/13", subject: "math", section: "A" },
    { name: "simret", test: "", id: "ATR/5625/11", subject: "math", section: "B" },
    { name: "helen", test: "", id: "ATR/5625/11", subject: "math", section: "B" },
    { name: "kebede", test: "", id: "ATR/5625/11", subject: "math", section: "B" },
    { name: "abebe", test: "", id: "ATR/5828/14", subject: "math", section: "B" },
    { name: "melat", test: "", id: "ATR/5674/13", subject: "math", section: "B" },
    { name: "simret", test: "", id: "ATR/5625/11", subject: "chem", section: "A" },
    { name: "helen", test: "", id: "ATR/5625/11", subject: "chem", section: "A" },
    { name: "kebede", test: "", id: "ATR/5625/11", subject: "chem", section: "A" },
    { name: "abebe", test: "", id: "ATR/5828/14", subject: "chem", section: "A" },
    { name: "melat", test: "", id: "ATR/5674/13", subject: "chem", section: "A" },
    { name: "simret", test: "", id: "ATR/5625/11", subject: "chem", section: "B" },
    { name: "helen", test: "", id: "ATR/5625/11", subject: "chem", section: "B" },
    { name: "kebede", test: "", id: "ATR/5625/11", subject: "chem", section: "B" },
    { name: "abebe", test: "", id: "ATR/5828/14", subject: "chem", section: "B" },
    { name: "melat", test: "", id: "ATR/5674/13", subject: "chem", section: "B" },
  ])
  const columns = [
    { title: "Name", field: "name", sorting: true,  
    // cellStyle: { background:"#009688" }, headerStyle: { color: "#fff" } 
  },
    { title: "Interview", field: "interview", filterPlaceholder: "filter" },
    { title: "Exam", field: "exam" }, 
    { title: "Result", field: "result",
    editComponent: props => (
        <Autocomplete
          id="grade"
          size="small"
          options={result}
          label="result"
          //getOptionLabel="grade"
          renderInput={params => {
            return (
              <TextField
                {...params}
                variant="outlined"
                label={props.value}
                fullWidth
              />
            );
          }}
          onChange={e => {props.onChange(e.target.innerText)
          console.log(e.target.innerText)
        }}
        />
      ), 
},
    //grouping: false, align: "center"
    // {
    //   title: "Subject", field: "subject", //, align: "center"
    //   // emptyValue: () => <em>null</em>,
    //   // render: (rowData) => <div style={{ background: rowData.age >= 18 ? "#008000aa" : "#f90000aa",borderRadius:"4px",paddingLeft:5 }}>{rowData.age >= 18 ? "18+" : "18-"}</div>,
    //    searchable: false, export: false
    // },
    // { title: "Section", field: "section" },//, lookup: { M: "Male", F: "Female" }, align: "center"
  //   { title: "City", field: "city",filterPlaceholder:"filter" },
  //   { title: "School Fee", field: "fee", type: "currency", currencySetting: { currencyCode: "INR", minimumFractionDigits: 1 },
  //   // cellStyle: { background:"#009688" }, headerStyle: { color: "#fff" } 
  ]
  
  return (
    <div>
      {/* <h1 align="center">React-App</h1>
      <h4 align='center'>Crash Course on Material Table </h4> */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <ThemeProvider theme={theme}><MaterialTable columns={columns} data={tableData}
        editable={{
          onBulkUpdate: changes =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve();
            }, 1000);
          }),     
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
            
        ]}
        onSelectionChange={(selectedRows) => console.log(selectedRows)}
        options={{
          sorting: true, search: true,
          searchFieldAlignment: "right", searchAutoFocus: true, searchFieldVariant: "standard",
          filtering: true, paging: true, pageSizeOptions: [2, 5, 10, 20, 25, 50, 100], pageSize: 5,
          paginationType: "stepped", showFirstLastPageButtons: false, paginationPosition: "bottom", exportButton: true,
          exportAllData: true, exportFileName: "TableData", addRowPosition: "first", actionsColumnIndex: -1, selection: false, filtering: false,
          showSelectAllCheckbox: false, showTextRowsSelected: false, selectionProps: rowData => ({
            color:"primary",
            // disabled: ? rowData.section: null,            
          }),
          grouping: true, columnsButton: true,
          rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5" } : null,
          headerStyle: { background: "#2196f3",color:"#fff"}
        }}
        title="Grade 9  Physics"
        icons={{ Add: () => <AddIcon />, Edit: () => <EditIcon style={{ color: "blue" }} />,
        Delete: () => <DeleteIcon style={{ color: "red" }} /> }} 
        />
        </ThemeProvider>
    </div>
  );
}

export default AddResult;
