import React from 'react'

export default function Registrate() {
  return (
    <div className='flex justify-center'>
      <div className='flex mx-24 max-lg:mx-8 justify-around max-lg:flex-col gap-20 max-md:gap-3 items-center w-'>
        <div className='font-bold text-6xl max-sm:text-3xl '>
          ¡Da clases! <br/>
          ¡Vivi de lo que te apasiona!
        </div>
        <div className='flex flex-col text-center p-8 justify-between gap-10 rounded-3xl shadow-frame max-lg:w-full'>
          <span className='font-bold text-3xl'>Crea tu perfil</span>
          <form action="" className='flex flex-col gap-2'>
            <div className='flex gap-2'>
              <input type="text" placeholder='Nombre' className='w-full bg-slate-300 placeholder-slate-500 rounded h-12 pl-2' />
              <input type="text" placeholder='Apellido' className='w-full bg-slate-300 placeholder-slate-500 rounded h-12 pl-2' />
            </div>
            <input type="text" placeholder='Numero de telefono' className='bg-slate-300 placeholder-slate-500 rounded h-12 pl-2' />
            <input type="text" placeholder='Correo electronico' className='bg-slate-300 placeholder-slate-500 rounded h-12 pl-2' />
            <input type="text" placeholder='Contraseña' className='bg-slate-300 placeholder-slate-500 rounded h-12 pl-2' />
            <button type="submit" className='mt-5 p-2 bg-red-500 text-white text-lg rounded-xl w-full font-bold'>Empezar ahora</button>
          </form>
        </div>
      </div>
    </div>
  )
}
