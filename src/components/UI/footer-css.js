import {makeStyles} from "@material-ui/core/styles"


export const useStyle=makeStyles(theme=>({
    container:{
       
        height:"8em",
        backgroundColor: "#4158D0",
        backgroundImage: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
        padding:"2em 4em ",
      paddingLeft:250,
      [theme.breakpoints.down("xs")]:{
          paddingLeft:0,
          padding:"1em 0em"
      }
      
    },
    icons:{
        width:"50px",
        height:"50px",
        "&:hover":{
            width:"60px",
            height:"60px",
            
        }
        
    },
    iconContainer:{
       width:"220px",
       marginLeft:"auto",
       marginTop:"4em"
    }
}))