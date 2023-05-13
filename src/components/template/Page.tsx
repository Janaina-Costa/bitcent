import { ReactNode } from "react"

interface IProps{
  exteral?:boolean,
  children:ReactNode,
  clasName?:string
}


export const Page =({children, clasName, exteral}:IProps)=>{
  return(
    <div className={`
          flex, flex-col min-h-screen
          bg-gradient-to-r from-zinc-900 via-black to-zinc-900
          ${clasName?? ''}
        `}
    >
      {children}
    </div>
  )
}