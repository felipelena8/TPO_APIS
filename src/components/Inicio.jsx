import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Inicio() {
  const goTo = useNavigate()

  const handleCategory = (categoria) => {
    goTo(`/clases/${categoria}`)
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col items-center">
        <span className='font-bold text-3xl text-center mb-12 mt-10 text-coral'>Encontrá y contactá gratis con profesores particulares</span>
        <div className='flex max-md:flex-col  align-middle gap-9 ml-auto mr-auto mb-10'>

          <div className='flex flex-col items-center  w-60'>
            <img src="/images/lupa.png" className='w-32' alt="" />
            <span className='font-bold m-2 text-xl'>Buscá</span>
            <p className='flex text-center'>Somos el mayor portal de profesores particulares de Argentina</p>
          </div>
          <div className='flex flex-col items-center  w-60'>
            <img src="/images/profesor.png" className='w-32 align-middle' alt="" />
            <span className='font-bold m-2 text-xl'>Elegí</span>
            <p className='text-center'>Seleccioná tu profesor perfecto según tus necesidades, su experiencia, precio...</p>
          </div>
          <div className='flex flex-col items-center  w-60'>

            <img src="/images/libro.png" className='h-32' alt="" />

            <span className='font-bold m-2 text-xl'>Aprendé</span>

            <p className='text-center'>Con clases particulares aprendes más rápido, ya que son totalmente personalizadas</p>
          </div>
        </div>

        <span className='font-bold text-2xl text-center mt-16 mb-10 mx-2 text-coral'>Servicios particulares y profesores de apoyo por temática</span>
        <div className='flex flex-wrap gap-4 max-md:mx-auto justify-center md:mx-32 lg:mx-36'>
          <div className='border p-4 flex w-64 align-middle justify-between rounded-2xl hover:bg-coral cursor-pointer hover:text-white transition-all' onClick={() => handleCategory("matemáticas")}>
            <span className='font-semibold align-middle my-auto'>Clases de Matemática</span>

            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 60 60" fill="none">
              <path d="M36.0508 14.0991H54.2508" stroke="#292D32" strokeWidth="3.75" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5.74805 14.1003H23.948" stroke="#292D32" strokeWidth="3.75" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M36.0508 38.3253H54.2508" stroke="#292D32" strokeWidth="3.75" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M36.0508 53.474H54.2508" stroke="#292D32" strokeWidth="3.75" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M45.2227 23.175V5" stroke="#292D32" strokeWidth="3.75" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5.74805 55L23.948 36.825" stroke="#292D32" strokeWidth="3.75" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M23.948 55L5.74805 36.825" stroke="#292D32" strokeWidth="3.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className='border p-4 flex w-64 align-middle justify-between rounded-2xl hover:bg-coral cursor-pointer hover:text-white transition-all' onClick={() => handleCategory("física")} >
            <span className='font-semibold align-middle my-auto'>Clases de Física</span>

            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 60 60" fill="none">
              <g clipPath="url(#clip0_347_197)">
                <path d="M22.8345 10.6707C22.2546 10.6707 21.7846 11.1407 21.7846 11.7205C21.7846 12.3004 22.2546 12.7704 22.8345 12.7704C24.9594 12.7704 26.6883 14.4993 26.6883 16.624C26.6883 18.749 24.9594 20.4778 22.8345 20.4778C20.7095 20.4778 18.9806 18.749 18.9806 16.624C18.9806 15.5945 19.3815 14.6269 20.1094 13.8991C20.5194 13.489 20.5194 12.8242 20.1094 12.4142C19.6993 12.0042 19.0345 12.0041 18.6246 12.4142C17.5001 13.5387 16.8809 15.0337 16.8809 16.6239C16.8809 19.9067 19.5517 22.5775 22.8345 22.5775C26.1172 22.5775 28.788 19.9067 28.788 16.6239C28.7879 13.3415 26.1172 10.6707 22.8345 10.6707Z" fill="black" />
                <path d="M46.9105 34.748C43.6277 34.748 40.957 37.4188 40.957 40.7015C40.957 43.9842 43.6276 46.6551 46.9105 46.6551C50.1934 46.6551 52.864 43.9842 52.864 40.7015C52.8641 37.4187 50.1933 34.748 46.9105 34.748ZM46.9105 44.5552C44.7855 44.5552 43.0569 42.8263 43.0569 40.7013C43.0569 38.5764 44.7858 36.8478 46.9105 36.8478C49.0352 36.8478 50.7641 38.5766 50.7641 40.7013C50.7643 42.8265 49.0355 44.5552 46.9105 44.5552Z" fill="black" />
                <path d="M58.95 5.88677C58.37 5.88677 57.9001 6.35681 57.9001 6.93666V33.5946C57.5052 32.985 57.0604 32.4035 56.5623 31.86C56.1703 31.4324 55.5062 31.4035 55.0788 31.7954C54.6513 32.187 54.6224 32.8511 55.0141 33.2786C56.8751 35.309 57.8999 37.9452 57.8999 40.7013C57.8999 46.7606 52.9703 51.6901 46.9111 51.6901C40.852 51.6901 35.9224 46.7605 35.9224 40.7013C35.9224 34.642 40.852 29.7126 46.9111 29.7126C48.7089 29.7126 50.4219 30.1326 52.0027 30.9606C52.5162 31.2295 53.1509 31.0316 53.4199 30.5178C53.689 30.0042 53.4907 29.3696 52.9772 29.1006C51.1193 28.1272 49.0216 27.6127 46.9112 27.6127C42.3104 27.6127 38.257 29.9993 35.9225 33.5988V16.6241C35.9225 9.40697 30.051 3.53552 22.834 3.53552C15.617 3.53552 9.7452 9.40697 9.7452 16.6241V34.5834C8.19645 34.97 6.975 36.1915 6.5884 37.7402H3.46184C2.94024 37.7402 2.49774 38.1231 2.42285 38.6393L0.0109012 55.264C-0.032927 55.5655 0.0567215 55.8712 0.256057 56.1016C0.455511 56.332 0.745198 56.4644 1.04989 56.4644H20.541C20.8458 56.4644 21.1355 56.332 21.3348 56.1016C21.5341 55.8712 21.6236 55.5655 21.58 55.2638L20.8614 50.3111C20.7781 49.7374 20.2456 49.3404 19.6714 49.423C19.0977 49.5063 18.7 50.0389 18.7833 50.6129L19.3277 54.3649H2.26301L4.37039 39.8401H17.2204L18.1823 46.4702C18.2657 47.044 18.7991 47.4412 19.372 47.3586C19.946 47.2753 20.3435 46.7427 20.2604 46.1689L19.168 38.6396C19.0931 38.1234 18.6506 37.7404 18.129 37.7404H15.0022C14.6156 36.1917 13.3942 34.9702 11.8454 34.5836V23.7267C14.1802 27.3262 18.2336 29.7127 22.8342 29.7127C27.435 29.7127 31.4884 27.3262 33.823 23.7267V40.7015C33.823 47.9186 39.6945 53.7901 46.9114 53.7901C54.1284 53.7901 60 47.9185 60 40.7015V6.93666C59.9999 6.35681 59.53 5.88677 58.95 5.88677ZM12.7684 37.7402H8.82211C9.19887 37.0351 9.9416 36.5539 10.7953 36.5539C11.649 36.554 12.3918 37.0351 12.7684 37.7402ZM22.834 27.6129C16.7747 27.6129 11.8452 22.6833 11.8452 16.6241C11.8452 10.5648 16.7748 5.63529 22.834 5.63529C28.8933 5.63529 33.8228 10.5649 33.8228 16.6241C33.8228 22.6833 28.8932 27.6129 22.834 27.6129Z" fill="black" />
                <path d="M13.3514 43.881H8.23738C7.65754 43.881 7.1875 44.351 7.1875 44.9309C7.1875 45.5107 7.65754 45.9807 8.23738 45.9807H13.3516C13.9314 45.9807 14.4014 45.5107 14.4014 44.9309C14.4014 44.351 13.9313 43.881 13.3514 43.881Z" fill="black" />
                <path d="M13.3514 48.2242H8.23738C7.65754 48.2242 7.1875 48.6942 7.1875 49.2741C7.1875 49.8539 7.65754 50.3239 8.23738 50.3239H13.3516C13.9314 50.3239 14.4014 49.8539 14.4014 49.2741C14.4014 48.6942 13.9313 48.2242 13.3514 48.2242Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_347_197">
                  <rect width="60" height="60" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className='border p-4 flex w-64 align-middle justify-between rounded-2xl hover:bg-coral cursor-pointer hover:text-white transition-all' onClick={() => handleCategory("arte")}>
            <span className='font-semibold align-middle my-auto'>Clases de Arte</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 60 48" fill="none">
              <path d="M30 0C13.6199 0 2.9997e-06 10.5468 2.9997e-06 24V24.006C0.00635349 25.5028 0.18695 26.9978 0.539065 28.465C0.58834 28.6702 0.680365 28.8627 0.809128 29.03C0.93789 29.1972 1.10049 29.3354 1.2863 29.4355C1.47212 29.5356 1.67696 29.5953 1.88745 29.6108C2.09794 29.6264 2.30933 29.5973 2.50782 29.5255C3.00876 29.3454 3.51162 29.1819 4.02539 29.0392C13.7651 26.4308 23.1851 30.9948 25.2949 38.8712C25.8947 41.1314 25.8493 43.5295 25.1543 45.8966C25.0921 46.1081 25.0773 46.3308 25.1109 46.5487C25.1445 46.7666 25.2258 46.9744 25.3489 47.1573C25.4719 47.3402 25.6338 47.4938 25.823 47.607C26.0122 47.7203 26.224 47.7904 26.4434 47.8125C27.6199 47.9315 28.8026 47.9929 29.9883 48H30C46.3801 48 60 37.4532 60 24C60 10.5468 46.3801 0 30 0ZM30 3C45.1001 3 57 12.6004 57 24C57 35.3965 45.106 44.9948 30.0117 45C29.3633 44.9961 28.7183 44.9348 28.0723 44.8945C28.4706 42.6152 28.7746 40.303 28.1895 38.0977C25.5848 28.3739 14.3248 23.188 3.26367 26.1445C3.16488 25.4274 3.00306 24.7155 3 23.9941C3.00404 12.5971 14.9024 3 30 3ZM28.5 6C26.0325 6 24 8.03249 24 10.5C24 12.9675 26.0325 15 28.5 15C30.9675 15 33 12.9675 33 10.5C33 8.03249 30.9675 6 28.5 6ZM16.5 9C14.0325 9 12 11.0325 12 13.5C12 15.9675 14.0325 18 16.5 18C18.9675 18 21 15.9675 21 13.5C21 11.0325 18.9675 9 16.5 9ZM28.5 9C29.3462 9 30 9.6538 30 10.5C30 11.3462 29.3462 12 28.5 12C27.6538 12 27 11.3462 27 10.5C27 9.6538 27.6538 9 28.5 9ZM40.5 9C38.0325 9 36 11.0325 36 13.5C36 15.9675 38.0325 18 40.5 18C42.9675 18 45 15.9675 45 13.5C45 11.0325 42.9675 9 40.5 9ZM16.5 12C17.3462 12 18 12.6538 18 13.5C18 14.3462 17.3462 15 16.5 15C15.6538 15 15 14.3462 15 13.5C15 12.6538 15.6538 12 16.5 12ZM40.5 12C41.3462 12 42 12.6538 42 13.5C42 14.3462 41.3462 15 40.5 15C39.6538 15 39 14.3462 39 13.5C39 12.6538 39.6538 12 40.5 12ZM49.5 18C47.0325 18 45 20.0325 45 22.5C45 24.9675 47.0325 27 49.5 27C51.9675 27 54 24.9675 54 22.5C54 20.0325 51.9675 18 49.5 18ZM49.5 21C50.3462 21 51 21.6538 51 22.5C51 23.3462 50.3462 24 49.5 24C48.6538 24 48 23.3462 48 22.5C48 21.6538 48.6538 21 49.5 21ZM40.5 30C38.0325 30 36 32.0325 36 34.5C36 36.9675 38.0325 39 40.5 39C42.9675 39 45 36.9675 45 34.5C45 32.0325 42.9675 30 40.5 30ZM40.5 33C41.3462 33 42 33.6538 42 34.5C42 35.3462 41.3462 36 40.5 36C39.6538 36 39 35.3462 39 34.5C39 33.6538 39.6538 33 40.5 33Z" fill="#222222" />
            </svg>
          </div>

          <div className='border p-4 flex w-64 align-middle justify-between rounded-2xl hover:bg-coral cursor-pointer hover:text-white transition-all' onClick={() => handleCategory("historia")}>
            <span className='font-semibold align-middle my-auto'>Clases de Historia</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 60 60" fill="none">
              <path d="M54.2446 32.198V42.5166L47.465 40.2568V36.5877C47.465 33.611 45.0519 31.1979 42.0752 31.1979C39.0985 31.1979 36.6854 33.611 36.6854 36.5877C36.6854 46.5022 44.4597 54.6009 54.2446 55.1205V58.8544L24.0527 54.7373V36.5877C24.0527 28.2505 30.8114 21.4918 39.1487 21.4918H43.5385C49.4513 21.4918 54.2446 26.2852 54.2446 32.198Z" fill="white" stroke="black" strokeWidth="2" />
              <path d="M7.46715 18.2968C2.45644 26.9755 1.40691 36.8533 3.75605 45.8389L14.9071 42.1633C14.4356 40.115 14.2217 38.0056 14.2793 35.8875L18.6621 36.6179V36.5877C18.6621 35.0979 18.8233 33.6455 19.1268 32.2452L14.7888 31.5221C15.3143 28.9951 16.2439 26.5073 17.605 24.1499C22.3391 15.9505 31.0359 11.4662 39.8795 11.7189V16.1019H43.5376C43.7829 16.1019 44.0266 16.1083 44.2692 16.1194V12.2402C46.7771 12.7681 49.2454 13.6939 51.5855 15.045L57.4386 4.90721C39.9419 -5.19459 17.5689 0.800021 7.46715 18.2968Z" fill="black" />
            </svg>
          </div>

          <div className='border p-4 flex w-64 align-middle justify-between rounded-2xl hover:bg-coral cursor-pointer hover:text-white transition-all' onClick={() => handleCategory("química")}>
            <span className='font-semibold align-middle my-auto'>Clases de Química</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 57 60" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M28.9974 32C28.9974 33.103 29.8944 34 30.9974 34C32.1004 34 32.9974 33.103 32.9974 32C32.9974 30.897 32.1004 30 30.9974 30C29.8944 30 28.9974 30.897 28.9974 32ZM28.9974 23C28.9974 21.897 28.1004 21 26.9974 21C25.8944 21 24.9974 21.897 24.9974 23C24.9974 24.103 25.8944 25 26.9974 25C28.1004 25 28.9974 24.103 28.9974 23ZM24.9974 36C24.4454 36 23.9974 36.449 23.9974 37C23.9974 37.551 24.4454 38 24.9974 38C25.5494 38 25.9974 37.551 25.9974 37C25.9974 36.449 25.5494 36 24.9974 36ZM24.9974 34C26.6514 34 27.9974 35.346 27.9974 37C27.9974 38.654 26.6514 40 24.9974 40C23.3434 40 21.9974 38.654 21.9974 37C21.9974 35.346 23.3434 34 24.9974 34ZM55.6524 58.206C55.0404 59.363 53.7424 60 51.9974 60H3.99744C1.65644 60 0.710436 58.86 0.355436 58.18C-0.321564 56.885 -0.0225638 55.153 1.17644 53.429L19.1654 26.445C19.1654 26.445 19.9974 25.109 19.9974 23V9C19.9974 8.448 20.4444 8 20.9974 8C21.5504 8 21.9974 8.448 21.9974 9V23C21.9974 25.735 20.8824 27.474 20.8344 27.547L9.70344 44.243C12.9114 44.693 20.7514 45.531 26.7554 44.03C34.9034 41.994 42.9034 43.946 43.2394 44.03C43.7754 44.164 44.1014 44.706 43.9674 45.242C43.8334 45.777 43.2874 46.101 42.7554 45.97C42.6784 45.952 34.8914 44.059 27.2394 45.97C24.4654 46.664 21.3784 46.895 18.5004 46.895C13.9714 46.895 9.95844 46.324 8.47644 46.085L2.82944 54.555C2.07044 55.646 1.81144 56.649 2.12844 57.254C2.46744 57.903 3.44444 58 3.99744 58H51.9974C52.9514 58 53.6404 57.734 53.8844 57.271C54.1934 56.686 53.9274 55.673 53.1714 54.563L35.1654 27.555C35.1174 27.483 33.9974 25.771 33.9974 23V5C33.9974 4.448 34.4444 4 34.9974 4H35.9974V2H19.9974V4H30.9974C31.5504 4 31.9974 4.448 31.9974 5C31.9974 5.552 31.5504 6 30.9974 6H19.9974C18.8944 6 17.9974 5.103 17.9974 4V2C17.9974 0.897 18.8944 0 19.9974 0H35.9974C37.1004 0 37.9974 0.897 37.9974 2V4C37.9974 5.103 37.1004 6 35.9974 6V23C35.9974 25.137 36.8204 26.433 36.8294 26.445L54.8294 53.445C56.0404 55.222 56.3344 56.916 55.6524 58.206Z" fill="black" />
            </svg>
          </div>

          <div className='border p-4 flex w-64 align-middle justify-between rounded-2xl hover:bg-coral cursor-pointer hover:text-white transition-all' onClick={() => handleCategory("inglés")}>
            <span className='font-semibold align-middle my-auto'>Clases de Inglés</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 60 60" fill="none">
              <path d="M15.9071 5.625H13C12.337 5.625 11.7011 5.88839 11.2322 6.35723C10.7634 6.82607 10.5 7.46196 10.5 8.125V51.875C10.5 52.538 10.7634 53.1739 11.2322 53.6428C11.7011 54.1116 12.337 54.375 13 54.375H15.9069" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15.9062 5.625V54.375H46.9991C47.6622 54.375 48.2981 54.1116 48.7669 53.6428C49.2357 53.1739 49.4991 52.538 49.4991 51.875V8.125C49.4991 7.46196 49.2357 6.82607 48.7669 6.35723C48.2981 5.88839 47.6622 5.625 46.9991 5.625H15.9062Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M45.8281 10.3446H19.5781V27.8446H45.8281V10.3446Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M32.7031 10.345V19.095H19.5781" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M32.7031 13.0596H45.8281" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M32.7031 16.0771H45.8281" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M32.7031 19.0946H45.8281" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M19.5781 22.1121H45.8281" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M19.5781 25.1296H45.8281" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className='border p-4 flex w-64 align-middle justify-between rounded-2xl hover:bg-coral cursor-pointer hover:text-white transition-all' onClick={() => handleCategory("economía")}>
            <span className='font-semibold align-middle my-auto'>Clases de Economía</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 60 60" fill="none">
              <path d="M8.52963 17.4303C9.08317 17.4303 9.53191 16.9815 9.53191 16.428C9.53191 15.8745 9.08317 15.4257 8.52963 15.4257C7.97608 15.4257 7.52734 15.8745 7.52734 16.428C7.52734 16.9815 7.97608 17.4303 8.52963 17.4303Z" fill="black" />
              <path d="M18.7276 28.125H16.875C13.6427 28.125 10.5427 29.409 8.25714 31.6946C5.97154 33.9802 4.6875 37.0802 4.6875 40.3125V42.1875C4.68772 44.4167 5.29975 46.603 6.45692 48.5083C7.6141 50.4136 9.27201 51.9648 11.25 52.9927V57.1875H16.875L17.8125 55.3125C18.2101 55.3484 37.5 55.3125 37.5 55.3125L38.4375 57.1875H43.125V53.4375C47.3338 51.7893 50.7248 48.6156 51.5625 44.0625L55.3125 42.1875V35.625H50.625C49.4149 33.1148 47.4474 31.0478 45 29.7155V23.4375C43.4312 23.4133 41.8888 23.8429 40.5582 24.6744C39.2277 25.506 38.1657 26.7042 37.5 28.125H33.7977" stroke="black" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M43.5938 36.5625C44.3704 36.5625 45 35.9329 45 35.1562C45 34.3796 44.3704 33.75 43.5938 33.75C42.8171 33.75 42.1875 34.3796 42.1875 35.1562C42.1875 35.9329 42.8171 36.5625 43.5938 36.5625Z" fill="black" />
              <path d="M15 31.875H37.5" stroke="black" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M26.25 31.875C31.4277 31.875 35.625 27.6777 35.625 22.5C35.625 17.3223 31.4277 13.125 26.25 13.125C21.0723 13.125 16.875 17.3223 16.875 22.5C16.875 27.6777 21.0723 31.875 26.25 31.875Z" stroke="black" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M30 17.8125L22.5 27.1875" stroke="black" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M22.9688 20.625C23.7454 20.625 24.375 19.9954 24.375 19.2188C24.375 18.4421 23.7454 17.8125 22.9688 17.8125C22.1921 17.8125 21.5625 18.4421 21.5625 19.2188C21.5625 19.9954 22.1921 20.625 22.9688 20.625Z" stroke="black" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M29.5312 27.1875C30.3079 27.1875 30.9375 26.5579 30.9375 25.7812C30.9375 25.0046 30.3079 24.375 29.5312 24.375C28.7546 24.375 28.125 25.0046 28.125 25.7812C28.125 26.5579 28.7546 27.1875 29.5312 27.1875Z" stroke="black" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M40.3125 13.125C41.348 13.125 42.1875 12.2855 42.1875 11.25C42.1875 10.2145 41.348 9.375 40.3125 9.375C39.277 9.375 38.4375 10.2145 38.4375 11.25C38.4375 12.2855 39.277 13.125 40.3125 13.125Z" stroke="black" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M27.421 50.6879L32.0301 47.0006C32.3927 46.7235 32.6463 46.3276 32.7465 45.8824C32.8467 45.4371 32.7871 44.9707 32.578 44.565C32.4456 44.3263 32.2627 44.1194 32.0421 43.9586C31.8215 43.7979 31.5684 43.6873 31.3006 43.6344C31.0328 43.5816 30.7567 43.5878 30.4916 43.6527C30.2265 43.7176 29.9787 43.8396 29.7655 44.0101L28.1249 45.3226V37.974C28.1249 37.4767 27.9274 36.9998 27.5757 36.6482C27.2241 36.2965 26.7472 36.099 26.2499 36.099C25.7526 36.099 25.2757 36.2965 24.9241 36.6482C24.5725 36.9998 24.3749 37.4767 24.3749 37.974V45.323L22.8316 44.0883C22.4311 43.7611 21.9185 43.6035 21.4033 43.6492C20.8882 43.6949 20.4113 43.9403 20.0747 44.3329C19.7761 44.7222 19.642 45.2129 19.7012 45.6999C19.7603 46.187 20.008 46.6314 20.391 46.9379L25.0785 50.6879C25.411 50.9539 25.824 51.0987 26.2498 51.0987C26.6755 51.0987 27.0886 50.9539 27.421 50.6879Z" stroke="black" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M46.4531 15.9888L49.2656 18.8013" stroke="black" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M49.2656 15.9888L46.4531 18.8013" stroke="black" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className='border p-4 flex w-64 align-middle justify-between rounded-2xl hover:bg-coral cursor-pointer hover:text-white transition-all' onClick={() => handleCategory("biología")}>
            <span className='font-semibold align-middle my-auto'>Clases de Biología</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 60 60" fill="none">
              <g clipPath="url(#clip0_348_258)">
                <path d="M54.3712 30.9671C54.7718 32.0906 55.8362 32.9025 57.0962 32.9025C58.6968 32.9025 59.9993 31.6 59.9993 29.9994C59.9993 28.3988 58.6968 27.0963 57.0962 27.0963C55.8362 27.0963 54.7718 27.9082 54.3712 29.0317H47.3699C47.2334 26.5718 46.5918 24.2494 45.5351 22.164L49.7127 19.8347C50.1859 20.1424 50.7316 20.3215 51.2939 20.3215C51.7864 20.3215 52.2848 20.1957 52.7406 19.9334C53.4112 19.5463 53.8921 18.9193 54.0925 18.1712C54.2928 17.4222 54.1902 16.6394 53.8021 15.9697C53.4151 15.2972 52.788 14.8172 52.039 14.6159C51.291 14.4146 50.5071 14.5191 49.8375 14.9062C48.6414 15.5981 48.1266 17.0168 48.5214 18.2845L44.5713 20.4869C43.2542 18.4761 41.5356 16.7555 39.5257 15.4365L45.1122 5.7605C45.2341 5.77598 45.3551 5.80791 45.477 5.80791C46.4805 5.80791 47.4589 5.28729 47.9969 4.35733C48.7972 2.97062 48.3201 1.19199 46.9344 0.390736C46.2638 0.00462372 45.4799 -0.101823 44.7319 0.100426C43.9829 0.301707 43.3558 0.781686 42.9688 1.45424C42.5817 2.12485 42.4781 2.90675 42.6784 3.65575C42.8052 4.12799 43.0529 4.54216 43.38 4.88763L37.8467 14.4708C35.7584 13.4111 33.4311 12.7666 30.9664 12.6302V5.62889C32.0918 5.22826 32.9037 4.16379 32.9037 2.90385C32.9037 1.30328 31.6012 0.000752917 30.0006 0.000752917C28.4 0.000752917 27.0975 1.30328 27.0975 2.90385C27.0975 4.16379 27.9094 5.22826 29.0329 5.62889V12.6302C26.5682 12.7666 24.2409 13.4102 22.1526 14.4708L16.6193 4.88763C17.4747 3.978 17.6867 2.58741 17.0315 1.45327C16.6444 0.782654 16.0174 0.301707 15.2693 0.101394C14.5165 -0.0998878 13.7365 0.00462369 13.0678 0.391703C12.3953 0.778783 11.9153 1.40585 11.714 2.15485C11.5137 2.90288 11.6163 3.68575 12.0043 4.35637C12.5404 5.28632 13.5188 5.80695 14.5223 5.80695C14.6442 5.80695 14.7661 5.77501 14.8881 5.75953L20.4746 15.4346C18.4686 16.7507 16.7528 18.4674 15.4368 20.4724L9.37896 16.9752C9.59379 15.8013 9.07703 14.5666 7.98741 13.9366C7.31776 13.5505 6.53586 13.445 5.78492 13.6472C5.03399 13.8485 4.40885 14.3295 4.02081 15.0001C3.22052 16.3858 3.69663 18.1654 5.08237 18.9667H5.08431C5.54009 19.2289 6.03749 19.3538 6.52908 19.3538C7.21325 19.3538 7.87418 19.0954 8.40255 18.6473L14.471 22.1514C13.4114 24.2397 12.7669 26.567 12.6304 29.0317H5.63009C5.22946 27.9082 4.16499 27.0963 2.90505 27.0963C1.30448 27.0963 0.00195312 28.3988 0.00195312 29.9994C0.00195312 31.6 1.30448 32.9025 2.90505 32.9025C4.16499 32.9025 5.22946 32.0906 5.63009 30.9671H12.6314C12.7678 33.4319 13.4114 35.7592 14.472 37.8475L5.4472 43.0576C5.19463 42.894 4.9227 42.7585 4.62368 42.6782C3.87468 42.4769 3.09278 42.5795 2.4212 42.9676C1.03449 43.7688 0.557412 45.5474 1.3577 46.9342C1.89574 47.8641 2.87312 48.3847 3.87759 48.3847C4.36918 48.3847 4.86658 48.2599 5.32236 47.9977H5.3243C6.52424 47.3038 7.03809 45.8765 6.63553 44.6068L15.4348 39.5264C16.7538 41.5363 18.4744 43.255 20.4852 44.572L17.8028 49.3834C16.6735 49.2353 15.5103 49.7598 14.9045 50.8059C14.1042 52.1926 14.5813 53.9713 15.9671 54.7725C16.4151 55.0309 16.9115 55.1625 17.4147 55.1625C17.6663 55.1625 17.9199 55.1296 18.1695 55.0619C18.9185 54.8606 19.5456 54.3806 19.9327 53.708C20.3198 53.0374 20.4233 52.2555 20.223 51.5065C20.0962 51.0343 19.8485 50.6201 19.5214 50.2747L22.1632 45.5358C24.2486 46.5926 26.5711 47.2341 29.031 47.3706V54.3719C27.9075 54.7725 27.0956 55.837 27.0956 57.0969C27.0956 58.6975 28.3981 60 29.9987 60C31.5993 60 32.9018 58.6975 32.9018 57.0969C32.9018 55.837 32.0899 54.7725 30.9664 54.3719V47.3706C33.4311 47.2341 35.7584 46.5906 37.8467 45.53L41.3459 51.5907C40.5737 52.4994 40.4024 53.8271 41.0314 54.9196C41.5695 55.8486 42.5468 56.3692 43.5513 56.3692C44.0439 56.3692 44.5413 56.2444 44.9971 55.9812C45.6686 55.5941 46.1496 54.968 46.3499 54.219C46.5512 53.47 46.4486 52.6881 46.0606 52.0165C45.4306 50.9269 44.1958 50.4101 43.022 50.624L39.5247 44.5662C41.5308 43.2501 43.2465 41.5334 44.5626 39.5284L53.3618 44.6088C52.9593 45.8784 53.4731 47.3057 54.674 47.9996C55.1327 48.2599 55.6311 48.3857 56.1237 48.3857C57.1272 48.3857 58.1055 47.8651 58.6435 46.9351C59.0306 46.2635 59.1342 45.4807 58.9339 44.7326C58.7326 43.9836 58.2526 43.3566 57.58 42.9695C56.9094 42.5824 56.1275 42.4779 55.3785 42.6792C55.0795 42.7595 54.8086 42.895 54.556 43.0585L45.5312 37.8475C46.5899 35.7592 47.2334 33.4319 47.3699 30.9671H54.3712ZM57.0962 29.0317C57.6304 29.0317 58.0639 29.4653 58.0639 29.9994C58.0639 30.5336 57.6304 30.9671 57.0962 30.9671C56.562 30.9671 56.1285 30.5336 56.1285 29.9994C56.1285 29.4653 56.562 29.0317 57.0962 29.0317ZM50.8062 16.5813C50.9552 16.4942 51.1207 16.4507 51.2881 16.4507C51.3723 16.4507 51.4564 16.4623 51.5397 16.4836C51.7903 16.5503 51.9984 16.711 52.1271 16.9365C52.2567 17.159 52.2916 17.4203 52.2248 17.67C52.158 17.9196 51.9984 18.1287 51.7738 18.2564C51.3113 18.5225 50.7171 18.3648 50.452 17.9032C50.1839 17.4406 50.3436 16.8474 50.8062 16.5813ZM44.6467 2.42097V2.41903C44.7764 2.19646 44.9845 2.03582 45.2341 1.96809C45.3174 1.9468 45.4016 1.93518 45.4857 1.93518C45.6532 1.93518 45.8186 1.9797 45.9677 2.06582C46.4302 2.33194 46.5899 2.92611 46.3218 3.38673C46.0557 3.85026 45.4606 4.00703 45 3.74091C44.7764 3.61221 44.6167 3.40318 44.549 3.15448C44.4813 2.90579 44.5171 2.64354 44.6467 2.42097ZM15.0013 3.74188C14.5378 4.00993 13.9446 3.85026 13.6794 3.3877C13.5497 3.16416 13.5159 2.90385 13.5817 2.65418C13.6484 2.40355 13.8091 2.19549 14.0346 2.06679C14.1826 1.9797 14.3481 1.93615 14.5155 1.93615C14.5997 1.93615 14.6848 1.94776 14.7681 1.96905C15.0177 2.03582 15.2268 2.19549 15.3545 2.42C15.6216 2.88256 15.4619 3.47576 15.0013 3.74188ZM7.37292 16.9355C7.10777 17.3971 6.51457 17.5587 6.05104 17.2897C5.58848 17.0226 5.42978 16.4294 5.69783 15.9668C5.8275 15.7442 6.03556 15.5836 6.28425 15.5168C6.53682 15.4501 6.79423 15.4849 7.01874 15.6136C7.4813 15.8797 7.64 16.4729 7.37292 16.9355ZM2.90505 30.9671C2.37088 30.9671 1.93735 30.5336 1.93735 29.9994C1.93735 29.4653 2.37088 29.0317 2.90505 29.0317C3.43922 29.0317 3.87275 29.4653 3.87275 29.9994C3.87275 30.5336 3.43922 30.9671 2.90505 30.9671ZM4.3566 46.3206C3.89307 46.5877 3.29987 46.4271 3.03472 45.9665C2.76764 45.5039 2.92731 44.9107 3.3889 44.6446C3.53793 44.5585 3.7034 44.5139 3.87081 44.5139C3.955 44.5139 4.04016 44.5256 4.12338 44.5478C4.37305 44.6136 4.5811 44.7742 4.70981 44.9988C4.97786 45.4613 4.81916 46.0535 4.3566 46.3206ZM18.2576 52.7394V52.7413C18.1279 52.9639 17.9199 53.1245 17.6702 53.1923C17.4225 53.2571 17.1612 53.2242 16.9367 53.0945C16.4741 52.8284 16.3145 52.2342 16.5825 51.7736C16.7615 51.463 17.0867 51.2898 17.4215 51.2898C17.586 51.2898 17.7525 51.3314 17.9044 51.4194C18.1279 51.5481 18.2876 51.7572 18.3553 52.0059C18.4231 52.2546 18.3873 52.5168 18.2576 52.7394ZM43.0636 52.6271C43.2155 52.5391 43.382 52.4975 43.5465 52.4975C43.8813 52.4975 44.2084 52.6716 44.3864 52.9813C44.5161 53.2048 44.55 53.4661 44.4832 53.7158C44.4174 53.9655 44.2568 54.1735 44.0323 54.3022C43.5697 54.5683 42.9765 54.4096 42.7104 53.95C42.4443 53.4864 42.603 52.8932 43.0636 52.6271ZM55.2914 44.9988C55.4201 44.7752 55.6292 44.6155 55.8779 44.5478C55.9611 44.5265 56.0462 44.5149 56.1304 44.5149C56.2978 44.5149 56.4633 44.5585 56.6114 44.6455H56.6133C56.8359 44.7752 56.9965 44.9833 57.0643 45.2329C57.1301 45.4826 57.0962 45.7429 56.9665 45.9665C56.7014 46.428 56.1062 46.5887 55.6456 46.3206C55.1831 46.0545 55.0234 45.4603 55.2914 44.9988ZM30.0006 1.93615C30.5348 1.93615 30.9683 2.36968 30.9683 2.90385C30.9683 3.43802 30.5348 3.87155 30.0006 3.87155C29.4665 3.87155 29.0329 3.43802 29.0329 2.90385C29.0329 2.36968 29.4665 1.93615 30.0006 1.93615ZM30.9683 57.095C30.9683 57.6292 30.5348 58.0627 30.0006 58.0627C29.4665 58.0627 29.0329 57.6292 29.0329 57.095C29.0329 56.5608 29.4665 56.1273 30.0006 56.1273C30.5348 56.1273 30.9683 56.5608 30.9683 57.095ZM30.0006 45.4826C21.4636 45.4826 14.5174 38.5365 14.5174 29.9994C14.5174 21.4624 21.4636 14.5162 30.0006 14.5162C38.5377 14.5162 45.4838 21.4624 45.4838 29.9994C45.4838 38.5365 38.5377 45.4826 30.0006 45.4826Z" fill="black" />
                <path d="M37.7419 20.3224C35.6071 20.3224 33.8711 22.0585 33.8711 24.1932C33.8711 26.328 35.6071 28.064 37.7419 28.064C39.8766 28.064 41.6127 26.328 41.6127 24.1932C41.6127 22.0585 39.8766 20.3224 37.7419 20.3224ZM37.7419 26.1286C36.6745 26.1286 35.8065 25.2606 35.8065 24.1932C35.8065 23.1259 36.6745 22.2578 37.7419 22.2578C38.8093 22.2578 39.6773 23.1259 39.6773 24.1932C39.6773 25.2606 38.8093 26.1286 37.7419 26.1286Z" fill="black" />
                <path d="M21.2907 29.0317C19.156 29.0317 17.4199 30.7678 17.4199 32.9025C17.4199 35.0373 19.156 36.7733 21.2907 36.7733C23.4255 36.7733 25.1615 35.0373 25.1615 32.9025C25.1615 30.7678 23.4255 29.0317 21.2907 29.0317ZM21.2907 34.8379C20.2233 34.8379 19.3553 33.9699 19.3553 32.9025C19.3553 31.8352 20.2233 30.9671 21.2907 30.9671C22.3581 30.9671 23.2261 31.8352 23.2261 32.9025C23.2261 33.9699 22.3581 34.8379 21.2907 34.8379Z" fill="black" />
                <path d="M25.1629 18.387C23.5623 18.387 22.2598 19.6895 22.2598 21.2901C22.2598 22.8907 23.5623 24.1932 25.1629 24.1932C26.7634 24.1932 28.066 22.8907 28.066 21.2901C28.066 19.6895 26.7634 18.387 25.1629 18.387ZM25.1629 22.2578C24.6287 22.2578 24.1952 21.8243 24.1952 21.2901C24.1952 20.756 24.6287 20.3224 25.1629 20.3224C25.697 20.3224 26.1306 20.756 26.1306 21.2901C26.1306 21.8243 25.697 22.2578 25.1629 22.2578Z" fill="black" />
                <path d="M30.9675 37.741C29.367 37.741 28.0645 39.0436 28.0645 40.6441C28.0645 42.2447 29.367 43.5472 30.9675 43.5472C32.5681 43.5472 33.8706 42.2447 33.8706 40.6441C33.8706 39.0436 32.5681 37.741 30.9675 37.741ZM30.9675 41.6118C30.4334 41.6118 29.9999 41.1783 29.9999 40.6441C29.9999 40.11 30.4334 39.6764 30.9675 39.6764C31.5017 39.6764 31.9352 40.11 31.9352 40.6441C31.9352 41.1783 31.5017 41.6118 30.9675 41.6118Z" fill="black" />
                <path d="M37.7422 32.9025C37.7422 34.5031 39.0447 35.8056 40.6453 35.8056C42.2459 35.8056 43.5484 34.5031 43.5484 32.9025C43.5484 31.302 42.2459 29.9995 40.6453 29.9995C39.0447 29.9995 37.7422 31.302 37.7422 32.9025ZM41.613 32.9025C41.613 33.4367 41.1795 33.8702 40.6453 33.8702C40.1111 33.8702 39.6776 33.4367 39.6776 32.9025C39.6776 32.3684 40.1111 31.9349 40.6453 31.9349C41.1795 31.9349 41.613 32.3684 41.613 32.9025Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_348_258">
                  <rect width="60" height="60" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className='border p-4 flex w-64 align-middle justify-between rounded-2xl hover:bg-coral cursor-pointer hover:text-white transition-all' onClick={() => handleCategory("geografía")}>
            <span className='font-semibold align-middle my-auto'>Clases de Geografía</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 65 65" fill="none">
              <path d="M48.3549 16.5953L45.5416 20.2008C45.4302 20.3391 45.2896 20.4509 45.1297 20.5282C44.9699 20.6055 44.7949 20.6463 44.6174 20.6477H40.758C40.5511 20.644 40.3485 20.5881 40.1689 20.4852L38.7166 19.6422C38.5242 19.5281 38.3029 19.4722 38.0794 19.4812C37.8559 19.4902 37.6398 19.5638 37.4572 19.693L35.2736 21.2571C35.0787 21.3938 34.8465 21.4672 34.6084 21.4672C34.3703 21.4672 34.138 21.3938 33.9431 21.2571L29.5963 18.2813C29.4665 18.1905 29.3564 18.0744 29.2726 17.9401C29.1887 17.8058 29.1328 17.6559 29.1081 17.4995C29.0835 17.3431 29.0906 17.1833 29.1291 17.0297C29.1676 16.8761 29.2367 16.7318 29.3322 16.6055L35.2431 8.97815" stroke="black" strokeWidth="2.8125" strokeMiterlimit="10" strokeLinecap="round" />
              <path d="M34.4391 41.9047C43.7166 41.9047 51.2375 34.3838 51.2375 25.1062C51.2375 15.8287 43.7166 8.3078 34.4391 8.3078C25.1615 8.3078 17.6406 15.8287 17.6406 25.1062C17.6406 34.3838 25.1615 41.9047 34.4391 41.9047Z" stroke="black" strokeWidth="2.8125" strokeMiterlimit="10" strokeLinecap="round" />
              <path d="M49.9387 41.1937C45.796 45.2686 40.2128 47.5444 34.4019 47.5265C28.591 47.5087 23.0219 45.1988 18.9042 41.0986C14.7866 36.9983 12.4532 31.439 12.4107 25.6283C12.3683 19.8175 14.6204 14.2247 18.6777 10.0648" stroke="black" strokeWidth="2.8125" strokeMiterlimit="10" strokeLinecap="round" />
              <path d="M20.4141 34.3586L25.9289 29.6461C26.1242 29.4753 26.3705 29.3738 26.6294 29.3572C26.8883 29.3407 27.1455 29.4101 27.3609 29.5547L29.8188 31.2407C29.983 31.3554 30.1744 31.4251 30.374 31.443C30.5735 31.4608 30.7743 31.426 30.9562 31.3422L34.7141 28.8032C34.903 28.7144 35.1125 28.6789 35.3201 28.7004C35.5276 28.7218 35.7255 28.7995 35.8922 28.925L39.9547 31.2711C40.0788 31.3648 40.1829 31.4823 40.261 31.6167C40.339 31.7512 40.3895 31.8998 40.4093 32.054C40.4292 32.2082 40.4181 32.3648 40.3766 32.5146C40.3352 32.6645 40.2642 32.8045 40.168 32.9266L37.7914 37.05C37.6334 37.2513 37.4136 37.3951 37.1659 37.4593C36.9182 37.5235 36.6562 37.5046 36.4203 37.4055L32.7336 36.3899C32.5655 36.3191 32.3833 36.2887 32.2013 36.301C32.0194 36.3134 31.8429 36.3681 31.686 36.4609C31.529 36.5537 31.3959 36.6819 31.2975 36.8354C31.199 36.9888 31.1378 37.1632 31.1187 37.3446L30.6922 41.4782" stroke="black" strokeWidth="2.8125" strokeMiterlimit="10" strokeLinecap="round" />
              <path d="M46.1094 37.1922L52.5992 43.9664" stroke="black" strokeWidth="2.8125" strokeMiterlimit="10" strokeLinecap="round" />
              <path d="M22.1211 13.6805L15.5703 6.80469" stroke="black" strokeWidth="2.8125" strokeMiterlimit="10" strokeLinecap="round" />
              <path d="M34.4609 47.5312V52.9547" stroke="black" strokeWidth="2.8125" strokeMiterlimit="10" strokeLinecap="round" />
              <path d="M41.7633 58.1953H26.7422C26.552 58.196 26.3646 58.1499 26.1964 58.0609C26.0283 57.972 25.8847 57.843 25.7783 57.6854C25.6719 57.5278 25.6059 57.3464 25.5863 57.1572C25.5666 56.968 25.5939 56.7769 25.6656 56.6008L28.2148 53.686C28.3044 53.471 28.4551 53.2871 28.6483 53.1571C28.8415 53.0271 29.0687 52.9567 29.3015 52.9547H39.214C39.4458 52.956 39.6719 53.0263 39.8636 53.1565C40.0553 53.2867 40.204 53.471 40.2906 53.686L42.85 56.6008C42.9194 56.7778 42.9446 56.9691 42.9233 57.1581C42.902 57.3471 42.8349 57.528 42.7278 57.6851C42.6207 57.8423 42.4769 57.9709 42.3088 58.0598C42.1407 58.1487 41.9534 58.1952 41.7633 58.1953Z" stroke="black" strokeWidth="2.8125" strokeMiterlimit="10" strokeLinecap="round" />
            </svg>
          </div>
          <div className='border p-4 flex w-64 align-middle justify-between rounded-2xl hover:bg-coral cursor-pointer hover:text-white transition-all' onClick={() => handleCategory("música")} >
            <span className='font-semibold align-middle my-auto'>Clases de Música</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50" fill="none">
              <path d="M17.5 42.5C17.5 45.2615 14.1421 47.5 10 47.5C5.85788 47.5 2.5 45.2615 2.5 42.5C2.5 39.7385 5.85788 37.5 10 37.5C14.1421 37.5 17.5 39.7385 17.5 42.5ZM17.5 42.5V7.5L47.5 2.5V37.5M47.5 37.5C47.5 40.2615 44.1423 42.5 40 42.5C35.8577 42.5 32.5 40.2615 32.5 37.5C32.5 34.7385 35.8577 32.5 40 32.5C44.1423 32.5 47.5 34.7385 47.5 37.5ZM17.5 17.5L47.5 12.5" stroke="black" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

        </div>
      </div>
    </div >
  )
}
