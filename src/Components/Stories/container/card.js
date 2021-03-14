import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import  Box from "@material-ui/core/Box";
import happy from '../../../images/happy-people.jpg';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop:' 70px',
    color: '#000'
  },
  media: {
    height: 0,
    
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  font: {
    fontStyle: 'Lato',
    fontSize: '18px',
    fontWeight: 700
  },
  border: {
    borderRadius: '50%'
  }
}));

export default function StoryCard({story}) {
  const classes = useStyles();
  

  return (
    <Grid item xs>
       <Box className={classes.root}>
      <Box display="flex" justifyContent="center" borderRadius='50%' alignItems="center" marginTop='20px'> 
        <img src={story.photo} alt='happy people' height='60' width='60' className={classes.border}/>
        </Box>
      <CardContent>
      <Typography variant="body2" color="#000" component="h1">
      <Box display="flex" justifyContent="center" alignItems="center" margin='10px' className={classes.font}>
        {`${story.firstname} ${story.lastname}`}
      </Box>
      <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper">
        <Box p={1} >
          in {story.location}
        </Box>
        <Box p={1} bgcolor="#EEF8FF">
         {story.creator}
        </Box>
      </Box>
        </Typography>
        <Typography  display="flex" justifyContent="center" alignItems="center" color="textSecondary" component="p" padding='0 10px 0 10px'>
        <Box display="flex" justifyContent="center" m={1}  fontSize='13px' bgcolor="background.paper">
         {story.message}
          </Box>
        </Typography>
      </CardContent>
    </Box>  
    </Grid>
    
  );
}

