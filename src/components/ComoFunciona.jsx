import React from 'react'

export default function ComoFunciona() {
    return (
        <main className="flex flex-col">
            <div className="flex flex-col mx-40 ">
                <span className='text-5xl font-normal mb-6'>Nunca <br />
                fue tan fácil aprender</span>
            </div>
            <div className='flex flex-col items-center justify-center mx-56 self-center'>
                <div className='flex items-center w-full justify-between '>
                    <div className=''>
                        <h3  className='text-4xl font-medium'>1. Buscá</h3>
                        <p className='w-72'>Buscá con toda libertad entre varios perfiles y contactá al  profesor que más se acerque a tus necesidades (tarifas, preparación, opiniones, el más cercano o en línea)</p>
                    </div>
                    <div className='bg-red-700 h-80 w-80 rounded'></div>
                </div>
                <div className='flex flex-row-reverse items-center w-full justify-between'>
                    <div className=''>
                        <h3  className='text-4xl font-medium'>2. Contactalo</h3>
                        <p className='w-72'>Rápidamente, nuestros profesores te responderán en unas cuantas horas. Y si no encontrás al profe indicado, nos encargamos de ayudarte.</p>
                    </div>
                    <div className='bg-red-700 h-80 w-80 rounded'></div>
                </div>
                <div className='flex items-center w-full justify-between'>
                    <div className=''>
                        <h3 className='text-4xl font-medium'>3. Pónganse de acuerdo</h3>
                        <p className='w-72'>Intercambien algún mensaje sobre la clase en nuestra mensajería y acuerden la clase juntos.</p>
                    </div>
                    <div className='bg-red-700 h-80 w-80 rounded'></div>
                </div>
            </div>
        </main>
    )
}
