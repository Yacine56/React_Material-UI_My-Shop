import {makeStyles} from "@material-ui/core/styles"


export const useStyle=makeStyles(theme=>({
           container:{
            backgroundColor: "#D9AFD9",
            backgroundImage:" linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)",
            minHeight:"55em",
            padding:`2em 3em 3em`,
            paddingLeft:320,
            [theme.breakpoints.down("sm")]:{
                padding:"2em 0.2em",
            }
           },

           img:{
               width:"100px",
               height:"150px",
               marginRight:"3em",
               "&:hover":{
                   cursor:"pointer",
                   marginLeft:"2em"
               },
               [theme.breakpoints.down("sm")]:{
                   marginLeft:"1em"
               }
             
           },
           mainImg:{
               width:"80%",
               height:"30em",
               "&:hover":{
                cursor:"pointer"
            },
            [theme.breakpoints.down("sm")]:{
                  width:"200px",
                  height:"20em",
                  align:"center"
            }
           },
           part2:{
               padding:"2em",
               backgroundColor:"white",
               height:"auto",
              },
              title:{
                  fontSize:"2rem",
                  fontFamily:"Raleway",
                  color:"#BA55D3",
                  //marginBottom:"1em",
                  fontWeight:600,
                  textDecoration:"underline",
              },
              date:{
                  fontSize:"1rem",
                  color:"grey",
                  marginBottom:"3em"
              },
              quantityButton:{
                  fontSize:"1.5rem",
                  
              },
              quantity:{
                  width:"50px",
                  textAlign:"center",
                  marginRight:"1.3em"
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
              priceT:{
                fontSize:"1.5rem",
                fontWeight:500,
                 marginTop:"2em"
              },
              price:{
                fontSize:"2.2rem",
                color: "#BA55D3",
                fontFamily:"Raleway",
                marginLeft:"0.5em",
                marginTop:"0.5em",
                marginBottom:"2em"
                },
              button:{
                backgroundColor: "#4158D0",
                backgroundImage: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
                color:"white",
                fontFamily:"Raleway",
                fontSize:"1.2rem",
                fontWeight:600,
                marginRight:"1em",
                width:"15em",
                marginBottom:"1em"
              },
              sizeButton:{
                  width:"100px",
                  margin:"0.5em",
                  marginBottom:"3em",
                 
              },
              sizeText:{
                  fontSize:"1.2rem",
                  color:"#BA55D3",
                  fontFamily:"Raleway",
                  fontWeight:550
              },
              colorButton:{
                  padding:"0.5em",
                  width:"80px",
                  height:"50px",
                  border:"4px solid white",
                  marginBottom:"3em",
                  margin:"0.3em",
                  "&:hover":{
                      cursor:"pointer"
                  }


              },
              color:{
                  width:"100%",
                  height:"100%"
              }
}))