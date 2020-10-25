import {makeStyles} from "@material-ui/core/styles"
import {red} from '@material-ui/core/colors';

// const drawerWidth = 240;

export const useStyle=makeStyles(theme=>({

        container:{
            backgroundColor: "#D9AFD9",
            backgroundImage:" linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)",
            minHeight:"100em",
            padding:`2em 3em 3em`,
            paddingLeft:350,
            [theme.breakpoints.down("md")]:{
                padding:"1em",
            }
           
        },
        card: {
            width:450,
            height:950,
            marginTop:"3em",
           
            [theme.breakpoints.down("md")]:{
                width:300,
                height:750
            }
           
          },
          media: {
            height:300,
          
            paddingTop: '56.25%', // 16:9
            "&:hover":{
                cursor:"pointer"
            },
            [theme.breakpoints.down("md")]:{
              
              height:200
          }
          },
          expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
              duration: theme.transitions.duration.shortest,
            }),
          },
          expandOpen: {
            transform: 'rotate(180deg)',
          },
          avatar: {
            backgroundColor: red[500],
            width:50,
            height:50
          },
          favorite:{
             
          },
          price:{
              fontSize:"2.2rem",
              color: "#BA55D3",
              fontFamily:"Raleway",
              marginTop:"1em",
              marginLeft:"0.5em"
              },
          cardContent:{
            "&:hover":{
                cursor:"pointer",
                backgroundColor:"#F0F8FF"
            }
          },
          cardTitle:{
              fontFamily:"Raleway",
              fontSize:"1.7rem",
              color:"#BA55D3",
              "&:hover":{
                cursor:"pointer"
            },
            [theme.breakpoints.down("md")]:{
              fontSize:"1rem"
          }

          }  ,
          cardContainer:{
          //  marginRight:"1em"
          },
          pricedropped:{
            fontSize:"2.2rem",
            color: "red",
            fontFamily:"Raleway",
            marginTop:"1em",
            marginLeft:"1em"
          },
          drop:{
            fontSize:"1.8rem",
            color: "white",
            fontFamily:"Raleway",
            marginTop:"1.4em",
            marginLeft:"0.5em",
            backgroundColor:"red",
            height:"1.3em",
            width:"3em"
          }  
}))