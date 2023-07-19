import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, TextField, Button } from '@mui/material';
import { Clients } from '../data/data'; // Importing Clients from separate file

const EntryForm = () => {
  const [selectedClient, setSelectedClient] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [flavorSets, setFlavorSets] = useState([{ size: '', flavor: '', amount: '', leaks: '', samples: '' }]);
  const [selectedStartHour, setSelectedStartHour] = useState('');
  const [selectedStartMinute, setSelectedStartMinute] = useState('');
  const [selectedFinishHour, setSelectedFinishHour] = useState('');
  const [selectedFinishMinute, setSelectedFinishMinute] = useState('');

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

  const hourOptions = [];
  const minuteOptions = [];

  for (let hour = 0; hour <= 24; hour++) {
    hourOptions.push(
      <MenuItem key={hour} value={hour}>
        {hour}
      </MenuItem>
    );
  }

  for (let minute = 0; minute <= 59; minute++) {
    minuteOptions.push(
      <MenuItem key={minute} value={minute}>
        {minute}
      </MenuItem>
    );
  }

  const handleStartHourChange = (e) => {
    const selectedStartHour = e.target.value;
    setSelectedStartHour(selectedStartHour);
  };

  const handleStartMinuteChange = (e) => {
    const selectedStartMinute = e.target.value;
    setSelectedStartMinute(selectedStartMinute);
  };

  const handleFinishHourChange = (e) => {
    const selectedFinishHour = e.target.value;
    setSelectedFinishHour(selectedFinishHour);
  };

  const handleFinishMinuteChange = (e) => {
    const selectedFinishMinute = e.target.value;
    setSelectedFinishMinute(selectedFinishMinute);
  };

  return (
    <div className='formContainer' style={{ padding: '15px' }}>
      <div>
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
        
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="start-time-label" sx={{ background: 'white' }}>Start Time:</InputLabel>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Select
              labelId="start-hour-label"
              id="start-hour-select"
              value={selectedStartHour}
              onChange={handleStartHourChange}
            >
              <MenuItem value="">
                <em>-- Select Hour --</em>
              </MenuItem>
              {hourOptions}
            </Select>
            <span>:</span>
            <Select
              labelId="start-minute-label"
              id="start-minute-select"
              value={selectedStartMinute}
              onChange={handleStartMinuteChange}
            >
              <MenuItem value="">
                <em>-- Select Minute --</em>
              </MenuItem>
              {minuteOptions}
            </Select>
          </div>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="finish-time-label" sx={{ background: 'white' }}>End Time:</InputLabel>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Select
              labelId="finish-hour-label"
              id="finish-hour-select"
              value={selectedFinishHour}
              onChange={handleFinishHourChange}
            >
              <MenuItem value="">
                <em>-- Select Hour --</em>
              </MenuItem>
              {hourOptions}
            </Select>
            <span>:</span>
            <Select
              labelId="finish-minute-label"
              id="finish-minute-select"
              value={selectedFinishMinute}
              onChange={handleFinishMinuteChange}
            >
              <MenuItem value="">
                <em>-- Select Minute --</em>
              </MenuItem>
              {minuteOptions}
            </Select>
          </div>
        </FormControl>
      </div>
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
