import * as XLSX from "xlsx";

const DownloadButton = ({ data }) => {
  const exportToExcel = () => {
    if (data.length === 0) return;
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, "form_data.xlsx");
  };

  return (
    <button
      onClick={exportToExcel}
      className="w-full bg-green-500 text-white p-2 rounded mt-4"
      disabled={data.length === 0}
    >
      Download Excel
    </button>
  );
};

export default DownloadButton;
