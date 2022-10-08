
export const onChangeInput = (value, key, _prevState, setState) => {

  setState((prevState) => ({
    ...prevState,
    values: {
      ...prevState.values,
      [key]: value,
    },
    errors: {
      ...prevState.errors,
      [key]: "",
    }
  }));
};

export const validateInputs = (values) => {
  let keys = Object.keys(values);
  const len = keys.length;
  let recordedErrors = {};
  let value = ''
  for (let i = 0; i < len; i++) {
    value = values[keys[i]];
    value === undefined && console.log(value)
    if (value === undefined || value.toString().trim().length <= 0) {
      recordedErrors = {...recordedErrors, [keys[i]]: `${keys[i]} is required`}
    }
  }
  return (recordedErrors);
}

export const dummyFun=()=>({})
