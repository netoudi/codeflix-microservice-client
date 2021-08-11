import React from 'react';

import { makeStyles } from '@material-ui/core';

import Category from 'components/Video/Category';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 30,
    left: 4,
    padding: 5,
  },
  category: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8em',
      borderBottomWidth: '2px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.4em',
      borderBottomWidth: '5px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.6em',
    },
  },
}));

const BannerCategory: React.FunctionComponent = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Category {...props} className={classes.category} />
    </div>
  );
};

export default BannerCategory;
