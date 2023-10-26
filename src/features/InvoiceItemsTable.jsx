// Add ag-grid table to store invoice items/details

import { useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const DeleteRowButtonRenderer = (props) => {
  const onCellDeleteClick = () => {
    if (props.onDeleteClick) {
      props.onDeleteClick(props.node);
    }
  };

  return (
    <button className="btn btn-error" onClick={onCellDeleteClick}>
      Delete Row
    </button>
  );
};

const InvoiceItemsTable = ({ onRowDataChange }) => {
  const gridRef = useRef();

  const [rowData, setRowData] = useState([{}]);

  // column headers and their definitions
  const columnDefs = [
    {
      headerName: "Sr No.",
      valueGetter: "node.rowIndex + 1",
      width: 80,
    },
    {
      headerName: "Item Name",
      field: "itemName",
      editable: true,
      width: 150,
    },
    {
      headerName: "Item Description",
      field: "itemDescription",
      editable: true,
      width: 250,
      wrapText: true,
    },
    {
      headerName: "Quantity",
      field: "quantity",
      editable: true,
      width: 150,
    },
    {
      headerName: "Price",
      field: "price",
      editable: true,
      width: 150,
    },
    {
      headerName: "Total",
      field: "total",
      valueGetter: "data.quantity * data.price",
      width: 150,
    },
    {
      headerName: "Delete",
      cellRenderer: DeleteRowButtonRenderer,
      cellRendererParams: {
        onDeleteClick: (node) => {
          handleDeleteRow(node);
        },
      },
      width: 250,
    },
  ];

  // default column functionalities applied to all columns in the grid
  const defaultColDef = {
    resizable: true,
    wrapText: true,
    autoHeight: true,
    sortable: true,
  };

  // add empty row to the grid
  const addEmptyRow = () => {
    const newRow = {};
    setRowData([...rowData, newRow]);
  };

  // handle row deletion
  const handleDeleteRow = (params) => {
    // return everything except for the deleted row
    const updatedRowData = rowData.filter((row) => row !== params.data);
    setRowData(updatedRowData);
  };

  return (
    <div>
      {/* Invoice title and Add Row Button -- Start */}
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl">Invoice Items Table</h1>
        <button onClick={addEmptyRow} className="btn btn-primary">
          ADD ROW
        </button>
      </div>
      {/* Invoice title and Add Row Button -- End */}

      {/* AgGrid Table Start */}
      <div
        className="ag-theme-alpine-dark"
        style={{ height: 500, width: "90vw" }}
      >
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          animateRows={true}
          onCellValueChanged={(params) => {
            console.log("Cell value changed: ", params.data)
            onRowDataChange(rowData)
          }}
        />
      </div>
      {/* AgGrid Table End */}
    </div>
  );
};

export default InvoiceItemsTable;
