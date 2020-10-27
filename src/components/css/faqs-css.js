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

    faqsContainer:{
        minHeight:"30em",
        width:"100%",
        backgroundColor:"white",
        padding:"3em 2em"
    },
    questionContainer:{
        border:"1px solid black",
        padding:"1em",
        maxHeight:"5em",
        transition: "max-height .8s",
        overflow:"hidden",
        margin:"1em 0",
        [theme.breakpoints.down("md")]:{
            padding:"0.1em"
        }
    },
    question:{
           fontFamily:"Raleway",
           fontSize:"1.6rem",
           margin:"0 1em",
           [theme.breakpoints.down("md")]:{
               fontSize:"1.1rem",
            
           }
    },
    answer:{
        fontFamily:"Raleway",
        fontSize:"1.4rem",
        padding:"2em 1em",
        margin:"1em 0",
        [theme.breakpoints.down("md")]:{
            fontSize:"1.1rem"
        }
    },
    expandButton:{
        width:"2em",
        [theme.breakpoints.down("md")]:{
           width:"0em",
           height:"0em"
        }
    }
}))