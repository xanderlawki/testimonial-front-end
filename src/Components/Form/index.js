import React, { useEffect, useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import useStyles from "./style";
import FileBase from "react-file-base64";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/stories";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Dialog from "@material-ui/core/Dialog";
import Box from "@material-ui/core/Box";
import { DialogTitle, DialogContent, DialogActions } from "../Dialog";
import Grid from "@material-ui/core/Grid";
import hurray from "../../images/hurray.jpg";
const ColorButton = withStyles((theme) => ({
  root: {
    color: "#E5E5E5",
    backgroundColor: "#FF5C00",
    "&:hover": {
      backgroundColor: "#FF5C00",
    },
  },
}))(Button);

///////get the current id
const Form = ({ currentid, setCurrentId }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const post = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);
  const [postData, setPostData] = useState({
    firstname: "",
    lastname: "",
    message: "",
    creator: "",
    photo: "",
    location: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (postData.firstname && postData.lastname === "") {
      dispatch(createPost(postData));
      handleClickOpen();
    }

    clear();
  };
  const clear = () => {
    setPostData({
      firstname: "",
      lastname: "",
      message: "",
      creator: "",
      photo: "",
      location: "",
    });
  };
  return (
    <>
      <Paper className={classes.paper}>
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <Typography variant="h6">
            {currentid ? "Editing" : "Creating"} a Story
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs>
              <TextField
                name="firstname"
                variant="outlined"
                label="firstname"
                value={postData.firstname}
                onChange={(e) =>
                  setPostData({ ...postData, firstname: e.target.value })
                }
              />
            </Grid>
            <Grid item xs>
              <TextField
                name="lastname"
                variant="outlined"
                label="lastname"
                value={postData.lastname}
                onChange={(e) =>
                  setPostData({ ...postData, lastname: e.target.value })
                }
              />
            </Grid>
          </Grid>

          <TextField
            name="message"
            variant="outlined"
            label="share your story"
            fullWidth
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          />
          <FormControl component="fieldset" display="flex">
            {/* <FormLabel component="legend">labelPlacement</FormLabel> */}

            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                value="customer"
                control={<Radio color="primary" />}
                label="customer"
                labelPlacement="start"
                onChange={(e) =>
                  setPostData({ ...postData, creator: e.target.value })
                }
              />
              <FormControlLabel
                value="vendor"
                control={<Radio color="primary" />}
                label="vendor"
                labelPlacement="start"
                onChange={(e) =>
                  setPostData({ ...postData, creator: e.target.value })
                }
              />
            </RadioGroup>
          </FormControl>
          <TextField
            name="location"
            variant="outlined"
            label="city or higher institution(for students)"
            fullWidth
            value={postData.location}
            onChange={(e) =>
              setPostData({ ...postData, location: e.target.value })
            }
          />
          <div className={classes.fileInput}>
            <FileBase
              type="file"
              multiple={false}
              variant="outlined"
              onDone={({ base64 }) =>
                setPostData({ ...postData, photo: base64 })
              }
            />
            <ColorButton
              className={classes.buttonSubmit}
              variant="contained"
              background="#ff5coo"
              size="large"
              type="submit"
              fullWidth
            >
              Submit
            </ColorButton>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={clear}
              fullWidth
            >
              Clear
            </Button>
          </div>
        </form>
      </Paper>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogContent dividers>
          <Typography gutterBottom>
            <Box
              display="flex"
              justifyContent="center"
              className={classes.margin}
            >
              <img
                src={hurray}
                alt="successful"
                height="100"
                className={classes.border}
              />
            </Box>
          </Typography>
          <Typography className={classes.margin}>
            <Box
              display="flex"
              justifyContent="center"
              className={classes.text}
            >
              Thank you for
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              className={classes.text}
            >
              Sharing your story
            </Box>
          </Typography>
          <Typography display="flex" justifyContent="center">
            <p width="40">
              You can always refer us to your friends and families we are always happy and ready
              to serve you
            </p>{" "}
            
          </Typography>
        </DialogContent>
        <DialogActions>
          <ColorButton
            autoFocus
            onClick={handleClose}
            color="primary"
            background="#ff5coo"
            size="large"
            fullWidth
          >
            CLOSE
          </ColorButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Form;
