import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Page from './Page';
import { AppBar, Typography } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import about from './about.jpg';
import home from './space.jpg';
import search from './search.png';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none',
    color: 'white',
    marginLeft: '20px',
  },
}));
export default function App() {
  const classes = useStyles();
  return (
    <Router>
      <div>
        <AppBar position='static'>
          <Toolbar>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <Typography variant='h6' className={classes.title}>
                Home
              </Typography>
            </Link>
            <Link to='/about' style={{ textDecoration: 'none' }}>
              <Typography variant='h6' className={classes.title}>
                About
              </Typography>
            </Link>
            <Link to='/search' style={{ textDecoration: 'none' }}>
              <Typography variant='h6' className={classes.title}>
                search
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route path='/about'>
            <Page title='About' image={about} />
          </Route>
          <Route path='/search'>
            <Page title='search' image={search} />
          </Route>
          <Route path='/'>
            <Page title='Home' image={home} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
