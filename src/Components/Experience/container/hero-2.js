import react from "react";
import { TextField, Button, Typography, Paper, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: "40px 0 20px 0",
    fontSize: "16px",
    fontStyle: "bold",
    fontFamily: "Lato",
  },
  font: {
    fontSize: "15px",
    fontWeight: 400,
    fontFamily: "Lato",
    color: "#fff",
  },
  layout: {
    fontSize: "13px",
    fontWeight: 100,
    fontFamily: "sans-serif",
    color: "#fff", 
  },
  box: {
    padding: "40px 50px 20px 20px",
    position: 'relative'
  },
  line: {
    position: 'absolute',
    height: '10.2px',
    left: '15px',
    width:' 130px',
    height: '10.2px',
    borderBottom: '1px solid #FF5C00',
    fontSize: "13px",
    fontWeight: 100,
    fontFamily: "sans-serif",
    color: "#fff", 
  }
  
}));

export const Hero2 = () => {
  const classes = useStyles();
  return (
    <>
    <div className={classes.box}>
      <Typography
        display="flex"
        justifyContent="center"
        alignItems="center"
        className={classes.padding}
      >
        <Typography className={classes.font}>
          Daniel &#38; Josh experience
        </Typography>
        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="flex-start"
          fontSize="11px"
          border="1px solid #fff"
          width="55px"
          padding="2px 2px 2px 2px"
        >
          customer
        </Box>
        </Typography>
      <Typography className={classes.layout}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus
        congue varius. Aliquam vestibulum elementum tortor, in accumsan eros
        molestie porttitor. Aliquam vel ante pharetra, maximus libero eget,
        egestas neque. Donec at varius ligula. Suspendisse et ex euismod,
        eros.
      </Typography>
      <Typography style={{marginTop: '20px'}} className={classes.layout}>Share your own story</Typography>
      <div className={classes.line}></div>
      </div>
    </>
  );
};
