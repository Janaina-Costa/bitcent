import { Area } from "../common/Area"
import { Slogan } from "./Slogan"
import imageMain from '../../../../public/main.jpg'
import { Images } from "../common/Images"

export const Emphasis = ()=>{
  return(
    <Area id="inicio" className="pt-20">
      <div className="flex items-center h-[500px] justify-around">
      <Slogan/>
      <Images imageUrl={imageMain} className='rotate-3 hidden md:inline' />
      </div>
    </Area>
  )
}