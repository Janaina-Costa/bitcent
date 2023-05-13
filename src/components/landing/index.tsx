import { Advantage } from "./advantage"
import { Emphasis } from "./emphasis"
import { Footer } from "./footer"
import { Header } from "./header"
import { Testimony } from "./testimony"

export const Landing = ()=>{
  return(
    <div>
      <Header/>
      <Emphasis/>
      <Advantage/>
      <Testimony/>
      <Footer/>
    </div>
  )
}