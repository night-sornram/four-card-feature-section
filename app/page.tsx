import Image from 'next/image'



export default function Home() {
  return (
    <div className=' w-screen h-screen flex flex-col justify-start items-center'>
      <div className=' w-11/12 md:w-2/3 mt-10  text-center '>
        <div className='text-3xl md:text-5xl font-extralight text-custom-100 mt-5'>Reliable, efficient delivery</div>
        <div className='text-3xl md:text-5xl  text-custom-100 font-bold mt-5'>Powered by Technology</div>
        <div className='text-base mt-5 mx-0 md:mx-24 md:text-lg text-custom-200'> Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</div>
      </div>
      <div className=' md:mw-11/12 lg:mw-10/12 md:pb-0 pb-20 flex flex-col md:flex-row m-10 justify-center items-center'>
        <div className=' h-72 w-full md:w-1/3 relative p-8 rounded-lg border-solid border-t-4 shadow-xl border-c-100'>
          <div className=' text-lg text-custom-100 font-bold'>
            Supervisor
          </div>
          <div className=' text-custom-200'>
            Monitors activity to identify project roadblocks
          </div>
          <img src="/images/icon-supervisor.svg" alt="supervisor" width={64} height={64} className=' absolute bottom-10 right-10' />
        </div>
        <div className=' flex flex-col w-full md:w-1/3 mx-0 md:mx-10'>
          <div className='h-72 mt-10 md:mt-0 relative p-8 rounded-lg border-solid border-t-4 shadow-xl border-r-100'>
            <div className=' text-lg text-custom-100 font-bold'>
              Team Builder
            </div>
            <div className=' text-custom-200'>
              Scans our talent network to create the optimal team for your project
            </div>
            <img src="/images/icon-team-builder.svg" alt="team-builder" width={64} height={64} className=' absolute bottom-10 right-10' />
          </div>
          <div className='h-72 relative p-8 mt-10 rounded-lg border-solid border-t-4 shadow-xl border-o-100' >
            <div className=' text-lg text-custom-100 font-bold'>
              Karma
            </div>
            <div className=' text-custom-200'>
              Regularly evaluates our talent to ensure quality
            </div>
            <img src="/images/icon-karma.svg" alt="karma" width={64} height={64} className=' absolute bottom-10 right-10' />
        </div>
        </div>
        <div className='h-72 w-full mt-10 md:mt-0 md:w-1/3 relative p-8 rounded-lg border-solid border-t-4 shadow-xl border-b-100' >
          <div className=' text-lg text-custom-100 font-bold'>
            Calculator
          </div>
          <div className=' text-custom-200'>
            Uses data from past projects to provide better delivery estimates
          </div>
          <img src="/images/icon-calculator.svg" alt="calculator" width={64} height={64} className=' absolute bottom-10 right-10' />
        </div>
      </div>
    </div>
     )}
   