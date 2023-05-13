import Image from "next/image"
import { ReactNode } from "react"

interface IProps{
  imageUrl:any
  className?:ReactNode
}

export const Images = ({className, imageUrl}:IProps)=>{
  return(
   
     <Image
      src={imageUrl}
      alt='Imagem'
      className={`
        w-[100%] h-[120px]
        sm:w-[200px] sm:h-[330px]
        md:w-[350px] md:h-[365px]
        lg:w-[550px] lg:h-[365px]
        rounded-xl object-cover
        ${className?? ''}
      `}
     />

  
  )
}