
import React from "react"
import {useStyle} from "./footer-css"
import Grid from "@material-ui/core/Grid"

const Footer =()=>{
   const classes =useStyle()

    return(
        <footer className={classes.container}>
            <Grid container className={classes.iconContainer} spacing={2}>
                <Grid item component={"a"} href="https://www.facebook.com" rel="noopener noreferrer" target="_blank">
                    
                    <img src="images/facebook.svg" alt="facebook" className={classes.icons}/>
                </Grid>

                <Grid item component={"a"} href="https://www.instagram.com" rel="noopener noreferrer" target="_blank">
                   
                    <img src="images/instagram.svg" alt="instagram" className={classes.icons} />
                </Grid>
                <Grid item component={"a"} href="https://www.twitter.com" rel="noopener noreferrer" target="_blank">
                    <img src="images/twitter.svg" alt="twitter" className={classes.icons}/>
                </Grid>

            </Grid>
        </footer>
    )
}


export default Footer