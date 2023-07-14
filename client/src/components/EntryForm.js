import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Clients } from '../data/data'; // Importing Clients from separate file

const EntryForm = () => {
  const [selectedClient, setSelectedClient] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedFlavor, setSelectedFlavor] = useState('');

  const handleClientChange = (e) => {
    const selectedClient = e.target.value;
    setSelectedClient(selectedClient);
    setSelectedSize('');
    setSelectedFlavor('');
  };

  const handleSizeChange = (e) => {
    const selectedSize = e.target.value;
    setSelectedSize(selectedSize);
    setSelectedFlavor('');
  };

  const handleFlavorChange = (e) => {
    const selectedFlavor = e.target.value;
    setSelectedFlavor(selectedFlavor);
  };

  return (
    <div className='formContainer'style={{padding: '15px'}}>
      <FormControl sx={{ m: 1, minWidth: 200}}>
        <InputLabel id="client-label" sx={{background: 'white' }}>Select a client</InputLabel>
        <Select
          labelId="client-label"
          id="client-select"
          value={selectedClient}
          onChange={handleClientChange}
        >
          <MenuItem value="">
            <em>-- Select Client --</em>
          </MenuItem>
          {Object.keys(Clients).map((key) => (
            <MenuItem key={key} value={key}>
              {Clients[key].client_name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <br />
      <FormControl sx={{ m: 1, minWidth: 200 }} disabled={!selectedClient}>
        <InputLabel id="size-label" sx={{background: 'white' }}>Select a size</InputLabel>
        <Select labelId="size-label" id="size-select" value={selectedSize} onChange={handleSizeChange}>
          <MenuItem value="">
            <em>-- Select Size --</em>
          </MenuItem>
          {selectedClient &&
            Clients[selectedClient].sku_sizes.map((size) => (
              <MenuItem key={size} value={size}>
                {size}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <br />
      <FormControl sx={{ m: 1, minWidth: 200 }} disabled={!selectedSize}>
        <InputLabel id="flavor-label" sx={{background: 'white' }}>Select a flavor</InputLabel>
        <Select
          labelId="flavor-label"
          id="flavor-select"
          value={selectedFlavor}
          onChange={handleFlavorChange}
        >
          <MenuItem value="">
            <em>-- Select Flavor --</em>
          </MenuItem>
          {selectedSize &&
            Clients[selectedClient].sku_names[selectedSize].map((flavor) => (
              <MenuItem key={flavor} value={flavor}>
                {flavor}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default EntryForm;
