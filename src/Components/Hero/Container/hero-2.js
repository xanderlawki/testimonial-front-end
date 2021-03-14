import react from 'react';
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import happy from '../../../images/happy-people.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    padding: {
     padding: '100px 50px 20px 20px',
     height: '100%'
    },
    
  }));



export const Hero2 = ()=> {
    const classes = useStyles();
    return (
        <>
        <Box display="flex" justifyContent="center" alignItems="center" className={classes.padding}> 
        <img src={happy} alt='happy people' height='200'/>
        </Box>
        </>
    )
}