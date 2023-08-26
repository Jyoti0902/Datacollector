import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; // Import the minus symbol icon
import '../ComponentCSS/DepartmentList.css';

export default function IndeterminateCheckbox() {
  const [parent1Checked, setParent1Checked] = useState([false, false]);
  const [parent2Checked, setParent2Checked] = useState([false, false]);
  const [child1Checked, setChild1Checked] = useState([false, false]);
  const [child2Checked, setChild2Checked] = useState([false, false, false]);
  const [expanded1, setExpanded1] = useState(true); // State for expansion of children
  const [expanded2, setExpanded2] = useState(true); // State for expansion of children


// Toggle the expansion state for children1
const toggleExpanded1 = () => {
  setExpanded1(!expanded1);
};

// Toggle the expansion state for children2
const toggleExpanded2 = () => {
  setExpanded2(!expanded2);
};


  const handleParent1Change = (event) => {
    const isChecked = event.target.checked;
    setParent1Checked([isChecked, isChecked]);
    setChild1Checked([isChecked, isChecked]);
  };

  const handleParent2Change = (event) => {
    const isChecked = event.target.checked;
    setParent2Checked([isChecked, isChecked]);
    setChild2Checked([isChecked, isChecked, isChecked]);
  };

  const handleChild1Change = (event, index) => {
    const newChild1Checked = [...child1Checked];
    newChild1Checked[index] = event.target.checked;
    setChild1Checked(newChild1Checked);
    if (newChild1Checked[0] && newChild1Checked[1]) {
      setParent1Checked([true, true]);
    } else if (!newChild1Checked[0] && !newChild1Checked[1]) {
      setParent1Checked([false, false]);
    } else {
      setParent1Checked([true, false]);
    }
  };

  const handleChild2Change = (event, index) => {
    const newChild2Checked = [...child2Checked];
    newChild2Checked[index] = event.target.checked;
    setChild2Checked(newChild2Checked);
    if (newChild2Checked.every((checked) => checked)) {
      setParent2Checked([true, true]);
    } else if (newChild2Checked.every((checked) => !checked)) {
      setParent2Checked([false, false]);
    } else {
      setParent2Checked([true, false]);
    }
  };

  
  const children1 = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="Support"
        control={<Checkbox checked={child1Checked[0]} onChange={(event) => handleChild1Change(event, 0)} />}
      />
      <FormControlLabel
        label="Customer Success"
        control={<Checkbox checked={child1Checked[1]} onChange={(event) => handleChild1Change(event, 1)} />}
      />
    </Box>
  );

  const children2 = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="Graphic Design"
        control={<Checkbox checked={child2Checked[0]} onChange={(event) => handleChild2Change(event, 0)} />}
      />
      <FormControlLabel
        label="Product Design"
        control={<Checkbox checked={child2Checked[1]} onChange={(event) => handleChild2Change(event, 1)} />}
      />
      <FormControlLabel
        label="Web Design"
        control={<Checkbox checked={child2Checked[2]} onChange={(event) => handleChild2Change(event, 2)} />}
      />
    </Box>
  );

  const parent1 = (
    <div className="parent">
      <div className="toggle" onClick={toggleExpanded1}>
        <ExpandMoreIcon className={expanded1 ? 'minus' : 'plus'} /> {/* Minus or plus symbol icon */}
      </div>
      <FormControlLabel
        label="Customer Service"
        control={
          <Checkbox
            checked={parent1Checked[0] && parent1Checked[1]}
            indeterminate={parent1Checked[0] !== parent1Checked[1]}
            onChange={handleParent1Change}
          />
        }
      />
      {expanded1 && (
        <div className="child">
          {children1}
        </div>
      )}
    </div>
  );


  const parent2 = (
    <div className="parent">
      <div className="toggle" onClick={toggleExpanded2}>
        <ExpandMoreIcon className={expanded2 ? 'minus' : 'plus'} /> {/* Minus or plus symbol icon */}
      </div>
      <FormControlLabel
        label="Design"
        control={
          <Checkbox
            checked={parent2Checked[0] && parent2Checked[1]}
            indeterminate={parent2Checked[0] !== parent2Checked[1]}
            onChange={handleParent2Change}
          />
        }
      />
      {expanded2 && (
        <div className="child">
          {children2}
        </div>
      )}
    </div>
  );


  return (
    
      <div className="department-list" style={{textAlign:'center'}}>
      <h1>DEPARTMENT LIST</h1>
      {parent1}
      {parent2}
    </div>
  );
}
