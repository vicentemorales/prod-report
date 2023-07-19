import React, { useState } from 'react';
import { Tabs, Tab, Box, Button } from '@mui/material';
import EntryForm from './EntryForm';
import ManualEntryForm from './ManualEntryForm';

const TabsComponent = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [showManualEntryForm, setShowManualEntryForm] = useState(false);
  const [tab1Data, setTab1Data] = useState({});
  const [tab2Data, setTab2Data] = useState({});
  const [tab3Data, setTab3Data] = useState({});
  const [tab4Data, setTab4Data] = useState({});
  const [tab5Data, setTab5Data] = useState({});

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleManualEntryClick = () => {
    setShowManualEntryForm((prevValue) => !prevValue);
  };

  return (
    <div>
      <Tabs value={selectedTab} onChange={handleTabChange}>
        <Tab label="HPP1" />
        <Tab label="HPP2" />
        <Tab label="HPP3" />
        <Tab label="PACK OFF" />
        <Tab label="THAWING" />
      </Tabs>
      <Box sx={{ p: 3 }}>
        {(!showManualEntryForm && (
          <>
            {selectedTab === 0 && <EntryForm formData={tab1Data} setFormData={setTab1Data} />}
            {selectedTab === 1 && <EntryForm formData={tab2Data} setFormData={setTab2Data} />}
            {selectedTab === 2 && <EntryForm formData={tab3Data} setFormData={setTab3Data} />}
            {selectedTab === 3 && <EntryForm formData={tab4Data} setFormData={setTab4Data} />}
            {selectedTab === 4 && <EntryForm formData={tab5Data} setFormData={setTab5Data} />}
            <Button variant="contained" onClick={handleManualEntryClick}>
              Manual Entry
            </Button>
          </>
        )) || (
          <>
            <ManualEntryForm />
            <Button variant="contained" onClick={handleManualEntryClick}>
              Back to Form
            </Button>
          </>
        )}
      </Box>
    </div>
  );
};

export default TabsComponent;
