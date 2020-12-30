import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from "@material-ui/core/Grid"
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
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
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open,setOpen]=React.useState(false)

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
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
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                      <Tab label="Live Classes"/> <ExpandMoreIcon/>
                    </Button>
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
        <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Phonic Classes</MenuItem>
        <MenuItem onClick={handleClose}>Maths Classes</MenuItem>
      </Menu>
      </div>
    );
  }
  
