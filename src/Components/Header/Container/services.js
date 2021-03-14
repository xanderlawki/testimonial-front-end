/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
      display: 'flex',
      justifyContent: 'center',
      fontSize: '13px',
      textTransform: 'capitalize',
      width: 'auto',
      border: '1px solid rgba(0, 0, 0, 0.08)'

  },
  margin: {
      marginLeft: '10px',
      marginTop: '10px',
     
  }
}));

export default function Services() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <Typography className={classes.root}>
      <Link href="#" onClick={preventDefault} className={classes.margin}>
      Marketplace
      </Link>
      <Link href="#" onClick={preventDefault}  className={classes.margin}>
      Wholesale Center
      </Link>
      <Link href="#" onClick={preventDefault}  className={classes.margin}>
      Seller center
      </Link>
      <Link href="#" onClick={preventDefault}  className={classes.margin}>
      Service center
      </Link>
      <Link href="#" onClick={preventDefault}  className={classes.margin}>
      Internships
      </Link>
      <Link href="#" onClick={preventDefault}  className={classes.margin}>
      Events
      </Link>
      
    </Typography>
  );
}
