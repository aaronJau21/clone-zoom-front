import Header from './components/Header'
import './home.css'

const HomePage = () => {
    return (
        <div className="bg-home h-[100vh] text-white">
            <Header />

            <div className='flex justify-center mt-10 '>
                <div className='bg-blue-300 w-[30rem] h-64 p-1 rounded'>
                    <div className='bg-white text-black rounded px-4 py-5'>
                        <div className='flex gap-7'>
                            <p>9 de may. de 2024 <br /> 11:00</p>
                            <p>prueba 54 <br />00:00</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomePage