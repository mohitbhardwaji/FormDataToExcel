const CctvFields = ({ additionalFields, handleAdditionalFieldChange }) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[
          "siteName", "department", "make", "model", "cctvType", "camerasLocation",
          "connectivity", "connectedSwitch", "cctvName", "ipAddress", "subnetMask",
          "gateway", "vlan", "userName", "currentPassword", "latestFirmware",
          "serialNo", "macAddress", "installationDate", "warrantyStatus",
          "warrantyStart", "warrantyEnd", "status", "networkStatus"
        ].map((field) => (
          <input
            key={field}
            type={field.includes("Date") ? "date" : field === "currentPassword" ? "password" : "text"}
            name={field}
            placeholder={field.replace(/([A-Z])/g, " $1").trim()}
            value={additionalFields[field] || ""}
            onChange={handleAdditionalFieldChange}
            className="p-2 border rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        ))}
      </div>
    );
  };
  
  export default CctvFields;