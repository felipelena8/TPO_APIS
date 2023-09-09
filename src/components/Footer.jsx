import React from 'react'

export default function Footer() {
  return (
    <footer className='flex flex-col relative bottom-0 w-full justify-center text-center bg-slate-100 mt-8'>
      <div className='flex justify-between w-full px-10 max-sm:flex-col max-sm:gap-4 py-8 border-b-2'>
        <div className="flex flex-col">
          <h4 className='font-bold mb-3 text-lg'>Acerca de nosotros</h4>
          <ul className='flex gap-2 flex-col'>
            <li>¿Quienes somos?</li>
            <li>Nuestros valores</li>
            <li>Como funciona</li>
            <li>Mision y visión</li>
            <li>Materias</li>
            <li>Dar clases particulares</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h4 className='font-bold mb-3 text-lg' >Contacto</h4>
          <ul className='flex gap-2 flex-col'>
            <li>(011) 6708-1366</li>
            <li>0000-0000</li>
            <li>infopagina@gmail.com</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h4 className='font-bold mb-3 text-lg'>Seguinos</h4>
          <ul className='flex gap-2 flex-col'>
            <li>facebook</li>
            <li>instagram</li>
            <li>twitter</li>
            <li>Linkedin</li>
          </ul>
        </div>
      </div>
      <div className='flex px-11 justify-center w-full pt-5 pb-8'>
        <div className='mr-auto'>logo</div>
        <div className='mr-auto'>@2001 lclalallaallidkkk</div>
      </div>
    </footer>
  )
}
