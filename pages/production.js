import React from 'react'
import { ToolFrame } from '../components/frames'
import PageLayout from '../layouts/page-layout'


export default function Production() {
  return (
    <div className="flex flex-col  w-1/2">
      <h1 className="text-4xl tracking-wider text-center ">PRODUCTION</h1>
      <h2 className="text-xl text-dune-orangespicy font-bold text-center">Lorem Ipsum</h2>
      <p className="text-md text-gray-500 text-center my-8">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

      {/* Project 3 */}
      <h3 className="text-xl">Project 3</h3>
      <p className="text-md text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus rutrum tellus pellentesque eu. Varius sit amet mattis vulputate enim nulla aliquet porttitor. At volutpat diam ut venenatis tellus in. Vitae congue mauris rhoncus aenean vel. Facilisis magna etiam tempor orci eu lobortis elementum. Vulputate dignissim suspendisse in est ante. Senectus et netus et malesuada fames ac turpis. Adipiscing tristique risus nec feugiat in. In tellus integer feugiat scelerisque. Facilisis gravida neque convallis a. Fames ac turpis egestas sed tempus. Fermentum posuere urna nec tincidunt praesent semper feugiat. Ut aliquam purus sit amet luctus venenatis lectus magna. Laoreet id donec ultrices tincidunt arcu. Tortor posuere ac ut consequat semper. Aliquam etiam erat velit scelerisque.</p>
      <p className="text-md text-gray-500 mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus rutrum tellus pellentesque eu. Varius sit amet mattis vulputate enim nulla aliquet porttitor. At volutpat diam ut venenatis tellus in. Vitae congue mauris rhoncus aenean vel. Facilisis magna etiam tempor orci eu lobortis elementum. Vulputate dignissim suspendisse in est ante. Senectus et netus et malesuada fames ac turpis. Adipiscing tristique risus nec feugiat in. In tellus integer feugiat scelerisque. Facilisis gravida neque convallis a. Fames ac turpis egestas sed tempus. Fermentum posuere urna nec tincidunt praesent semper feugiat. Ut aliquam purus sit amet luctus venenatis lectus magna. Laoreet id donec ultrices tincidunt arcu. Tortor posuere ac ut consequat semper. Aliquam etiam erat velit scelerisque.</p>

      {/* Roadmap */}
      <div className='flex flex-row mt-16'>

        <div>

          <h3 className="text-xl mt-8">Roadmap</h3>
          <p className="text-md  text-left w-1/4  ml-8 my-8">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>

        <div className='flex flex-col'>

          <hr className=''></hr>
          <div className="flex flex-row flex-start ">

            <h4 className="text-xl mt-8 pr-16 flex-grow-2 rounded-xl">Left Title</h4>

            <div className='flex-grow-1 mt-4'>
              <div className='flex flex-col'>
                <h4 className="text-xl  mt-2 ">SubTitle</h4>
                <h4 className="text-xl mt-4">Title</h4>
                <p className="text-md  text-gray-500 text-left my-8">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

              </div>
            </div>
          </div>

          <hr className=''></hr>
          <div className="flex flex-row flex-start ">

            <h4 className="text-xl mt-8 pr-16 flex-grow-2 rounded-xl">Left Title</h4>

            <div className='flex-grow-1 mt-4'>
              <div className='flex flex-col'>
                <h4 className="text-xl  mt-2 ">SubTitle</h4>
                <h4 className="text-xl mt-4">Title</h4>
                <p className="text-md  text-gray-500 text-left my-8">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

              </div>
            </div>
          </div>

          <hr className=''></hr>
          <div className="flex flex-row flex-start ">

            <h4 className="text-xl mt-8 pr-16 flex-grow-2 rounded-xl">Left Title</h4>

            <div className='flex-grow-1 mt-4'>
              <div className='flex flex-col'>
                <h4 className="text-xl  mt-2 ">SubTitle</h4>
                <h4 className="text-xl mt-4">Title</h4>
                <p className="text-md  text-gray-500 text-left my-8">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

              </div>
            </div>
          </div>

        </div>
      </div>
      {/* <Divider></Divider> */}

      {/* Tools Grid */}
      <h3 className="text-xl">Tools</h3>

      {/* General */}
      <h3 className="text-lg mt-8 mb-8">General Tools</h3>
      <div className='grid grid-cols-2 md:grid-cols-2 gap-8 justify-center '>
        <ToolFrame src="/contents/tools/drive.png" name="Google Drive" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo. consectetur adipiscing elit." />
        <ToolFrame src="/contents/tools/docs.png" name="Google Docs" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo. consectetur adipiscing elit." />
        <ToolFrame src="/contents/tools/slides.jfif" name="Google Slides " desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo. consectetur adipiscing elit." />
        <ToolFrame src="/contents/tools/sheets.png" name="Google Sheets" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo. consectetur adipiscing elit." />
      </div>

      {/* Production */}
      <h3 className="text-lg mt-16 mb-8 ">Production Tools</h3>
      <div className='grid grid-cols-2 md:grid-cols-2 gap-8 justify-center '>
        <ToolFrame src="/contents/tools/drive.png" role="Producer" name="Google Drive" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo. consectetur adipiscing elit." />
        <ToolFrame src="/contents/tools/docs.png" role="Producer" name="Google Docs" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo. consectetur adipiscing elit." />
        <ToolFrame src="/contents/tools/slides.jfif" role="Producer" name="Google Slides " desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo. consectetur adipiscing elit." />
        <ToolFrame src="/contents/tools/sheets.png" role="Producer" name="Google Sheets" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo. consectetur adipiscing elit." />
      </div>

      {/* Programming */}
      <h3 className="text-lg mt-16 mb-8">Programming Tools</h3>
      <div className='grid grid-cols-2 md:grid-cols-2 gap-8 justify-center '>
        <ToolFrame src="/contents/tools/drive.png" role="Lead Programmer" name="Google Drive" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo. consectetur adipiscing elit." />
        <ToolFrame src="/contents/tools/docs.png" role="Lead Programmer" name="Google Docs" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo. consectetur adipiscing elit." />
        <ToolFrame src="/contents/tools/slides.jfif" role="Lead Programmer" name="Google Slides " desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo. consectetur adipiscing elit." />
        <ToolFrame src="/contents/tools/sheets.png" role="Lead Programmer" name="Google Sheets" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo. consectetur adipiscing elit." />
      </div>

      {/* Design */}
      <h3 className="text-lg mt-16 mb-8">Design Tools</h3>
      <div className='grid grid-cols-2 md:grid-cols-2 gap-8 justify-center '>
        <ToolFrame src="/contents/tools/inskcape.png" role="Designer" name="Inskcape" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo. consectetur adipiscing elit." />
        <ToolFrame src="/contents/tools/unity.png" role="Designer" name="Unity" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo. consectetur adipiscing elit." />
        <ToolFrame src="/contents/tools/blender.webp" role="Designer" name="Blender" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo. consectetur adipiscing elit." />
        <ToolFrame src="/contents/tools/figma.png" role="Designer" name="Figma" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo. consectetur adipiscing elit." />
        <ToolFrame src="/contents/tools/machination.png" role="Designer" name="Machinations" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo. consectetur adipiscing elit." />
        <ToolFrame src="/contents/tools/audacity.png" role="Designer" name="Audacity" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo. consectetur adipiscing elit." />
        <ToolFrame src="/contents/tools/photoshop.png" role="Designer" name="Photoshop" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo. consectetur adipiscing elit." />
      </div>

      {/* Artist */}
      <h3 className="text-lg mt-16 mb-8">Artist Tools</h3>
      <div className='grid grid-cols-2 md:grid-cols-2 gap-8 justify-center '>
        <ToolFrame src="/contents/tools/audacity.png" role="Artist" name="Audacity" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo. consectetur adipiscing elit." />
        <ToolFrame src="/contents/tools/maya.png" role="Artist" name="Maya" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo. consectetur adipiscing elit." />
        <ToolFrame src="/contents/tools/3dmax.png" role="Artist" name="3DS Max" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo. consectetur adipiscing elit." />
        <ToolFrame src="/contents/tools/audition.png" role="Artist" name="Adobe Audition" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo. consectetur adipiscing elit." />
        <ToolFrame src="/contents/tools/illustrator.png" role="Artist" name="Adobe Illustrator" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo. consectetur adipiscing elit." />
        <ToolFrame src="/contents/tools/premiere.png" role="Artist" name="Adobe Premiere" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo. consectetur adipiscing elit." />
        <ToolFrame src="/contents/tools/photoshop.png" role="Artist" name="Adobe Photoshop" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo. consectetur adipiscing elit." />
      </div>


    </div>
  )
}
