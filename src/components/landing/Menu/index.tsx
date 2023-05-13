import { MenuItem } from "./MenuItem"
import {IconBrandGoogle} from '@tabler/icons-react'

export const Menu = ()=>{
  const loginAccountGoogle = ()=>{
    console.log('Logado...');
    
  }
  return(
    <div className="flex gap-2">
      <MenuItem url="#" className="hidden sm:flex">Inicio</MenuItem>
      <MenuItem url="#vantagens" className="hidden sm:flex">Vantagens</MenuItem>
      <MenuItem url="#depoimentos" className="hidden sm:flex">Depoimentos</MenuItem>
      <MenuItem 
      onClick={loginAccountGoogle} 
      className="bg-gradient-to-r from-indigo-500 to-cyan-600">
        <div className="flex gap-2 items-center">
          <IconBrandGoogle size={15}
      />
          <span> Login</span>
        </div>
      
      </MenuItem>


    </div>
  )
}