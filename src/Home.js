import React from "react";
import hero from "./assets/3.PNG";
import {
  TextField,
  FormControlLabel,
  Checkbox,
  FormLabel,
  FormControl,
  FormHelperText,
  RadioGroup,
  Radio,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { useForm, Controller } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  inputField: {
    width: "100%",
    margin: theme.spacing(1, 0),
  },
}));

const Home = () => {
  const classes = useStyles();
  const { register, handleSubmit, control, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="box">
      <div className="box-primary">
        <img src={hero} height="300px" alt="" />
      </div>
      <div className="box-secondary">
        <form onSubmit={handleSubmit(onSubmit)}>

          <TextField
            placeholder="Enter Your FullName"
            label="Name"
            variant="outlined"
            fullWidth
            className={classes.inputField}
            name="Name"
            inputRef={register
              ({
                required: "Name is required.",
              })}
            error={Boolean(errors.Name)}
            helperText={errors.Name?.message}
          />

          <TextField
            placeholder="Enter Your Age"
            label="Age"
            variant="outlined"
            fullWidth
            className={classes.inputField}
            name="Age"
            inputRef={register
              ({
                required: "Age is required.",
              })}
            error={Boolean(errors.Age)}
            helperText={errors.Age?.message}
          />

          <TextField
            placeholder="Enter Your Occupation"
            label="Occupation"
            variant="outlined"
            fullWidth
            className={classes.inputField}
            name="occupation"
            inputRef={register
              ({
                required: "occupation is required.",
              })}
            error={Boolean(errors.occupation)}
            helperText={errors.occupation?.message}
          />

          <TextField
            placeholder="Enter the Languages"
            label="Languages Known"
            variant="outlined"
            fullWidth
            className={classes.inputField}
            name="language"
            inputRef={register
              ({
                required: "language is required.",
              })}
            error={Boolean(errors.language)}
            helperText={errors.language?.message}
          />

          <TextField
            placeholder="Enter your field of expertise"
            label="Field of Expertise"
            variant="outlined"
            fullWidth
            className={classes.inputField}
            name="field"
            inputRef={register
              ({
                required: "field of expertise is required.",
              })}
            error={Boolean(errors.field)}
            helperText={errors.field?.message}
          />

          <TextField
            placeholder="Personal Address"
            label="Personal Address"
            variant="outlined"
            fullWidth
            className={classes.inputField}
            name="address"
            inputRef={register
              ({
                required: "address is required.",
              })}
            error={Boolean(errors.address)}
            helperText={errors.address?.message}
          />

          <TextField
            placeholder="Office Address"
            label="Office Address"
            variant="outlined"
            fullWidth
            className={classes.inputField}
            name="address"
            inputRef={register
              ({
                required: "address is required.",
              })}
            error={Boolean(errors.address)}
            helperText={errors.address?.message}
          />

          <TextField
            placeholder="Enter Your Phone Number"
            label="Phone"
            variant="outlined"
            fullWidth
            className={classes.inputField}
            name="phone"
            inputRef={register
              ({
                required: "phone number is required.",
              })}
            error={Boolean(errors.phone)}
            helperText={errors.phone?.message}
          />

          <FormControl className={classes.inputField} error={Boolean(errors.gender)}>
            <FormLabel>Choose Your Gender</FormLabel>
            <RadioGroup row name="gender">
              <FormControlLabel
                value="female"
                control={<Radio inputRef={register
                  ({
                    required: "Choose your gender"
                  })}
                />}
                label="Female"
              />
              <FormControlLabel
                value="male"
                control={<Radio inputRef={register
                  ({
                    required: "Choose your gender"
                  })}
                />}
                label="Male"
              />
              <FormControlLabel
                value="other"
                control={<Radio inputRef={register
                  ({
                    required: "Choose your gender",
                  })}
                />}
                label="Other"
              />
            </RadioGroup>
            <FormHelperText>{errors.gender?.message}</FormHelperText>
          </FormControl>

          {/* Select */}
          <FormControl fullWidth className={classes.inputField} error={Boolean(errors.services)}>
            <InputLabel id="demo-simple-select-label">
              Are you able to provide services
            </InputLabel>

            <Controller
              render={(props) => (
                <Select value={props.value} onChange={props.onChange}>
                  <MenuItem value="YES">Yes</MenuItem>
                  <MenuItem value="NO">No</MenuItem>
                </Select>
              )}
              name="services"
              control={control}
              defaultValue=""
              rules={{
                required: "please choose your option",
              }}
            />
            <FormHelperText>{errors.services?.message}</FormHelperText>
          </FormControl>

          <FormControl fullWidth className={classes.inputField} error={Boolean(errors.bloodgroup)}>
            <InputLabel id="demo-simple-select-label">
              Blood Group
            </InputLabel>

            <Controller
              render={(props) => (
                <Select value={props.value} onChange={props.onChange}>
                  <MenuItem value="none">none</MenuItem>
                  <MenuItem value="A+">A+</MenuItem>
                  <MenuItem value="A-">A-</MenuItem>
                  <MenuItem value="B+">B+</MenuItem>
                  <MenuItem value="B-">B-</MenuItem>
                  <MenuItem value="AB+">AB+</MenuItem>
                  <MenuItem value="AB-">AB-</MenuItem>
                  <MenuItem value="O+">O+</MenuItem>
                  <MenuItem value="O-">O-</MenuItem>
                </Select>
              )}
              name="bloodgroup"
              control={control}
              defaultValue=""
              rules={{
                required: "please choose your Bloodgroup",
              }}
            />
            <FormHelperText>{errors.bloodgroup?.message}</FormHelperText>
          </FormControl>

          <FormControl fullWidth className={classes.inputField} error={Boolean(errors.qualification)}>
            <InputLabel id="demo-simple-select-label">
              Qualification
            </InputLabel>

            <Controller
              render={(props) => (
                <Select value={props.value} onChange={props.onChange}>
                  <MenuItem value="technical">Technical</MenuItem>
                  <MenuItem value="Non-technical">Non-Technical</MenuItem>
                </Select>
              )}
              name="qualification"
              control={control}
              defaultValue=""
              rules={{
                required: "please enter your qualification",
              }}
            />
            <FormHelperText>{errors.qualification?.message}</FormHelperText>
          </FormControl>

          <FormControl error={Boolean(errors.tnc)} style={{ display: "block", marginBottom: 15 }}>
            <FormControlLabel
              control={<Checkbox name="tnc" inputRef={register
                ({
                  required: "Please agree to the terms & conditions."
                })
              } />}
              label="I agree to all the terms and conditions"
            />
            <FormHelperText>{errors.tnc?.message}</FormHelperText>
          </FormControl>

          <Button variant="contained" color="primary" type="submit">
            create new account
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Home;
