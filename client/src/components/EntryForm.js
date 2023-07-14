import React, { useState } from "react";
import Dropdown from "react-select";
import { Clients } from "../data/data";

const TabbedForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedFlavor, setSelectedFlavor] = useState("");

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  const handleClientChange = (selectedOption) => {
    setSelectedClient(selectedOption);
    setSelectedSize("");
    setSelectedFlavor("");
  };

  const handleSizeChange = (selectedOption) => {
    setSelectedSize(selectedOption);
    setSelectedFlavor("");
  };

  const handleFlavorChange = (selectedOption) => {
    setSelectedFlavor(selectedOption);
  };

  const clientOptions = Object.values(Clients).map((client) => ({
    label: client.client_name,
    value: client.client_name,
  }));

  const selectedClientData = selectedClient ? Clients[selectedClient.value] : null;
  const sizeOptions = selectedClientData
    ? selectedClientData.sku_sizes.map((size) => ({
        label: size,
        value: size,
      }))
    : [];

  const flavorOptions =
    selectedSize &&
    selectedClientData &&
    selectedClientData.sku_names[selectedSize.value]
      ? selectedClientData.sku_names[selectedSize.value].map((flavor) => ({
          label: flavor,
          value: flavor,
        }))
      : [];

  return (
    <div style={{ maxWidth: "80%" }}>
      <ul className="tab-list">
        <li className={activeTab === 0 ? "active" : ""} onClick={() => handleTabChange(0)}>
          HPP1
        </li>
        <li className={activeTab === 1 ? "active" : ""} onClick={() => handleTabChange(1)}>
          HPP2
        </li>
        <li className={activeTab === 2 ? "active" : ""} onClick={() => handleTabChange(2)}>
          HPP3
        </li>
        <li className={activeTab === 3 ? "active" : ""} onClick={() => handleTabChange(3)}>
          Pack Off
        </li>
        <li className={activeTab === 4 ? "active" : ""} onClick={() => handleTabChange(4)}>
          Thawing
        </li>
      </ul>

      <div className="form-container">
        {activeTab === 0 && (
          <form onSubmit={handleSubmit}>
            <Dropdown
              placeholder="Select Client"
              value={selectedClient}
              onChange={handleClientChange}
              options={clientOptions}
            />
            {selectedClient && (
              <div>
                <Dropdown
                  placeholder="Select SKU Size"
                  value={selectedSize}
                  onChange={handleSizeChange}
                  options={sizeOptions}
                />
                {selectedSize && (
                  <Dropdown
                    placeholder="Select Flavor"
                    value={selectedFlavor}
                    onChange={handleFlavorChange}
                    options={flavorOptions}
                    isDisabled={!selectedSize}
                  />
                )}
              </div>
            )}
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default TabbedForm;
