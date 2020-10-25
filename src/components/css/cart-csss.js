import {makeStyles} from "@material-ui/core/styles"


export const useStyle=makeStyles(theme=>({
    container:{
        backgroundColor: "#D9AFD9",
        backgroundImage:" linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)",
        minHeight:"55em",
        padding:`2em 3em 3em`,
        paddingLeft:320,
        [theme.breakpoints.down("sm")]:{
            padding:"2em 0.4em",
        }
       },

       cartItem:{
           backgroundColor:"white",
           minHeight:"120px",
           width:"auto",
           marginBottom:"2em",
           padding:"1.5em",
           paddingBottom:"2em",
           [theme.breakpoints.down("md")]:{
            padding:"2em",
        }

       },
       img:{
           height:"100%",
           width:"100%"

       },
       title:{
        fontSize:"1.5rem",
        fontFamily:"Raleway",
        color:"#BA55D3",
        //marginBottom:"1em",
        fontWeight:600,
        textDecoration:"underline",
        marginBottom:"0.5em",
        [theme.breakpoints.down("md")]:{
            fontSize:"1rem"
        }
    },
    totalContainer:{
        backgroundColor:"white",
        marginLeft:"2em",
        padding:"2.5em",
        minHeight:"5em",
        [theme.breakpoints.down("md")]:{
         marginLeft:0   
        }
    },
    descriptionT:{
        fontSize:"1.5rem",
        fontWeight:500,
        color:"#BA55D3",
        textDecoration:"underline",
        marginBottom:"1em"
      },
      description:{
           fontSize:"1.2rem",
           fontWeight:500,
           marginBottom:"3em"
      },
      infoT:{
          color:"#BA55D3",
          fontWeight:550,
          fontSize:"1.5rem",
          fontFamily:"Raleway",
          textDecoration:"underline",
          [theme.breakpoints.down("md")]:{
         fontSize:"1rem"   
        }
      },
      info:{
       fontSize:"1.5rem",
       fontWeight:550,
       fontFamily:"Raleway",
       marginBottom:"2em",
       [theme.breakpoints.down("md")]:{
        fontSize:"1rem"       
    }
      },
      colorButton:{
       
        width:"80px",
        height:"50px",
        border:"4px solid white",
        marginBottom:"2em",
       
        "&:hover":{
            cursor:"pointer"
        }
    },
    color:{
        width:"100%",
        height:"100%"
    },
    removeButton:{
        width:"120px",
        height:"50px",
        
      fontWeight:600,
      [theme.breakpoints.down("md")]:{
          marginLeft:"auto"
      }
    },
    itemPrice:{
          fontSize:"1.5rem",
          fontFamily:"Raleway",
          margin:"0.5em",
          [theme.breakpoints.down("md")]:{
           fontSize:"1rem"   
        }

    },
    part2:{
        minHeight:"10em"
    },
    emptySign:{
        backgroundColor: "#4158D0",
        backgroundImage: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
        height:"10em",
        padding:"3em",
        borderRadius:"5%",
        marginLeft:"20em",
        [theme.breakpoints.down("md")]:{
            marginLeft:0
        }
    },
    emptyText:{
        fontSize:"2rem",
        color:'white',
        fontFamily:"Raleway",
        fontWeight:600,
        [theme.breakpoints.down("md")]:{
           fontSize:"1.2rem"
        }
    },
    chekoutContainer:{
        width:"100%"

    },
    checkoutButton:{
        width:"100%",
        color:"white",
        fontFamily:"Raleway",
        fontSize:"1.2rem",
        fontWeight:600,
        backgroundColor:"#32CD32",
        marginTop:"3em",
        "&:hover":{
            backgroundColor:"#7CFC00"
        }
    }
}))