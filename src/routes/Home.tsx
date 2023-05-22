import { Link } from 'react-router-dom'

function Home() {

  return (
    <main className="bg-[#faedcd] h-screen w-screen flex justify-center items-center flex-col gap-10">
        <section className="w-80">
            <img className="object-fit" src="/logo.png" alt="logo-png" />
        </section>
        
        <button className="bg-blue-500 text-white font-medium shadow-xl delay-150 transition hover:scale-110 hover:bg-indigo-500 w-40 h-10 rounded">
            <Link to={"/menu"} className='block'>MENU</Link>
        </button>

        <button className="bg-blue-500 text-white font-medium shadow-xl delay-150 transition hover:scale-110 hover:bg-indigo-500 w-40 h-10 rounded">
            <a href="https://facebook.com" target="_blank" className='block'>INSTAGRAM</a>
        </button>

        <button className="bg-blue-500 text-white font-medium shadow-xl delay-150 transition hover:scale-110 hover:bg-indigo-500 w-40 h-10 rounded">
            <a href="https://discord.com" target="_blank" className='block'>DISCORD</a>
        </button>
    </main>
  )
}

export default Home;