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
    formContainer:{
        width:"40%",
        margin:"0 auto",
        padding:"2em",
        backgroundColor:"white",
        [theme.breakpoints.down("md")]:{
            width:"99%",
            padding:"0.5em"
        }
    },
    
    input :{
        
        fontSize: "inherit",
        fontWeight: "inherit",
        textDecoration: "none",
        fontFamily: "inherit",
        marginBottom:"1.5em",
        padding:"0.5em 0",
        border:"none",
        width:"500px",
        backgroundColor:"transparent",
        borderBottom:"1px solid #BA55D3",
        fontSize:"1.3rem",
        fontFamily:" Raleway",
        "&:focus":{
            outline:"none",
            boxShadow:"0px 10px 10px -5px #BA55D3"
        },
        [theme.breakpoints.down("md")]:{
            width:"300px",
            marginBottom:"1.1emem",
            fontSize:"1rem"
        }
    },

    inputLabel:{
        color:"#BA55D3",
        fontSize:"1.3rem",
        fontFamily:"Raleway",
    },

    reset:{
        width:"10em",
        marginRight:"2em",
        backgroundImage:"linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)"
    },
    resetText:{
        color:"white",
        fontFamily:"Raleway",
        fontWeight:600,
        textTransform:"none",
        fontSize:"1.3rem"
    },
     
    submit:{
        width:"10em",
        backgroundImage:"linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)"
    },
    buttons:{
        marginTop:"3em"
    },

    title:{
        fontSize:"2rem",
        fontFamily:"Raleway",
        color:"#BA55D3",
        textDecoration:"underline",
        margin:"0 0 1em",
        [theme.breakpoints.down("md")]:{
            fontSize:"1.7rem"
        }
    },
    subtitle:{
        fontSize:"1.5rem",
        fontFamily:"Raleway",
        color:"#BA55D3",
        margin:"0 0 3em",
        width:"80%",
        textAlign:"center",
        [theme.breakpoints.down("md")]:{
            fontSize:"1.2rem"
        }
    },
    snack:{
        width:"100%"
    },
   

}))