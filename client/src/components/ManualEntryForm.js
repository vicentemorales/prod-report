import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const ManualEntryForm = () => {
  const [selectedClient, setSelectedClient] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedSku, setSelectedSku] = useState('');
  const [total, setTotal] = useState('');
  const [leaks, setLeaks] = useState('');
  const [samples, setSamples] = useState('');
  const [selectedStartHour, setSelectedStartHour] = useState('');
  const [selectedStartMinute, setSelectedStartMinute] = useState('');
  const [selectedFinishHour, setSelectedFinishHour] = useState('');
  const [selectedFinishMinute, setSelectedFinishMinute] = useState('');
  const [flavorName, setFlavorName] = useState('');

  const handleClientChange = (e) => {
    setSelectedClient(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleSkuChange = (e) => {
    setSelectedSku(e.target.value);
  };

  const handleTotalChange = (e) => {
    setTotal(e.target.value);
  };

  const handleLeaksChange = (e) => {
    setLeaks(e.target.value);
  };

  const handleSamplesChange = (e) => {
    setSamples(e.target.value);
  };

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

  const handleFlavorNameChange = (e) => {
    setFlavorName(e.target.value);
  };

  const handleSubmit = () => {
    // Handle the form submission here, e.g., save the data or perform any necessary actions
    console.log('Form submitted:', {
      client: selectedClient,
      size: selectedSize,
      sku: selectedSku,
      total,
      leaks,
      samples,
      startTime: `${selectedStartHour}:${selectedStartMinute}`,
      endTime: `${selectedFinishHour}:${selectedFinishMinute}`,
      flavorName,
    });

    // Reset the form fields after submission if desired
    setSelectedClient('');
    setSelectedSize('');
    setSelectedSku('');
    setTotal('');
    setLeaks('');
    setSamples('');
    setSelectedStartHour('');
    setSelectedStartMinute('');
    setSelectedFinishHour('');
    setSelectedFinishMinute('');
    setFlavorName('');
  };

  return (
    <div className="formContainer" style={{ padding: '15px' }}>
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
          {/* Add your client options here */}
        </Select>
      </FormControl>

      {selectedClient && (
        <div>
          {/* Rest of the code for size and SKU selection */}
        </div>
      )}

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
            {/* Add your hour options here */}
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
            {/* Add your minute options here */}
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
            {/* Add your hour options here */}
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
            {/* Add your minute options here */}
          </Select>
        </div>
      </FormControl>

      <TextField
        label="Flavor Name"
        value={flavorName}
        onChange={handleFlavorNameChange}
        fullWidth
        margin="normal"
        variant="outlined"
      />

      <TextField
        label="Total"
        value={total}
        onChange={handleTotalChange}
        fullWidth
        margin="normal"
        variant="outlined"
      />

      <TextField
        label="Leaks"
        value={leaks}
        onChange={handleLeaksChange}
        fullWidth
        margin="normal"
        variant="outlined"
      />

      <TextField
        label="Samples"
        value={samples}
        onChange={handleSamplesChange}
        fullWidth
        margin="normal"
        variant="outlined"
      />
    </div>
  );
};

export default ManualEntryForm;
