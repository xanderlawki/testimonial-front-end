import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import {Hero} from './hero';
import {Hero2} from './hero-2'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function HeroContainer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography className={classes.paper}><Hero/></Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography className={classes.paper}>
             <Hero2/> 
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
