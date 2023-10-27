import React from "react";
import * as XLSX from "xlsx"; // Import the entire XLSX module using "* as XLSX" instead of a default import

const InvoiceExcel = ({ invoiceInfoHeaderData, invoiceItemsTableData }) => {
  const generateExcel = () => {

    if (
        !invoiceInfoHeaderData.companyName ||
        !invoiceInfoHeaderData.invoiceNumber
      ) {
        alert("Company Name and Invoice Number are required to generate the EXCEL.");
        return;
      }
    const workbook = XLSX.utils.book_new();

    // Create a worksheet for invoice data
    const wsData = [];

    // Add headers
    wsData.push(["Item Name", "Item Description", "Quantity", "Price", "Total"]);

    // Add invoice items data
    invoiceItemsTableData.forEach((item) => {
      wsData.push([item.itemName, item.itemDescription, item.quantity, item.price, item.quantity * item.price]);
    });

    // Create a worksheet and add data
    const worksheet = XLSX.utils.aoa_to_sheet(wsData);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Invoice");

    // Save the Excel file
    XLSX.writeFile(workbook, `${invoiceInfoHeaderData.invoiceNumber}.xlsx`);
  };

  return (
    <div className="flex justify-center items-center">
      <button onClick={generateExcel} className="btn btn-primary">
        Generate Excel
      </button>
    </div>
  );
};

export default InvoiceExcel;
