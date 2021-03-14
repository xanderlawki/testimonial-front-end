import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import testimonial from "../../../images/testimonial-icon.png";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    backgroundColor: "#E5E5E5",
  },
  flex: {
    display: "flex",
    backgroundColor: "#fff",
    color: "#000",
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  root: {
    fontSize: "14px",
    marginTop: "10px",
  },
  img: {
    flex: " 0 0 200px",
    fontSize: "14px",
    marginTop: "10px",
  },
  nav: {
    flex: "0 0 1",
    fontSize: "14px",
    marginTop: "10px",
  },
}));

const ColorButton = withStyles((theme) => ({
  root: {
    color: "#E5E5E5",
    backgroundColor: "#FF5C00",
    "&:hover": {
      backgroundColor: "#FF5C00",
    },
  },
}))(Button);

export default function NavBar() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Box className={classes.flex}>
        <Box
          display="flex"
          justifyContent="center"
          className={classes.marginTop}
          className={classes.img}
          item
          xs
        >
          <Box p={1}>
            <img src={testimonial} alt="testimonial" height="40" />
          </Box>
        </Box>
        <Box
          display="flex"
          alignItems="flex-start"
          justifyContent="flex-end"
          className={classes.marginTop}
          className={classes.nav}
        >
          <Box p={1}>About</Box>
          <Box p={1}>Stories</Box>
          <Box p={1}>Contact</Box>
          <ColorButton
            variant="contained"
            size="small"
            color="primary"
            display="flex"
            alignItems="flex-start"
            justifyContent="flex-end"
            className={classes.margin}
          >
            Login
          </ColorButton>
        </Box>
      </Box>
    </AppBar>
    // <div >
    //    <Grid container >
    //   <Grid item xs={6}>
    //   <Box
    //     display="flex"
    //     justifyContent="center"
    //     className={classes.marginTop}
    //     className={classes.root}
    //     item xs
    //   >
    //     <Box p={1}>
    //     <img src={testimonial} alt="testimonial" height='40' />
    //     </Box>
    //   </Box>
    //    </Grid>
    //   <Grid item xs={6}>
    //   <Box
    //     display="flex"
    //     alignItems="flex-start"
    //     className={classes.marginTop}
    //     className={classes.root}
    //   >
    //     <Box p={1}>
    //      About
    //     </Box>
    //     <Box p={1}>
    //       Stories
    //     </Box>
    //     <Box p={1}>
    //       Contact
    //     </Box>
    //     <Box>
    //    <ColorButton variant="contained" color="primary" className={classes.margin}>
    //       Login
    //     </ColorButton>
    //     </Box>
    //   </Box>
    //   </Grid>
    //  </Grid>
    // </div>
  );
}

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// export default function ButtonAppBar() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>

//     </div>
//   );
// }
