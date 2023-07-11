import { useState } from "react";
//MUI
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function FormInput({ users, setUsers }) {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    gender: 'male',
    state: 'Hà Nội'
  });


  const onFormChange = (e) => {
    const { id, value, type } = e.target;

    if (type === 'radio') {
      setForm((prevState) => ({
        ...prevState,
        gender: value
      }));
    } else if (type === 'select-one') {
      setForm((prevState) => ({
        ...prevState,
        state: value
      }));
    } else {
      setForm((prevState) => ({
        ...prevState,
        [id]: value
      }));
    }
  };

  const onSubmit = (e) => {
    e.preventDefault(),
      setUsers((prevState) =>
        [
          ...prevState,
          form
        ]
      )
    setForm((prevState) => ({
      ...prevState,
      firstname: '',
      lastname: '',
      email: '',
      gender: 'male',
      state: 'Hà Nội'
    }))
  }

  console.log(users)

  return (
    <div style={{ marginLeft: '30px' }}>
      <h1>Form Register</h1>
      <form onSubmit={onSubmit}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <TextField
              id="firstname"
              label="First Name"
              variant="outlined"
              value={form.firstname}
              required={true}
              onChange={onFormChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="lastname"
              label="Last Name"
              variant="outlined"
              value={form.lastname}
              required={true}
              onChange={onFormChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="email"
              label="Email Address"
              variant="outlined"
              value={form.email}
              required={true}
              onChange={onFormChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl sx={{ width: '20px' }}>
              <FormLabel id="gender">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="gender"
                id="gender"
                value={form.gender}
                onChange={onFormChange}
              >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={8}>
            <FormControl fullWidth >
              <FormLabel id="gender">Choose State</FormLabel>
              <NativeSelect
                inputProps={{
                  name: 'state',
                  id: 'state',
                }}
                onChange={onFormChange}
              >
                <option value='hanoi'>Hà Nội</option>
                <option value='hcm'>Hồ Chí Minh</option>
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item xs={8}>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
