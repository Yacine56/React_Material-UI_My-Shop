import {makeStyles} from "@material-ui/core/styles"

const drawerWidth = 240;

export const useStyle =makeStyles(theme=>({
    appBar:{
       height:"4em",
       backgroundColor: "#4158D0",
       backgroundImage: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
      
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      
     [theme.breakpoints.down("md")]:{
       marginLeft:0,
       width:"100%"
     }
    },
    menuIcon:{
        height:"2.5em",
        width:"2.5em",
        color:'white',
        
    },
    menuIconButton:{
        height:"3em",
        width:"3em",  
        [theme.breakpoints.up('lg')]: {
          display:"none"
      },      
    },
    tab:{
        fontSize:"1.1rem",
        fontWeight:600,
        color:"white",
    },
    tabs:{
        marginLeft:"5em",
        [theme.breakpoints.down('sm')]: {
          display:"none",
          marginLeft:0,
      },
    },
    moreButton:{
        marginLeft:"auto",
    },
    moreButtontext:{
        color:"white",
        fontSize:"1.5rem",
        fontWeight:600,
        fontFamily:"Raleway",
       
    },
    menu:{
        backgroundColor: "#4158D0",
       backgroundImage: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
     
       
    },
    menuItem:{
            padding:"0.5em 0.5em 0.1em",
            fontFamily:"Raleway",
            fontWeight:"700",
            fontSize:"1.5rem", 
            color:"white",
            opacity:0.7,
            "&:hover":{
              opacity:1
            }  
    },
    menuItemIcon:{
        padding:"0.5em 0.5em 0.1em",
        height:"1.5em",
        width:"1.5em",
        color:'white'
    },
    drawer: {
      
        [theme.breakpoints.up('md')]: {
          width: drawerWidth,
          flexShrink: 0,
        },
      },
     
      menuButton: {
        marginRight: theme.spacing(2),
        display:"none",
        [theme.breakpoints.down('md')]: {
          display: "block",
          marginRight:"2em"
        },
      },
      
      toolbar: theme.mixins.toolbar,
      drawerPaper: {
        backgroundColor: "#4158D0",
        backgroundImage: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
        width: drawerWidth,
        marginBottom:"calc(100%-100px)"
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
      ListItem:{
        opacity:0.7,
        "&:hover":{
          opacity:1,
           } 
      },
      ListItemText:{
        fontSize:"1.5rem",
        fontWeight:600,
        color:"white",
       
      },
      drawericons:{
          color:"white",
        },
      cartIcon:{
        
        height:"1.5em",
        width:"1.5em",
        color:'white'
      },
      cartText:{
      
        fontFamily:"Raleway",
        fontWeight:"700",
        fontSize:"1.3rem", 
        color:"white",
      },
      cart:{
        marginLeft:"3em",
        height:"100%"
      }
}))