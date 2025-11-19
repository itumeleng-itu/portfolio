import img from '../public/img.jpg'

function App() {
  return (
    <>
      <div className="flex gap-5 m-6 text-white p-4 rounded-3xl">

      {/*profile image, name, quote, socials and like*/}
      <div className="w-[30%] bg-white text-black/80 p-3 rounded-[45px] border shadow-lg">
        <div>
          <img src={img} alt="Profile" className="rounded-[35px] opacity-80" />
        </div>
        <div className='ml-2 text-black/80 text-4xl font-bold p-4'>
          <p>Matome Tjale</p>
          <p className='text-black/60 text-lg mt-2 font-medium'><i>less is always more; it's all about simplicity.</i></p>
        </div>

        {/* socials & like*/}
        <div className=' flex ml-2 text-black text-4xl justify-center gap-6 font-bold p-4'>
          <p>
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="50" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/github-01-stroke-sharp.svg?v=1.0.1" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
            <path d="M9.50389 18.9109C9.50389 18.9109 8 18.9109 6.5 16.9117M14.0588 22V17.6759C14.0588 17.3125 13.9506 16.9966 13.7762 16.7112C13.6566 16.5155 13.7385 16.2377 13.9547 16.1763C15.7447 15.6681 17 14.851 17 12.1406C17 11.4359 16.7764 10.7734 16.3834 10.1968C16.1879 9.90984 16.1928 9.9364 16.2746 9.59719C16.4183 9.00067 16.4298 8.37225 16.2692 7.78605C16.2164 7.59335 16.1032 7.48096 15.8983 7.50266C15.6326 7.53081 15.1725 7.65663 14.49 8.09692C14.2219 8.26992 14.0878 8.35642 13.9697 8.37577C13.8516 8.39512 13.6938 8.35459 13.378 8.27353C12.9463 8.16268 12.5014 8.10318 12 8.10318C11.4986 8.10318 11.0537 8.16268 10.622 8.27353C10.3062 8.35459 10.1484 8.39512 10.0303 8.37577C9.9122 8.35642 9.77813 8.26992 9.50999 8.09692C8.82753 7.65663 8.3674 7.53081 8.10166 7.50266C7.8968 7.48096 7.78361 7.59335 7.73081 7.78605C7.57017 8.37225 7.58167 9.00069 7.72543 9.5972C7.80718 9.93642 7.81213 9.90984 7.61654 10.1968C7.22356 10.7734 7 11.4359 7 12.1406C7 14.851 8.25526 15.6681 10.0453 16.1763C10.2615 16.2377 10.3434 16.5155 10.2238 16.7112C10.0494 16.9966 9.94118 17.3125 9.94118 17.6759V22" stroke="#000000" stroke-width="1.5px" fill="none"></path>
            <circle cx="12" cy="12" r="10" stroke="#000000" stroke-width="1.5px" stroke-linejoin="round" fill="none"></circle>
            </svg>
          </p>
          <p>
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="50" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/linkedin-02-stroke-standard.svg?v=1.0.1" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
            <path d="M6.5 9.5H2V22H6.5V9.5Z" stroke="#000000" stroke-width="1.5px" stroke-linejoin="round" fill="none"></path>
            <path d="M6.5 4.25C6.5 5.49264 5.49264 6.5 4.25 6.5C3.00736 6.5 2 5.49264 2 4.25C2 3.00736 3.00736 2 4.25 2C5.49264 2 6.5 3.00736 6.5 4.25Z" stroke="#000000" stroke-width="1.5px" stroke-linejoin="round" fill="none"></path>
            <path d="M14.0001 9.5H9.5V22H14.0001V15.7502C14.0001 14.7837 14.7835 14.0002 15.75 14.0002C16.7165 14.0002 17.5 14.7837 17.5 15.7502V22H21.9987L22.0001 14.0002C22.0001 11.515 19.6364 9.50024 17.2968 9.50024C15.9649 9.50024 14.7767 10.1531 14.0001 11.174V9.5Z" stroke="#000000" stroke-width="1.5px" stroke-linejoin="round" fill="none"></path>
            </svg>
          </p>
        </div>
      </div>

      {/*tech stack and certificates*/}
      <div className="w-[70%] flex flex-col gap-4">
        <div className="flex gap-5 text-white  rounded-lg">
          <div className="w-[50%] rounded-md bg-black p-6 border">
            aschzbfhk
          </div>
          <div className="w-[50%] rounded-md p-6 bg-black border">
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

