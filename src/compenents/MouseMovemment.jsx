import { useEffect, useState } from "react"


const MouseMovemment = () => {
    const [height , setHeight] = useState(0)
    const [width , setWidth] = useState(0)

    const handleMouseMove = (e)=>{
        setHeight(e.clientY)
        setWidth(e.clientX)
        
        
    }
    useEffect(()=>{
        window.addEventListener('mousemove' ,handleMouseMove)
        return () =>{
                removeEventListener('mousemove' ,handleMouseMove )
        }
    },[])

  return {height , width}
}
export default MouseMovemment