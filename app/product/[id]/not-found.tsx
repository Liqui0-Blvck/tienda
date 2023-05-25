import Link from 'next/link'

const NotFound = () => {
  return (
    <div className='relative top-40 flex flex-col items-center justify-center'>
      <h2 className='text-6xl font-bold'>NOT FOUND</h2>
      <p className='text-3xl '>El objeto que busca no esta disponible</p>
      <Link href='/' className='button mt-8 bg-slate-300'>
        Volver a la pagina principal
      </Link>
    </div>
  )
}

export default NotFound