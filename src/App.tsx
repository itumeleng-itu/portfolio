import img from '../public/img.jpg'

function App() {
  return (
    <>
      <div className="flex gap-5 bg-black m-6 text-white p-4 rounded-lg">

      {/*profile image, name, quote, socials and like*/}
      <div className="w-[30%] bg-white text-black/80 p-3 rounded-[30px] border">
        <div>
          <img src={img} alt="Profile" className="rounded-[40px] opacity-80" />
        </div>
        <div className='flex gap-5 justify-center text-black text-3xl font-medium p-4 rounded-lg'>
          Matome Tjale
        </div>
      </div>

      {/*tech stack and certificates*/}
      <div className="w-[70%] flex flex-col gap-4">
        <div className="flex gap-5 bg-black text-white  rounded-lg">
          <div className="w-[50%] rounded-md p-6 border">
            aschzbfhk
          </div>
          <div className="w-[50%] rounded-md p-6 border">
            aschzbfhk
          </div>
        </div>

        {/*my projects */}
        <div className="w-full rounded-md p-6 border bg-black">
          aschzbfhk
        </div>
      </div>
    </div>
    </>
  )
}

export default App

