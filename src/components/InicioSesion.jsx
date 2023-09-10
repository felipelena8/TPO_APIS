import React from 'react'

export default function InicioSesion() {
  return (
    <div className='flex justify-center'>
      <div className='w-5/12 max-lg:w-5/6 justify-center shadow-frame rounded-3xl flex flex-col items-center'>
        <div className='font-bold text-2xl text-center p-8' >Iniciar sesion</div>
        <div className='flex flex-col max-md:w-9/12 w-4/5 items-center gap-2 mb-14'>
          <input type="text" placeholder='Correo electronico' className='bg-slate-300 placeholder-slate-500 rounded h-10 w-full pl-2' />
          <input type="text" placeholder='Contraseña' className='bg-slate-300 placeholder-slate-500 rounded h-10 w-full pl-2' />
          <div className='flex self-start gap-2'><input type="checkbox" name="sesion" id="" /><span>Mantener mi sesion iniciada</span></div>
          <button type="submit" className='my-3 p-2 bg-red-500 text-white text-lg rounded-xl w-full font-bold'>Entrar</button>
          <span className='font-bold text-lg text-blue-600'>¿Has olvidado tu constraseña?</span>
        </div>

      </div>
    </div>
  )
}
