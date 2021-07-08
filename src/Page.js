import React from 'react';
import { Typography } from '@material-ui/core';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  title: {
    textTransform: 'uppercase',
  },
  img: {
    width: '800px',
  },
}));
function Page({ title, image }) {
  const classes = useStyles();

  return (
    <div className='App'>
      <Typography variant='h3' className={classes.title}>
        {' '}
        {title}
      </Typography>
      <img src={image} alt='' className={classes.img} />
    </div>
  );
}
export default Page;
