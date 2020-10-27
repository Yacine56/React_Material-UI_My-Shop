import React,{useState} from "react"
import Grid from "@material-ui/core/Grid"
import {useStyle} from "./css/faqs-css"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"



export default function Faqs(){
   const classes =useStyle()
   const [openIndex,setOpenIndex]=useState("")

  const expand=(i)=>{
        if(openIndex===i){
            setOpenIndex("")
        }else{
            setOpenIndex(i)
        }
        
          console.log(openIndex)
  }


let faqs =[{q:"My discount code is not working, what do I do",a:"We are sorry you are having trouble checking out, please note that some discount codes require users to create an account on the site and be logged in upon check out to utilize the discount code"},
    {q:"Where is Clothing Shop Online based",a:"Our office is located in sunny Hermosa Beach, California, just a few steps from the Pacific Ocean and the kind of people who say 'gnarly' (really)."},
    {q:"Where are your products shipped from",a:"We ship from 6 warehouses around the US. With so many shipping centers across the country, we provide some of the fastest, most affordable delivery options in the industry"},
    {q:"How can I pay for my order",a:"Clothing Shop Online currently accepts Visa, MasterCard, Discover, and American Express. We also accept payment via PayPal."},
    {q:"How long will it take me to get my order",a:"For standard shipping, you should receive your order within 4-5 business days"},
    {q:"How can I check the status of my order",a:"We know you can't wait to receive your order, which is why we will be sure to notify you when your order ships via email. You can also see the current status of your order here"},
    {q:"Can I exchange my order",a:"We do not offer exchanges at this time. If you’d like to make an exchange, simply return the unused goods back to us using our returns page and make a new purchase for the item or items you want through our site"},
    {q:"How do I return my order",a:"Returns are accepted for all items within 30 days of purchase. Please visit our returns page to initiate the returns process"},
    {q:"What do I do if my order is damaged",a:"We are so sorry to hear that your order arrived in less than pristine condition! Please let us make it right. Our customer service team will be more than happy to assist with processing a replacement order or issuing a refund. You may contact our customer service team here or through our 'help' button below"},
]
return (
    <Grid container direction="column"  className={classes.container}>
       <Grid item container className={classes.faqsContainer} direction="column">
           {faqs.map((item,i)=>{
               return(
                <Grid item container direction="column" className={classes.questionContainer} style={{maxHeight:i===openIndex && "40em" }}>
                <Grid item container >
                    <Grid item>
                    <Button variant="contained" onClick={()=>expand(i)} className={classes.expandButton}><Typography>+</Typography></Button>
                    </Grid>
                <Grid item >
                <Typography className={classes.question}>{item.q} ?</Typography>
                </Grid>
                
                </Grid>
                <Typography className={classes.answer} >
                  {item.a}
                </Typography>
            </Grid>
            
               )
           })}
          </Grid> 
    </Grid>
)

}