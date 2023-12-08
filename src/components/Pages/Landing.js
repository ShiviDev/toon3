import Image from "next/image"

export default function Landing() {
  return (
    <>
      <section className="scroll-smooth " id='intro'>
        <div className='hero flex-row relative flex items-center justify-center h-screen overflow-hidden'>
          <div className='absolute top-0 left-0 h-full w-full h-screen'>
          <Image src="/background.jpg" alt="Background" height="1920" width="2000">
            </Image>
          </div>
          <div className='leading-tight text-center tracking-wider mt-10 font-super z-30 text-yellow-300 bg-opacity-50 rounded-xl' style={{fontSize:"4.3rem"}}>
          <Image src="/title.png" alt="title" height="800" width="800">
            </Image>
            
          </div>
        </div>
      </section >

    </>
  );
}
