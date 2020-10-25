import React ,{/*useEffect,*/useState} from "react";
import Grid from "@material-ui/core/Grid";
import { useStyle } from "./css/shop-css";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import {/*Link*/useHistory} from "react-router-dom"
import Divider from "@material-ui/core/Divider"

const Todays=()=>{
    
        const classes = useStyle();
        const history =  useHistory()
       const [like,setLike]=useState(false)
        const title ="Heavy Tech Parka With Faux Fur Lined Hood"
        let oldPrice=39.99
        const drop=0.2
        let newPrice = (oldPrice-oldPrice*drop).toFixed(2)
       // useEffect(()=>{
       //    return ()=>{
       //        history.goBack()
       //     }
       // }
       // ,[history])
     
      
       const goProduct=(i,drop)=>{
           history.push(`/${i}`,{drop})
       }
      
       let content = [1, 1,1 ,1];
     
       return (
         <Grid container className={classes.container} alignItems="center">
          
         
               {content.map((item, index) => {
                 return (
                   <Grid item md={4}  xs={12} key={index}  className={classes.cardContainer} align="center">
                     
                     <Card className={classes.card} >
                       <CardHeader
                         avatar={
                           <Avatar aria-label="recipe" className={classes.avatar} style={{fontSize:"1.8rem",fontWeight:500}}>
     
                             {title.split("")[0]}
                           </Avatar>
                         }
                         action={
                           <IconButton aria-label="settings">
                             <MoreVertIcon />
                           </IconButton>
                         }
                         title={(
                           <Typography className={classes.cardTitle} onClick={()=>{goProduct(index,drop)}}>{title}</Typography>
                          )} 
                         subheader={`${new Date().toISOString().split('T')[0]}`}
                       />
                       <CardMedia
                        onClick={()=>{goProduct(index,drop)}}
                         className={classes.media}
                         image="images/pic2_1.jpg"
                         title="vest"
                       />
                       <CardContent className={classes.cardContent}  onClick={()=>{goProduct(index,drop)}}>
                         <Typography
                           variant="h6"
                           color="textSecondary"
                           component="p"
                          
                         >
                           2 front pockets, 1 interior pocket, faux fur lined hood, elastic cuffs
                         </Typography>
                         <Grid container direction="row">
                         <Typography className={classes.price}>
                         <strike>  $ {oldPrice} </strike>
                         </Typography>
                         <Typography className={classes.drop}>
                          - {drop*100}% 
                         </Typography>
                         <Typography className={classes.pricedropped}>
                          $ {newPrice }
                         </Typography>
                         </Grid>
                         
                       </CardContent>
                       <Divider />
                       <CardActions disableSpacing>
                         <IconButton
                           aria-label="add to favorites"
                           className={classes.favorite}
                           style={{color:like && "red"}}
                           onClick={()=>{setLike(!like)}}
                         >
                           <FavoriteIcon />
                         </IconButton>
                         <IconButton aria-label="share" style={{color: "#BA55D3"}}>
                           <ShareIcon />
                         </IconButton>
                       </CardActions>
                     </Card>
                   </Grid>
                 );
               })}
             </Grid>
         
        
       );
    
}


export default Todays