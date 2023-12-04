'use client'
import { motion, useAnimation,useInView } from "framer-motion"
import { useEffect,useRef } from "react";
interface Prop{
    children:string|React.ReactNode,
    width?:'fit-content'|'100%',
    duration?:number,
    delay?:number
}
export function InView({children,width='fit-content',duration=0.4,delay=0}:Prop) {
 const ref =useRef(null)
 const isInView=useInView(ref,{once:false})
 const mainControls=useAnimation()
 useEffect(()=>{
   if(isInView){
    mainControls.start('visible')
   }
   else if(!isInView){
    mainControls.start('hidden')
   }
 },[isInView])
  return (
    <div ref={ref}>
    
    <motion.div className="" 
    variants={{
        hidden:{transform:"rotateX(30deg)",opacity:0,color:'red'},
        visible:{transform:'rotateX(0deg)',opacity:1,color:'black'}

    }}
    initial='hidden'
    animate={mainControls}
    transition={{duration:duration,delay:delay}}
    >{children}</motion.div>  
 
  </div>)
}