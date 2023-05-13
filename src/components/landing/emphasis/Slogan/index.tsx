import { IconArrowRight, IconMovieOff, IconVideo } from "@tabler/icons-react"


export const Slogan = ()=>{
  const renderPhrase = ()=>{
    return(
      <div className="
        flex flex-col items-center md:items-start text-4xl lg:text-6xl
        text-white font-light
      ">
        <div className="flex gap-2.5">
          <div className="relative">
            <span className="
              absolute bottom-1 left-0 w-full
              border-b-8 border-b-purple-500
              -rotate-2
            "></span>
            <span className="relative">Melhor</span>
          </div>
          <div>maneira</div>
        </div>
  
        <div className="flex gap-2.5">
          <span>de</span>
          <span>organizar</span>
        </div>
        <div className="flex gap-2.5">
          <span>seu</span>
          <span className="flex items-center p-1
                      relative text-black
          ">
            <span className="absolute -rotate-1 top-0.5 left-0 w-full h-5/6 bg-yellow-300 rounded-sm"></span>
              <span className="relative rotate-2 z-20">dinheiro</span>
          </span>
        </div>
  
      </div>
    )
  }
  return(
    <div className="flex flex-col justify-center gap-5">
      {renderPhrase()}

    <div className="text-sm lg:text-lg font-thin">
      Plataforma financeira que simplifica sua vida
    </div>

    <div className="flex justify-center sm:justify-normal gap-2">
      <div className="flex items-center gap-2 cursor-pointer text-white px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-cyan-600">
        <span className="font-thin md:text-start">
          Iniciar 
        <span className="hiden sm:inline">
          Agora
        </span> 
        </span>
        <IconArrowRight stroke={1} className='hidden lg:inline'/>

        
      </div>

      <div className="flex items-center gap-2 cursor-pointer text-white px-5 py-2.5 ">
        <IconVideo stroke={1} className='hidden lg:inline'/>
        <span className="font-thin md:text-start">
          Assista o video
        </span>

        
      </div>

      
      
    </div>

    </div>
  )
}