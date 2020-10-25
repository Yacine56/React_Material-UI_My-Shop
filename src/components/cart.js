import React from "react"
import Grid from "@material-ui/core/Grid"
import {useStyle} from "./css/cart-csss"
import {connect} from "react-redux"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import * as actions from "../store/actions/store-actions"
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';

import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';




const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });



const Cart =(props)=>{
  const classes=useStyle()
  const [open, setOpen] = React.useState(false);
  const [removeId,setRemoveId]=React.useState("")

  const handleClose = () => {
    setOpen(false);
    setRemoveId("")
  };




const openRemoveDialogue=(id)=>{
    setOpen(true);
    setRemoveId(id)
  
}

const removeItem=()=>{
    props.onRemoveItem(removeId)
    setOpen(false)
}

    return (
        <React.Fragment>
        <Grid container className={classes.container} direction="row" >
         {props.clothes.length===0 ? 
         <Grid item align="center" className={classes.emptySign}>
             <Typography className={classes.emptyText}>
             it looks like your cart is empty, did u Add any items ?
             </Typography>
            
         </Grid>
          :
          (<React.Fragment> 
              <Grid item container xs={12} lg={8} direction="column" spacing={2}>
          {props.clothes.map(item=>{
              return(
                  
                  <Grid item container className={classes.cartItem} >
                      <Grid item xs={12} md={2} >
                      <img src={item.src} alt={item.title} className={classes.img}/>
                      </Grid>
                      <Grid item container direction="column" xs={12} md={10}>
                      <Grid item >
                     <Typography className={classes.title}>
                     {item.title}
                     </Typography>
                 </Grid>
               
                 
                 <Grid item container  align="center" alignItems="center" >
                     
                     <Grid item direction="column" md align="center">
                         <Typography className={classes.infoT}>
                         size
                         </Typography>
                         
                     <Typography className={classes.info}>
                      {item.size}
                      
                      
                  </Typography>
                         </Grid> 
                         <Grid item direction="column" md align="center">
                       
                         <Typography className={classes.infoT}>
                         color
                         </Typography>
                     
                  <Grid item className={classes.colorButton}   >
                                <div style={{backgroundColor:item.color}} className={classes.color} ></div>
                                </Grid>
                    </Grid>
               
                           <Grid item md align="center" direction="column">
                               <Typography className={classes.infoT}>
                                   Quantity
                               </Typography>
                               <Typography className={classes.info}>
                               X {item.quantity}
                               </Typography>
                           </Grid>
                           <Grid item md align="center" direction="column">
                           <Typography className={classes.infoT}>
                                   Price
                               </Typography>
                               <Typography className={classes.info}>
                               $ {item.price}
                               </Typography>
                           </Grid>
                          
                           </Grid>

                           <Grid item align="right" >
                 <Button variant="contained" color="secondary" className={classes.removeButton} onClick={()=>{openRemoveDialogue(item.id)}}>remove</Button>
                     </Grid>

                      </Grid>
                    
                   
                          
 </Grid>
              )
          })}
          </Grid>
          <Grid item container xs={12} lg={4} className={classes.part2}> 
                   <Grid item container direction="column" className={classes.totalContainer}>
                       {props.clothes.map(item=>{
                          
                          return (
                              <React.Fragment>
                               <Grid item container="row" style={{borderBottom:"1px solid black"}}>
                               <Grid item xs={6}>
                                   <Typography className={classes.itemPrice}>
                                    {item.title}
                                   </Typography>
                                   </Grid>
                                   <Grid item xs={6}>
                                   <Typography className={classes.itemPrice} align="right">
                                    {item.price}
                                   </Typography>
                                   </Grid>
                                   </Grid>
                                
                                   </React.Fragment>
                           )
                       })}
                       <Grid item container>
                       <Grid item xs={6}>
                                   <Typography className={classes.itemPrice} style={{color:"#BA55D3",fontWeight:700}}>
                                    TOTAL
                                   </Typography>
                                   </Grid>
                                   <Grid item xs={6}>
                                   <Typography className={classes.itemPrice} align="right">
                                    {props.total}
                                   </Typography>
                                   </Grid>
                       </Grid>
                       <Grid item className={classes.chekoutContainer} alignItems="center">
                       <Button variant="contained" className={classes.checkoutButton} >Proceed To checkout</Button>
                       </Grid>
                   </Grid>
          </Grid></React.Fragment>)}
        </Grid>
        <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        style={{padding:"2em"}}
      >
        <DialogTitle id="alert-dialog-slide-title">{"Do you really want to delete this item ?"}</DialogTitle>
        
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="contained">
            Cancel
          </Button>
          <Button onClick={removeItem} color="primary" variant="contained">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
        </React.Fragment>
    )
}

const mapStateToProps=state=>{
    return{
        clothes:state.clothes,
        total:state.total
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        onRemoveItem:(id)=>{dispatch(actions.removeClothe(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)