import { useState } from "react";
import DynamicFields from "../dynamicfeild/DynamicFeilds";
import { CCTV, Genetec, NetworkSwitch, NVR, projectType, RFDevice, sheetName, WorkStation } from "../../constants/constants";
import { X } from "lucide-react"; // Importing the Lucide React icon
// import DownloadButton from "../button/DownloadButton";
import * as XLSX from "xlsx"; 

const Form = ({ onAddData }) => {
  const [formData, setFormData] = useState({
    siteName: "",
    pmInstallation: "",
    deviceSections: [
      {
        deviceType: "",
        additionalFields: {},
      },
    ],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDeviceChange = (e, index) => {
    const updatedSections = [...formData.deviceSections];
    updatedSections[index] = {
      deviceType: e.target.value,
      additionalFields: {},
    };
    setFormData({ ...formData, deviceSections: updatedSections });
  };

  const handleAdditionalFieldChange = (e, index) => {
    const updatedSections = [...formData.deviceSections];
    updatedSections[index].additionalFields = {
      ...updatedSections[index].additionalFields,
      [e.target.name]: e.target.value,
    };
    setFormData({ ...formData, deviceSections: updatedSections });
  };

  const handleAddDeviceSection = () => {
    setFormData({
      ...formData,
      deviceSections: [
        ...formData.deviceSections,
        {
          deviceType: "",
          additionalFields: {},
        },
      ],
    });
  };

  const handleRemoveDeviceSection = (index) => {
    if (formData.deviceSections.length > 1) {
      const updatedSections = formData.deviceSections.filter(
        (_, i) => i !== index
      );
      setFormData({ ...formData, deviceSections: updatedSections });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  
    // Create an object to store sheets
    const sheetsData = {};
  
    // Map headers to device types
    const headers = {
      CCTV,
      NetworkSwitch,
      WorkStation,
      RFDevice,
      Genetec,
      NVR
    };
  
    // Loop through the device sections and add data to the respective sheets
    formData.deviceSections.forEach((device) => {
      if (device.deviceType) {
        if (!sheetsData[device.deviceType]) {
          sheetsData[device.deviceType] = [];
        }
  
        // Get the headers based on the deviceType
        const sheetHeaders = headers[device.deviceType] || [];
  
        // Create a row of data matching the headers
        const rowData = sheetHeaders.reduce((acc, header) => {
          acc[header] = device.additionalFields[header] || "";
          return acc;
        }, {});
  
        // // Add siteName and pmInstallation to the row
        // rowData["siteName"] = formData.siteName;
        // rowData["pmInstallation"] = formData.pmInstallation;
  
        // Push the row data to the corresponding deviceType sheet
        sheetsData[device.deviceType].push(rowData);
      }
    });
  
    // Convert sheetsData to an Excel file
    const wb = XLSX.utils.book_new();
  
    // Add each sheet to the workbook
    Object.keys(sheetsData).forEach((sheetName) => {
      const ws = XLSX.utils.json_to_sheet(sheetsData[sheetName], { header: headers[sheetName] });
      XLSX.utils.book_append_sheet(wb, ws, sheetName);
    });
  
    // Write the workbook to a file
    XLSX.writeFile(wb, `${formData.siteName ? formData.siteName+'.xlsx' : "site_data.xlsx"}`);
  
    // onAddData(formData);
    setFormData({
      siteName: "",
      pmInstallation: "",
      deviceSections: [
        {
          deviceType: "",
          additionalFields: {},
        },
      ],
    });
  };

  return (
    <div className="bg-gray-900 text-white shadow-lg p-6 rounded-lg w-[90%] max-w-4xl mx-auto space-y-6">
      <div className="bg-blue-500 text-white p-2 rounded-t-lg text-center">
        <h2 className="font-semibold">Site Data</h2>
      </div>

      <div className="flex space-x-4">
        <input
          type="text"
          name="siteName"
          placeholder="Site Name"
          value={formData.siteName}
          onChange={handleChange}
          className="w-full p-2 border rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <select
          name="pmInstallation"
          value={formData.pmInstallation}
          onChange={handleChange}
          className="w-full p-2 border rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        >
          {projectType.map((project) => (
            <option
              key={project}
              value={project === "Project Type" ? "" : project}
              className="bg-gray-600"
            >
              {project}
            </option>
          ))}
        </select>
      </div>

      {formData.deviceSections.map((device, index) => (
        <div key={index} className="bg-gray-800 p-4 rounded-lg space-y-4 relative">
          <label className="block mb-2 font-semibold text-white">
            Select Device Type {index + 1}
          </label>
          <select
            name="deviceType"
            value={device.deviceType}
            onChange={(e) => handleDeviceChange(e, index)}
            className="w-full p-2 border rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            {sheetName.map((sheet) => (
              <option
                key={sheet}
                value={sheet === "Data Type" ? "" : sheet}
                className="bg-gray-600"
              >
                {sheet}
              </option>
            ))}
          </select>

          <DynamicFields
            deviceType={device.deviceType}
            additionalFields={device.additionalFields}
            handleAdditionalFieldChange={(e) =>
              handleAdditionalFieldChange(e, index)
            }
          />

          {/* Cross Button for Removing a Card (Except the First One) */}
          {index > 0 && (
            <button
              type="button"
              onClick={() => handleRemoveDeviceSection(index)}
              className="absolute top-2 right-2 text-white p-1 hover:text-red-600 rounded-full"
              style={{backgroundColor:"#1E2939"}}
            >
              <X size={16} />
            </button>
          )}
        </div>
      ))}

      <button
        type="button"
        onClick={handleAddDeviceSection}
        className="w-full bg-blue-700 text-white p-2 rounded mt-4"
        style={{backgroundColor:"#1E2939"}}
      >
        Add Another Device
      </button>

      <button
        type="submit"
        onClick={handleSubmit}
        className="w-full bg-blue-900 text-white p-2 rounded mt-4"
        style={{backgroundColor:"#2B7FFF"}}
      >
        Download File
      </button>
    </div>
  );
};

export default Form;
