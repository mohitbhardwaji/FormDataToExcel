const Dropdown = ({ label, name, value, options, onChange, required }) => {
    return (
      <div className="w-full">
        <label className="block mb-2 font-semibold text-white">{label}</label>
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="w-full p-2 border rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          required={required}
        >
          <option value="" className="bg-gray-500">
            Select {label}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value} className="bg-gray-500">
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default Dropdown;
  