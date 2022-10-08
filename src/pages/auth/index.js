import React, {useState} from "react";
import {Grid,} from "@mui/material";
import "./style.scss";
import TextLink from "../../components/textLink";
import {initialState,} from './constants'
import {onChangeInput, validateInputs} from "../../services/utils";
import {SimpleInput,} from "../../components";
import Button from "@mui/material/Button";


function Index(props) {

  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false)

  const updateLocalErrors = (errors) => {
    setState((prevState) => ({
      ...prevState,
      errors,
    }));
  }
  const loginSubmitHandler = (e) => {
    const {email, password,} = state.values;
    const userData = {email, password};
    let recordedErrors = validateInputs(userData);
    if (Object.keys(recordedErrors).length > 0) {
      e.preventDefault();

      updateLocalErrors(recordedErrors);
    } else {
      setLoading(true)
      sessionStorage.setItem("userEmail", email);
      setTimeout(() => {
        setLoading(false)
      }, 500)
    }
  };


  const {values, errors} = state;

  return (
    <Grid container className="mt-30 mb-20 pl-50 user__signup ">
      <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
        <div className="">
          <span className="user__signup__heading">
            {'Sign in'}
          </span>

        </div>
      </Grid>
      <Grid item className=" pl-50 " xs={12} sm={12} md={6} lg={6} xl={5} style={{background: ''}}>
        <Grid container>
          <Grid item xs={12} sm={12} md={10} lg={6} xl={6}>
            <form onSubmit={loginSubmitHandler}>
              <SimpleInput
                item={{
                  value: values.email,
                  error: errors.email,
                  label: 'username',
                  id:'email'
                }}
                onChange={(value, key) => {
                  onChangeInput(value, key, state, setState)
                }}
              />
              <SimpleInput
                item={{
                  type: 'password',
                  value: values.password,
                  error: errors.password,
                  label: 'password',
                }}
                onChange={(value, key) => {
                  onChangeInput(value, key, state, setState)
                }}
              />

              <div className='mt-30'>
                <p className=" user__signup__terms mb-20">
                  Looking for help or support? <br/>
                  help@help.com
                </p>
                {loading ? (
                  // <Loading/>
                  <h1>loading</h1>
                ) : (
                  <Button variant="contained" type={"submit"}>
                    sign in
                  </Button>
                )}
              </div>
            </form>
          </Grid>
        </Grid>

        {<Grid container>
          <Grid item xs={12} sm={12} md={10} lg={7} xl={7}>
            <p className=" user__signup__terms">
              {"By continuing, you agree to accept our"}<br/>
              <TextLink
                text={" Privacy Policy  "}
              /> &
              <TextLink
                text={" Terms of Service."}
              />
            </p>
          </Grid>
        </Grid>}
      </Grid>
    </Grid>
  );
}


export default Index;

