
import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, TextField, Button } from '@mui/material';
import { Clients } from '../data/data'; // Importing Clients from separate file

const EntryForm = () => {
  const [selectedClient, setSelectedClient] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [flavorSets, setFlavorSets] = useState([{ size: '', flavor: '', amount: '', leaks: '', samples: '' }]);

  const handleClientChange = (e) => {
    const selectedClient = e.target.value;
    setSelectedClient(selectedClient);
    setSelectedSize('');
    setFlavorSets([{ size: '', flavor: '', amount: '', leaks: '', samples: '' }]);
  };

  const handleSizeChange = (index, e) => {
    const selectedSize = e.target.value;
    const newFlavorSets = [...flavorSets];
    newFlavorSets[index].size = selectedSize;
    setFlavorSets(newFlavorSets);
  };

  const handleFlavorChange = (index, e) => {
    const selectedFlavor = e.target.value;
    const newFlavorSets = [...flavorSets];
    newFlavorSets[index].flavor = selectedFlavor;
    setFlavorSets(newFlavorSets);
  };

  const handleAmountChange = (index, e) => {
    const amount = e.target.value;
    const newFlavorSets = [...flavorSets];
    newFlavorSets[index].amount = amount;
    setFlavorSets(newFlavorSets);
  };

  const handleLeaksChange = (index, e) => {
    const leaks = e.target.value;
    const newFlavorSets = [...flavorSets];
    newFlavorSets[index].leaks = leaks;
    setFlavorSets(newFlavorSets);
  };

  const handleSamplesChange = (index, e) => {
    const samples = e.target.value;
    const newFlavorSets = [...flavorSets];
    newFlavorSets[index].samples = samples;
    setFlavorSets(newFlavorSets);
  };

  const handleAddFlavorSet = () => {
    const newFlavorSets = [...flavorSets, { size: '', flavor: '', amount: '', leaks: '', samples: '' }];
    setFlavorSets(newFlavorSets);
  };

  const handleRemoveFlavorSet = () => {
    const newFlavorSets = [...flavorSets];
    newFlavorSets.pop();
    setFlavorSets(newFlavorSets);
  };

  return (
    <div className='formContainer' style={{ padding: '15px' }}>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="client-label" sx={{ background: 'white' }}>Select a client</InputLabel>
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
      <div style={{ border: '1px solid lightgrey', borderRadius: '4px', padding: '5px' }}>
        {flavorSets.map((flavorSet, index) => (
          <div key={index} style={{ display: 'flex', marginBottom: '10px' }}>
            <FormControl sx={{ m: 1, minWidth: 200 }}>
              <InputLabel id={`size-label-${index}`} sx={{ background: 'white' }}>Select a size</InputLabel>
              <Select
                labelId={`size-label-${index}`}
                id={`size-select-${index}`}
                value={flavorSet.size}
                onChange={(e) => handleSizeChange(index, e)}
              >
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
            <FormControl sx={{ m: 1, minWidth: 200 }} disabled={!flavorSet.size}>
              <InputLabel id={`flavor-label-${index}`} sx={{ background: 'white' }}>Select a flavor</InputLabel>
              <Select
                labelId={`flavor-label-${index}`}
                id={`flavor-select-${index}`}
                value={flavorSet.flavor}
                onChange={(e) => handleFlavorChange(index, e)}
              >
                <MenuItem value="">
                  <em>-- Select Flavor --</em>
                </MenuItem>
                {flavorSet.size &&
                  Clients[selectedClient].sku_names[flavorSet.size].map((flavor) => (
                    <MenuItem key={flavor} value={flavor}>
                      {flavor}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, maxWidth: 100 }}>
              <TextField
                placeholder='Total'
                value={flavorSet.amount}
                onChange={(e) => handleAmountChange(index, e)}
              />
            </FormControl>
            <FormControl sx={{ m: 1, maxWidth: 100 }}>
              <TextField
                placeholder='Leaks'
                value={flavorSet.leaks}
                onChange={(e) => handleLeaksChange(index, e)}
              />
            </FormControl>
            <FormControl sx={{ m: 1, maxWidth: 100 }}>
              <TextField
                placeholder='Samples'
                value={flavorSet.samples}
                onChange={(e) => handleSamplesChange(index, e)}
              />
            </FormControl>
            {index === flavorSets.length - 1 && (
              <Button variant="contained" sx={{ marginTop: 'auto', marginLeft: '10px', marginBottom: '16px' }} onClick={handleAddFlavorSet}>
                +
              </Button>
            )}
            {index === flavorSets.length - 1 && index !== 0 && (
              <Button
                variant="contained"
                color="error"
                sx={{ marginTop: 'auto', marginLeft: '10px', marginBottom: '16px' }}
                onClick={handleRemoveFlavorSet}
              >
                Remove
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EntryForm;
