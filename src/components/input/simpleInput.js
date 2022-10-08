import React, {useState} from 'react';
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import Tooltip from "@mui/material/Tooltip";
import OutlinedInput from "@mui/material/OutlinedInput";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


function Input(props) {

  const {
    item,
    onChange,
  } = props;

  const {
    id,
    type = 'text',
    label,
    placeholder,
    labelWidth = 53,
    value,
    error,
    required = false,
    min = 0, max,
    disable = false,
    defaultValue = '',
    rows = 1,
    labelDes = '',
    title
  } = item;

  const [showPassword, setShowPassword] = useState(true)

  return (
    <div>
      <InputLabel htmlFor={id} error={error}
                  className={`${labelDes && 'display-flex align-items-center justify-content-between'} `}>
        {label}
        {labelDes && <div className='label-des'>
          <p>{labelDes} </p>
        </div>}
        {required && <sup className='error-class ml-2'>*</sup>}
      </InputLabel>

      <Tooltip title={title || label}>
        <OutlinedInput
          // className={'p-8'}
          variant="outlined"
          disabled={disable}
          id={id || label}
          // type={type}
          type={showPassword ? type : 'text'}
          value={value}
          placeholder={placeholder}
          // margin="normal"
          multiline={rows > 1}
          inputProps={{rows: rows, min: min, max: max, maxLength: item?.maxLength}}
          // inputProps={{rows: rows, min: min, max: max,maxLength:5}}
          required={required}
          fullWidth
          defaultValue={defaultValue}
          error={error}
          onChange={(event) =>
            onChange(event.target.value, id || label)
          }
          labelWidth={labelWidth}
          // style={{border: 'none'}}

          endAdornment={
            (type === 'password' || item?.endAdornment) && <InputAdornment position={item?.endAdornment?.icon || 'end'}>
              <IconButton
                aria-label="toggle password visibility"
                onClick={type === 'password' ? () => setShowPassword(!showPassword) : item.endAdornment.onClick}
                // onMouseDown={handleMouseDownPassword}
              >
                {(item?.endAdornment?.text &&
                  <p className='font-12 m-0 text-uppercase'>{item.endAdornment?.text}</p>) || item.endAdornment?.icon}
                {(type === 'password' && showPassword) ? <Visibility/> : <VisibilityOff/>}
              </IconButton>
            </InputAdornment>
          }
        />
      </Tooltip>

      {/*error message*/}
      {(type !== 'select') && (error &&
        <p className='error-class'><ErrorOutlineIcon style={{marginRight: 2, fontSize: 13}}/><span>{error}</span></p>)}
      {/*</FormControl>*/}
    </div>
  );
}

export default Input;
