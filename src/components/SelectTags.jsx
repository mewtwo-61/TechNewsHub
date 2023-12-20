import React, { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const defaultTags = [
  'Express',
  'Node',
  'React',
  'State Management',
  'Visual Studio Code',
  'AI & ChatGPT',
  'Systems Design',
  'Language Learning Model',
  'Kubernetes',
  'Docker',
];

const SelectTags = () => {
  const [tags, setTags] = useState([]);
  const [checked, setChecked] = useState(false);

  const handleCheck = (e) => {
    checked === false ? true : false;
    setChecked(e.target.checked);
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setTags(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={tags}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {defaultTags.map((tags, i) => (
            <MenuItem key={tags} value={tags}>
              <Checkbox
              checked={ checked[i] }
              onClick={() => handleCheck(i)}
              // checked={defaultTags.indexOf(tags) > -1} 
              />
              <ListItemText primary={tags} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectTags;