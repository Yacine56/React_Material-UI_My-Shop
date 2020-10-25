import React ,{useState,useEffect} from "react"

import Typography from "@material-ui/core/Typography"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Menu from "@material-ui/core/Menu"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import {useStyle}  from "./header-css"
import MenuIcon from "@material-ui/icons/Menu"
import IconButton from "@material-ui/core/IconButton"
import MenuItem from "@material-ui/core/MenuItem"
import {Link} from "react-router-dom"
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import { useTheme } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button"
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { ListItemIcon } from "@material-ui/core"
import KeyboardTabIcon from '@material-ui/icons/KeyboardTab';
//import useMediaQuery from '@material-ui/core/useMediaQuery';

const Header =(props)=>{

  const theme =useTheme()
  const classes=useStyle()
  // const pathName=window.location.pathName
  // const matchMd = useMediaQuery(theme.breakpoints.down("md"))
  const [value,setValue]=useState(0)
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setDrawer]=useState(false)
 


  useEffect(()=>{
    switch(window.location.pathname){
        case "/":
        setValue(0);break;
        case "/todays-deals":
        setValue(1) ;break;
        case "/contact-us":
          setValue(2);break;
        case "/cart":
        setValue(3);break;
        case "/Faqs":
        setValue(3);break;
        default:
            setValue(0)
    }
  },[setValue])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

const handleChange=(event,value)=>{
      setValue(value)
}

const handleDrawerToggle=()=>{
  setDrawer(!openDrawer)
}

  let drawer =(
    <div>
    <div className={classes.toolbar} />
    <Divider />
      <List>
        <ListItem button className={classes.ListItem}>
        <ListItemIcon><KeyboardTabIcon className={classes.drawericons}/></ListItemIcon>
        <ListItemText disableTypography ><Typography className={classes.ListItemText}>Mens</Typography> </ListItemText>
        </ListItem>
        <ListItem button className={classes.ListItem}>
        <ListItemIcon><KeyboardTabIcon className={classes.drawericons}/></ListItemIcon>
        <ListItemText disableTypography ><Typography className={classes.ListItemText}>Women</Typography></ListItemText>
        </ListItem>
        <ListItem button className={classes.ListItem}>
        <ListItemIcon><KeyboardTabIcon className={classes.drawericons}/></ListItemIcon>
        <ListItemText disableTypography ><Typography className={classes.ListItemText}>Kids</Typography></ListItemText>
        </ListItem>
        <ListItem button className={classes.ListItem}>
        <ListItemIcon><KeyboardTabIcon className={classes.drawericons}/></ListItemIcon>
        <ListItemText disableTypography ><Typography className={classes.ListItemText}>Clearance</Typography></ListItemText>
        </ListItem>
      </List>
    
    </div>
  )

  const drawerTab=(
   
    <div>
       <div className={classes.toolbar} />
    <Divider />
    <List onClick={()=>{setDrawer(!openDrawer)}}>
     <ListItem button className={classes.ListItem} to="/" component={Link}>
       <ListItemText disableTypography  ><Typography className={classes.ListItemText}>Shop</Typography></ListItemText>
     </ListItem>
     <ListItem button className={classes.ListItem} to="/todays-deals" component={Link}>
       <ListItemText disableTypography ><Typography className={classes.ListItemText}>our Deals</Typography></ListItemText>
     </ListItem>
     <ListItem button className={classes.ListItem} to="/conact-us" component={Link}>
       <ListItemText disableTypography ><Typography className={classes.ListItemText}>contact-us</Typography></ListItemText>
     </ListItem>
    </List>
    </div>
  )

     return (
         <React.Fragment>
         <AppBar  className={classes.appBar} position="fixed">
             <Toolbar>
              <IconButton className={classes.menuIconButton} onClick={()=>{setDrawer(!openDrawer)}}>
                     <MenuIcon className={classes.menuIcon} />
                 </IconButton>
                <Tabs value={value} onChange={handleChange} className={classes.tabs}>
                     <Tab label="Shop" className={classes.tab} to="/" component={Link}   />
                     <Tab label="Todays Deals" className={classes.tab} to="/todays-deals" component={Link}  />
                     <Tab label="Contact-us"  className={classes.tab} to="/contact-us" component={Link}  />
                 </Tabs>
                      <IconButton className={classes.moreButton}>
                        <Typography className={classes.moreButtontext} onMouseOver={handleClick}>
                        More
                        </Typography>  
                      </IconButton>
                      <Menu
                     id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    MenuListProps={{onMouseLeave:handleClose}}
                    classes={{paper:classes.menu}}
                    
                    >
                   
                    <MenuItem disableGutters onClick={()=>{handleClose(); setValue(4)}} component={Link} to='/Faqs' ><BubbleChartIcon className={classes.menuItemIcon}/><Typography className={classes.menuItem}> Faqs</Typography></MenuItem>
                    
            </Menu>
            <Button className={classes.cart} onClick={()=>{setValue(4)}} component={Link} to='/cart'><AddShoppingCartIcon className={classes.cartIcon}/><Typography className={classes.cartText} >Cart</Typography></Button>
             </Toolbar>

         </AppBar>
         <div style={{marginBottom:"4em"}} />
         <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden mdUp implementation="css">
          <Drawer
           
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={openDrawer}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawerTab}
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden mdDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
     
         </React.Fragment>
     )
}

export default Header