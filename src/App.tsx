import img from '../public/img.jpg'
import javascriptIcon from '../public/javascript.svg'
import typescriptIcon from '../public/typescript.svg'
import javaIcon from '../public/java.svg'
import nodejsIcon from '../public/nodejs.svg'
import reactjsIcon from '../public/reactjs.svg'
import tailwindcssIcon from '../public/tailwindcss.svg'
import postgresqlIcon from '../public/postgresql.svg'
import figmaIcon from '../public/figma.svg'
import mySqlIcon from '../public/mysql.svg'
import supabase from '../public/supabase.svg'
import git from '../public/git.svg'
import github from '../public/github-dark.svg'

const techStack = [
  { name: 'JavaScript', icon: javascriptIcon },
  { name: 'TypeScript', icon: typescriptIcon },
  { name: 'Java', icon: javaIcon },
  { name: 'Node.js', icon: nodejsIcon },
  { name: 'React', icon: reactjsIcon },
  { name: 'Tailwind CSS', icon: tailwindcssIcon },
  { name: 'PostgreSQL', icon: postgresqlIcon },
  { name: 'Figma', icon: figmaIcon },
  { name: 'MySQL', icon: mySqlIcon},
  { name: 'supabase', icon: supabase},
  {name: 'git', icon:git},
  {name: 'github', icon:github},
  

]

function App() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-3 md:gap-5 m-3 md:m-6 text-white p-2 md:p-4 rounded-3xl h-[calc(100vh-1.5rem)] md:h-[calc(100vh-3rem)] overflow-hidden">

      {/*profile image, name, quote, socials and like*/}
      <div className="w-full md:w-[30%] bg-white text-black/80 p-2 md:p-3 rounded-2xl md:rounded-[45px] border shadow-lg">
        <div>
          <img src={img} alt="Profile" className="w-full rounded-2xl md:rounded-[35px] opacity-80" />
        </div>
        <div className='ml-1 md:ml-2 text-black/80 text-xl md:text-2xl font-bold p-2 md:p-3'>
          <p>Matome Tjale</p>
          <p className='text-black/60 text-xs md:text-sm mt-1 md:mt-2 font-medium'><i>less is always more; it's all about simplicity.</i></p>
        </div>

        {/* socials & like*/}
        <div className='flex ml-1 md:ml-2 text-black gap-3 md:gap-4 font-bold p-2 md:p-3 justify-center md:justify-start'>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:opacity-70 transition-opacity cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.open('https://github.com', '_blank', 'noopener,noreferrer');
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" className="md:w-[32px] md:h-[32px]" role="img">
              <path d="M9.50389 18.9109C9.50389 18.9109 8 18.9109 6.5 16.9117M14.0588 22V17.6759C14.0588 17.3125 13.9506 16.9966 13.7762 16.7112C13.6566 16.5155 13.7385 16.2377 13.9547 16.1763C15.7447 15.6681 17 14.851 17 12.1406C17 11.4359 16.7764 10.7734 16.3834 10.1968C16.1879 9.90984 16.1928 9.9364 16.2746 9.59719C16.4183 9.00067 16.4298 8.37225 16.2692 7.78605C16.2164 7.59335 16.1032 7.48096 15.8983 7.50266C15.6326 7.53081 15.1725 7.65663 14.49 8.09692C14.2219 8.26992 14.0878 8.35642 13.9697 8.37577C13.8516 8.39512 13.6938 8.35459 13.378 8.27353C12.9463 8.16268 12.5014 8.10318 12 8.10318C11.4986 8.10318 11.0537 8.16268 10.622 8.27353C10.3062 8.35459 10.1484 8.39512 10.0303 8.37577C9.9122 8.35642 9.77813 8.26992 9.50999 8.09692C8.82753 7.65663 8.3674 7.53081 8.10166 7.50266C7.8968 7.48096 7.78361 7.59335 7.73081 7.78605C7.57017 8.37225 7.58167 9.00069 7.72543 9.5972C7.80718 9.93642 7.81213 9.90984 7.61654 10.1968C7.22356 10.7734 7 11.4359 7 12.1406C7 14.851 8.25526 15.6681 10.0453 16.1763C10.2615 16.2377 10.3434 16.5155 10.2238 16.7112C10.0494 16.9966 9.94118 17.3125 9.94118 17.6759V22" stroke="#000000" strokeWidth="1.5px" fill="none"></path>
              <circle cx="12" cy="12" r="10" stroke="#000000" strokeWidth="1.5px" strokeLinejoin="round" fill="none"></circle>
            </svg>
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:opacity-70 transition-opacity cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.open('https://linkedin.com', '_blank', 'noopener,noreferrer');
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" className="md:w-[32px] md:h-[32px]" role="img">
              <path d="M6.5 9.5H2V22H6.5V9.5Z" stroke="#000000" strokeWidth="1.5px" strokeLinejoin="round" fill="none"></path>
              <path d="M6.5 4.25C6.5 5.49264 5.49264 6.5 4.25 6.5C3.00736 6.5 2 5.49264 2 4.25C2 3.00736 3.00736 2 4.25 2C5.49264 2 6.5 3.00736 6.5 4.25Z" stroke="#000000" strokeWidth="1.5px" strokeLinejoin="round" fill="none"></path>
              <path d="M14.0001 9.5H9.5V22H14.0001V15.7502C14.0001 14.7837 14.7835 14.0002 15.75 14.0002C16.7165 14.0002 17.5 14.7837 17.5 15.7502V22H21.9987L22.0001 14.0002C22.0001 11.515 19.6364 9.50024 17.2968 9.50024C15.9649 9.50024 14.7767 10.1531 14.0001 11.174V9.5Z" stroke="#000000" strokeWidth="1.5px" strokeLinejoin="round" fill="none"></path>
            </svg>
          </a>
        </div>
      </div>

      {/*tech stack and certificates*/}
      <div className="w-full md:w-[70%] flex flex-col gap-3 md:gap-4 h-full">
        <div className="flex flex-col md:flex-row gap-3 md:gap-5 text-black rounded-lg flex-1 min-h-0">
          {/* Left column: Tech Stack and Projects */}
          <div className="w-full md:w-[50%] flex flex-col gap-3 md:gap-4 min-h-0">
            {/*tech stack*/}
            <div className="gap-2 md:gap-3 font-medium rounded-[30px] bg-white shadow-lg p-3 md:p-4 border flex-shrink-0">
              <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-black/80">Tech Stack</h2>
              <div className="grid grid-cols-3 gap-2 md:gap-3">
                {techStack.map((tech, index) => (
                  <div key={index} className="flex flex-col items-center gap-1 p-1.5 rounded-lg hover:bg-gray-50 transition-colors">
                    <img 
                      src={tech.icon} 
                      alt={tech.name} 
                      className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0" 
                    />
                    <span className="text-xs md:text-sm text-black/80 font-medium capitalize text-center leading-tight">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/*my projects */}
            <div className="w-full rounded-[30px] bg-white shadow-lg p-3 md:p-4 border flex-1 min-h-0 overflow-y-auto">
              <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-black/80">Projects</h2>
              <div className="text-black/70">
                {/* Projects content will go here */}
              </div>
            </div>
          </div>

          {/* Right column: Experience Timeline */}
          <div className="w-full md:w-[50%] gap-2 md:gap-3 font-medium rounded-[30px] bg-white shadow-lg p-3 md:p-4 border flex flex-col min-h-0">
            <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-black/80">Experience Timeline</h2>
            <div className="space-y-3 md:space-y-4 overflow-y-auto flex-1 pr-2">
              {/* Tshwane University of Technology */}
              <div className="relative pl-5 md:pl-6 border-l-2 border-gray-300">
                <div className="absolute -left-1.5 top-0 w-3 h-3 bg-black rounded-full"></div>
                <div className="mb-1.5">
                  <h3 className="text-sm md:text-base font-bold text-black/90">Student</h3>
                  <p className="text-xs text-black/60 font-medium">Tshwane University of Technology</p>
                  <p className="text-xs text-black/50">February 2022 - November 2025</p>
                </div>
                <p className="text-xs md:text-sm text-black/70 leading-relaxed">
                  Completed a Diploma in Computer Sciences (Extended Curriculum) with a strong focus on Java, MySQL, PL/SQL, HTML, and CSS. Learned object-oriented programming, database design, and web development fundamentals. Achieved best second-year student with an average of 75% or higher.
                </p>
              </div>

              {/* mLab Trainee */}
              <div className="relative pl-5 md:pl-6 border-l-2 border-gray-300">
                <div className="absolute -left-1.5 top-0 w-3 h-3 bg-black rounded-full"></div>
                <div className="mb-1.5">
                  <h3 className="text-sm md:text-base font-bold text-black/90">Trainee</h3>
                  <p className="text-xs text-black/60 font-medium">mLab</p>
                  <p className="text-xs text-black/50">July 2025 - March 2026</p>
                </div>
                <p className="text-xs md:text-sm text-black/70 leading-relaxed">
                  Software Development trainee under the QCTO program. Applied and expanded my technical skills on real-world projects, collaborated with experienced developers, and learned industry best practices and the software development lifecycle.
                </p>
              </div>

              {/* Hackathon Achievement */}
              <div className="relative pl-5 md:pl-6 border-l-2 border-gray-300">
                <div className="absolute -left-1.5 top-0 w-3 h-3 bg-black rounded-full"></div>
                <div className="mb-1.5">
                  <h3 className="text-sm md:text-base font-bold text-black/90">Hackathon Winner</h3>
                  <p className="text-xs text-black/60 font-medium">Limpopo Varsity Hackathon</p>
                  <p className="text-xs text-black/50">October 2025</p>
                </div>
                <p className="text-xs md:text-sm text-black/70 leading-relaxed">
                  Secured 3rd place in the competition. Developed problem-solving skills under pressure, worked effectively in a team, and learned the importance of time management and creative thinking in competitive environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App

