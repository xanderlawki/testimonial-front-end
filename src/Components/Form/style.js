import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  border: {
    borderRadius: '50%',
    
},
text: {
  fontWeight: 700,
  fontStyle: 'bold',
  fontSize: '22px'
},
margin: {
  marginTop: '20px',
  marginBottom: '10px'
}

}));