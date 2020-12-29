import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Logo from '../assests/logo.png'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
    logo: {
        maxWidth: 100,
      },
      title: {
        flexGrow: 1,
      },
  }));

export default function Header() {
    const classes = useStyles();
    const [value, setValue] = React.useState(2);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: '#fff', color: 'black'}}>
          <Toolbar>
          <Grid justify={"space-between"} container>

            <Grid xs={1} item>
                <img src={Logo} alt="logo" className={classes.logo} />
            </Grid>
          
            <Grid xs={8} item>
              <Grid container justify={"center"}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
                >
                    <Tab label="Home"  />
                    <Tab label="About Us" />
                    <Tab label="Live Classes"/>
                    <Tab label="Blogs" />
                    <Tab label="Books" />
                    <Tab label="Careers" />
                </Tabs>
                </Grid>
            </Grid>
                <Grid item xs={1} />
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  
