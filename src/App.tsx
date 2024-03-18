import logo from './assets/logo-nlw-expert.svg';

export function App() {
 
  return (
    <div className="mx-auto max-w-6xl my-12">
      <img src={logo} />
      <input type="text" className='text-3xl text-slate-500 placeholder-gray-500 bg-slate-900 mt-5 font-bold outline-none' placeholder='Busque em suas notas...' />
      <hr className='mt-5 border-gray-500' />
    </div>

  )
}