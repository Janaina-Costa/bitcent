import Link from "next/link"
import { ReactNode } from "react"

interface IProps{
  children:ReactNode
  url?:string
  onClick?:()=>void
  className?:string
}

export const MenuItem = ({children, className, onClick,url}:IProps)=>{

  const showButton= ()=>{
    return(
      <div className={`
        flex justify-center items-center cursor-pointer
        text-zinc-300 m-2 p-4 rounded-md h-9
        ${className}
      `}
        onClick={onClick}
      >
        {children}
      </div>
    )
  }

  return url? (
    <Link href={url?? ''}>{showButton()} </Link>
  ): showButton()
}