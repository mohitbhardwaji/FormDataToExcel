import { CCTV, Genetec, NetworkSwitch, NVR, RFDevice, WorkStation } from "../../constants/constants";

const DynamicFields = ({ deviceType, additionalFields, handleAdditionalFieldChange }) => {
  switch (deviceType) {
    case "CCTV":
      return CCTV.map((field) => (
        <input
          key={field}
          type={field.includes("Date") ? "date" : field === "currentPassword" ? "password" : "text"}
          name={field}
          placeholder={field.replace(/([A-Z])/g, " $1").trim()}
          value={additionalFields[field] || ""}
          onChange={handleAdditionalFieldChange}
          className="p-2 border rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4 mr-4"
        />
      ));
    case "NetworkSwitch":
      return NetworkSwitch.map((field) => (
        <input
          key={field}
          type={field.includes("Date") ? "date" : field === "currentPassword" ? "password" : "text"}
          name={field}
          placeholder={field.replace(/([A-Z])/g, " $1").trim()}
          value={additionalFields[field] || ""}
          onChange={handleAdditionalFieldChange}
          className="p-2 border rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4 mr-4"
        />
      ));
    case "WorkStation":
      return WorkStation.map((field) => (
        <input
          key={field}
          type={field.includes("Date") ? "date" : field === "currentPassword" ? "password" : "text"}
          name={field}
          placeholder={field.replace(/([A-Z])/g, " $1").trim()}
          value={additionalFields[field] || ""}
          onChange={handleAdditionalFieldChange}
          className="p-2 border rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4 mr-4"
        />
      ));

    case "RF Device":
      return RFDevice.map((field) => (
        <input
          key={field}
          type={field.includes("Date") ? "date" : field === "currentPassword" ? "password" : "text"}
          name={field}
          placeholder={field.replace(/([A-Z])/g, " $1").trim()}
          value={additionalFields[field] || ""}
          onChange={handleAdditionalFieldChange}
          className="p-2 border rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4 mr-4"
        />
      ));

    case "Genetec":
      return Genetec.map((field) => (
        <input
          key={field}
          type={field.includes("Date") ? "date" : field === "currentPassword" ? "password" : "text"}
          name={field}
          placeholder={field.replace(/([A-Z])/g, " $1").trim()}
          value={additionalFields[field] || ""}
          onChange={handleAdditionalFieldChange}
          className="p-2 border rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4 mr-4"
        />
      ));

      case "NVR":
      return NVR.map((field) => (
        <input
          key={field}
          type={field.includes("Date") ? "date" : field === "currentPassword" ? "password" : "text"}
          name={field}
          placeholder={field.replace(/([A-Z])/g, " $1").trim()}
          value={additionalFields[field] || ""}
          onChange={handleAdditionalFieldChange}
          className="p-2 border rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4 mr-4"
        />
      ));
    default:
      return null;
  }
};

export default DynamicFields;
