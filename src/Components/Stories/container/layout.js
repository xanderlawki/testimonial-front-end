import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import StoryCard from "./card";
import { useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  margin: {
    marginTop: "10px",
    color: 'inherit'
  },
}));

export default function CardLayout() {
  const post = useSelector((state) => state.stories);
  console.log(post, "layout section");
  const classes = useStyles();
  const { stories } = post;
  console.log(stories);
  console.log(post);
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {post && post.stories ? (
          stories.map((story) => <StoryCard story={story} />)
        ) : (
          <div className={classes.margin}>
            <CircularProgress />
          </div>
        )}
      </Grid>
    </div>
  );
}
