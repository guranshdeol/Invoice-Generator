// InvoiceDetails which is parent to all Invoice components
import { useState } from "react";
import InvoiceInfoHeader from "./InvoiceInfoHeader";
import InvoiceItemsTable from "./InvoiceItemsTable";
import InvoicePDF from "./InvoicePDF";
import TempInvoiceDetailsOutput from "./Temp/TempInvoiceDetailsOutput";

const InvoiceDetailsPage = () => {
  const [invoiceInfoHeader, setInvoiceInfoHeader] = useState({
    companyName: "",
    companyAddress: "",
    customerName: "",
    customerAddress: "",
    invoiceNumber: "",
    invoiceDate: "",
  });

  const handleInvoiceInfoHeaderChange = (name, value) => {
    setInvoiceInfoHeader({ ...invoiceInfoHeader, [name]: value });
  };

  const [rowItemData, setRowItemData] = useState([]);

  const handleRowDataChange = (data) => {
    setRowItemData(data);
  };

  return (
    <>
      {/* InvoiceInfoHeader Start */}
      <div className="card w-full bg-base-300 shadow-xl">
        <div className="card-body">
          <InvoiceInfoHeader
            invoiceInfoData={invoiceInfoHeader}
            onInvoiceInfoChange={(name, value) =>
              handleInvoiceInfoHeaderChange(name, value)
            }
          />
        </div>
      </div>
      {/* InvoiceInfoHeader End */}

      {/* InvoiceItemsTable Start  */}
      <div className="card w-full bg-base-300 shadow-xl my-4">
        <div className="flex justify-center items-center m-6">
          <InvoiceItemsTable onRowDataChange={handleRowDataChange} />
        </div>
      </div>
      {/* InvoiceItemsTable End  */}

      {/* InvoicePDF Start */}
      <InvoicePDF
        invoiceInfoHeaderData={invoiceInfoHeader}
        invoiceItemsTableData={rowItemData}
      />
      {/* InvoicePDF End */}

      {/* TempInvoiceDetailsOutput Start */}
      <div className="card w-auto my-8 bg-neutral">
        <TempInvoiceDetailsOutput
          invoiceInfoHeaderData={invoiceInfoHeader}
          invoiceItemsTableData={rowItemData}
        />
      </div>
      {/* TempInvoiceDetailsOutput End */}
    </>
  );
};

export default InvoiceDetailsPage;
