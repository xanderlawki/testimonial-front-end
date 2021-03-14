
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import experience from '../../../images/experience.jpg'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    
    root: {
      flexGrow: 1,
      backgroundColor: '#000',
      color: '#fff'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      
    },
    padding: {
        padding: '70px 30px 10px 10px',
        borderRadius: '10%',
        borderBottom:' dashed'
    }
   
  }));

export default function Hero1() {
    const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container height="100">
        <Typography component="div" style={{borderRadius: '40%'}} >
        <img src={experience} alt='experience' height='350' width='260' display='block' className={classes.padding}/>
        </Typography>
      </Container>
    </React.Fragment>
  );
}