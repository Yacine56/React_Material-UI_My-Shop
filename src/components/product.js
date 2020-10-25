import React,{useState,useEffect} from "react"
import Grid from "@material-ui/core/Grid"
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {useStyle} from "./css/product-css"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import {connect} from 'react-redux'
import * as actions from "../store/actions/store-actions"
import {Link} from "react-router-dom"
import { useLocation } from "react-router-dom"



function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }


const Product=(props)=>{
    let data={
    id:0,
    title:"Heavy Tech Parka With Faux Fur Lined Hood",
    date_created:new Date().toISOString().split("T")[0],
    img1:"/images/pic2_1.jpg",
    img2:"/images/pic2_2.jpg",
    description:"2 front pockets, 1 interior pocket, faux fur lined hood, elastic cuffs",
    price:39.99,
    liked:false,
    size:["S","M","XL"],
    color:["#556B2F","grey","#FAF0E6"]
}
    const location=useLocation()
    const classes =useStyle()
    const drop=location.state.drop
    const [imgSrc,setImgsrc]=useState(data.img1)
    const [quantity,setQuantity]=useState(1)
    const [price,setPrice]=useState(((data.price-data.price*drop)*quantity).toFixed(2))
    const [sizes,setSize]=useState("")
    const [color,setColor]=useState("")
    const [openSnack,setOpenSnack]=useState(false)


useEffect(()=>{
    data.id=Math.random()*100
   
},[data])


const imageChange=(src)=>{
    setImgsrc(src)
}

const quantityChange=(event)=>{
      if(event.currentTarget.value==="+"){
          
        setQuantity(quantity+1)

        setPrice((data.price*(quantity+1)).toFixed(2))
        
      }else{
        setQuantity(quantity-1)
        setPrice((data.price*(quantity-1)).toFixed(2))
      }
}

const changeSize=(event,size)=>{
   
    setSize(size)
}

const changeColor=(color)=>{
    
    setColor(color)
}

const addClothe=()=>{
    props.onAddClothes({id:data.id,title:data.title,price,quantity,size:sizes,color,src:data.img1,description:data.description})
    console.log(data.id)
    setOpenSnack(true)
   
}


 const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnack(false);
  };

 return (
     <Grid container className={classes.container}>
         <Snackbar open={openSnack} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Added to cart successefully!
        </Alert>
      </Snackbar>
            <Grid item md>
              <Grid container direction="row">
                  <Grid item container direction="column" md={3} xs={6}>
                      <Grid item >
                      <img src={data.img1} alt="1" className={classes.img}  onMouseOver={()=>{imageChange(data.img1)}}/>
                      </Grid>
                      <Grid item >
                      <img src={data.img2} alt="1" className={classes.img} onMouseOver={()=>{imageChange(data.img2)}}/>
                      </Grid>
                  </Grid>
                  <Grid item md={9} xs={6}>
                  <img src={imgSrc} alt="1" className={classes.mainImg} />
                  </Grid>
                  </Grid> 
            </Grid>
            <Grid item container md direction="column" className={classes.part2}>
                 <Grid item >
                     <Typography className={classes.title}>
                     {data.title}
                     </Typography>
                 </Grid>
                 <Grid item>
                 <Typography className={classes.date}>
                     {data.date_created}
                 </Typography>
                 </Grid>
                 <Grid item container direction="column">
                     <Typography className={classes.descriptionT}>
                         Description :
                     </Typography>
                     <Typography className={classes.description}>
                         {data.description}
                     </Typography>
                 </Grid>
                 <Grid item container spacing={2}>
                     <ToggleButtonGroup  value={sizes} exclusive onChange={changeSize} size="medium">
                     {data.size.map(size=>{
                        
                  return(
                      
                     <ToggleButton key={size} value={size} className={classes.sizeButton} style={{backgroundColor:size===sizes && "#BA55D3" }} arial-label={size}><Typography className={classes.sizeText} style={{color:size===sizes && "white"}}>{size}</Typography></ToggleButton>
               )
              })} 
                     </ToggleButtonGroup>
             
                   </Grid>
                   <Grid item container spacing={2}>
                   {data.color.map((colors,index)=>{
                       return(
                           <Grid item key={colors} className={classes.colorButton} style={{borderColor:colors ===color && "#BA55D3" }}  onClick={()=>{changeColor(colors)}}>
                               <div style={{backgroundColor:colors}} className={classes.color} ></div>
                               </Grid>
                       )
                   })

                   }
             
                   </Grid>

                 <Grid item container spacing={2}>
                     <Grid item>
                         <Button className={classes.quantityButton} onClick={quantityChange} disabled={quantity===1}>
                         -
                         </Button>
                     </Grid>
                     <Grid item>
                         <TextField value={quantity} variant="outlined" label="Quantity" className={classes.quantity} />
                      </Grid>
                     <Grid item>
                         <Button className={classes.quantityButton} value="+" onClick={quantityChange}>
                              +
                        </Button>
                     </Grid>
                  </Grid>
                <Grid item container direction="column"> 
                <Typography className={classes.priceT}>
                         Your Price :
                     </Typography>
                    <Typography className={classes.price} style={drop!==0 ? {color:"red"}: {}}>
                       $ {price}
                    </Typography>
                </Grid>
                <Grid item align="center">
                    <Button variant="contained" className={classes.button} onClick={()=>{addClothe(data.id)}} disabled={!color || !sizes}>Add to cart</Button>
                    <Button variant="contained" className={classes.button}  component={Link} to="/cart"  >Go to cart</Button>
                   
                </Grid>
            </Grid>
     </Grid>
 )

}

const mapStateToProps= State =>{
    return{
        clothes:State.clothes,
         total:State.total
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        onAddClothes:(clothe)=>{dispatch(actions.addClothe(clothe))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product)