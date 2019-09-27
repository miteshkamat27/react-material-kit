import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
    },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} showLabels className={classes.root}>
      <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} component={NavLink} to="/recents" />
      <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} component={NavLink} to="/favorites" />
      <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} component={NavLink} to="/nearby" />
      <BottomNavigationAction label="Offers" value="folder" icon={<LocalOfferIcon />} component={NavLink} to="/offers"/>
    </BottomNavigation>
  );
}