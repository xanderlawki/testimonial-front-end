import react from 'react';
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    padding: {
     padding: '100px 50px 20px 20px',
     fontSize: '20px',
     fontWeight: 700,
     fontStyle: 'bold',
     fontFamily: 'Lato',
    },
    font: {
      fontSize: '20px',
     fontWeight: 700,
     fontStyle: 'bold',
     fontFamily: 'Lato',
     color: '#000',
   
    }
  }));

export const Hero = ()=> {
    const classes = useStyles();
    return (
        <>
        <Typography display="flex" justifyContent="center" alignItems="center" className={classes.padding}>
           <Typography className={classes.font}>Amazing</Typography>
           <Typography className={classes.font}>Experiences from our wonderful customers</Typography>
        </Typography>
        <Typography>Here is what our customer and vendors are saying about us</Typography>
        <Typography>Share your own story</Typography>
        </>
    )
}