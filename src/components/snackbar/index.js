import React from 'react';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';

function TransitionLeft(props) {
  return <Slide {...props} direction="left"/>;
}

const time = 99000;

function Index(props) {
  const {type = 'info', message = '', } = props;
  const [open, setOpen] = React.useState(true);

  const closeSnackbar = () => {
    setOpen(false);
  };

  return (
    <Snackbar
      autoHideDuration={time}
      anchorOrigin={{vertical: 'top', horizontal: 'center'}}
      open={open}
      onClose={closeSnackbar}
      TransitionComponent={TransitionLeft}
    >

      <Alert onClose={closeSnackbar} severity={type}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default Index;
