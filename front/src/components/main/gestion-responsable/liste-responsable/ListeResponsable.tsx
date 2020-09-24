import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
// import ElevesCtn from './Eleves.ctn';
import CreatResponsableFormCtn from '../ResponsableForm.Ctn';
import NavBar from './NavBar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary
    },
    setting: {
      margin: 10,
      width: theme.spacing(6),
      height: theme.spacing(6)
    }
  })
);

const ResponsableList: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <NavBar />

      <Grid item xs={8}>
        <div className={classes.paper}>{/* <ElevesCtn /> */}</div>
      </Grid>
      <Grid item xs={4}>
        <CreatResponsableFormCtn />
      </Grid>
    </Grid>
  );
};

export default ResponsableList;