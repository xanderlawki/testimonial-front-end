import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Header from '../Header';
import Hero from '../Hero';
import {useDispatch} from 'react-redux';
import {getPosts} from '../../actions/stories';
import {useSelector} from 'react-redux';
import Form from '../Form'
import {Stories} from '../Stories'
import { Experience } from '../Experience';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: 'column-reverse'
    }
  }
 
}));

export default function Home() {
    const classes = useStyles()
    const dispatch = useDispatch() 
    const stories = useSelector((state)=> state.stories)
    console.log(stories)
    useEffect(()=> {
      dispatch(getPosts())
    },[stories,dispatch])
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={8} flexDirection='column-reverse'>
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#fff'}} >
        <Header/>
        <Hero/>
        <Experience />
        <Stories/>
        </Typography>
      </Container>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Form/>
      </Grid>
    </Grid>
  );
}
