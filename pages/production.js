import React from 'react'
import { ToolFrame } from '../components/frames'
import PageLayout from '../layouts/page-layout'


export default function Production() {
  return (
    <div className="flex flex-col mx-5 md:w-1/2 md:mx-0">
      <h1 className="text-4xl tracking-wider text-center ">PRODUCTION</h1>
      <h2 className="text-xl text-dune-orangespicy font-bold text-center">Lorem Ipsum</h2>
      <p className="text-md text-gray-500 text-center my-8">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

      {/* Project 3 */}
      <h3 className="text-xl">Project 3</h3>
      <p className="text-md text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus rutrum tellus pellentesque eu. Varius sit amet mattis vulputate enim nulla aliquet porttitor. At volutpat diam ut venenatis tellus in. Vitae congue mauris rhoncus aenean vel. Facilisis magna etiam tempor orci eu lobortis elementum. Vulputate dignissim suspendisse in est ante. Senectus et netus et malesuada fames ac turpis. Adipiscing tristique risus nec feugiat in. In tellus integer feugiat scelerisque. Facilisis gravida neque convallis a. Fames ac turpis egestas sed tempus. Fermentum posuere urna nec tincidunt praesent semper feugiat. Ut aliquam purus sit amet luctus venenatis lectus magna. Laoreet id donec ultrices tincidunt arcu. Tortor posuere ac ut consequat semper. Aliquam etiam erat velit scelerisque.</p>
      <p className="text-md text-gray-500 mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus rutrum tellus pellentesque eu. Varius sit amet mattis vulputate enim nulla aliquet porttitor. At volutpat diam ut venenatis tellus in. Vitae congue mauris rhoncus aenean vel. Facilisis magna etiam tempor orci eu lobortis elementum. Vulputate dignissim suspendisse in est ante. Senectus et netus et malesuada fames ac turpis. Adipiscing tristique risus nec feugiat in. In tellus integer feugiat scelerisque. Facilisis gravida neque convallis a. Fames ac turpis egestas sed tempus. Fermentum posuere urna nec tincidunt praesent semper feugiat. Ut aliquam purus sit amet luctus venenatis lectus magna. Laoreet id donec ultrices tincidunt arcu. Tortor posuere ac ut consequat semper. Aliquam etiam erat velit scelerisque.</p>

      {/* Roadmap */}
      <div className='flex flex-row mt-16'>

        {/* Left Column */}
        <div className=''>

          <h3 className="text-xl mt-8">Roadmap</h3>
          <p className="text-md  text-left w-1/3  ml-8 my-8">6 Months of Developement we follow on Chamfer Studio working on Kofi Engine and Dune SSO.</p>
        </div>

        {/* Right Column */}
        <div className='flex flex-col'>

          <hr className=''></hr>
          <div className="flex flex-row flex-start ">

            <h4 className="text-xl mt-8 pr-16 flex-grow-2 rounded-xl font-fonseca text-gray-400">01</h4>

            <div className='flex-grow-1 mt-4'>
              <div className='flex flex-col'>
                <h4 className="text-sm text-dune-orangespicy font-normal ">March - April</h4>
                <h4 className="text-4xl text-dune-lightblue font-bold ">Alpha</h4>
                <p className="text-md  text-gray-500 text-left my-8">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
          </div>

          <hr className=''></hr>
          <div className="flex flex-row flex-start ">

            <h4 className="text-xl mt-8 pr-16 flex-grow-2 rounded-xl font-fonseca text-gray-400">02</h4>

            <div className='flex-grow-1 mt-4'>
              <div className='flex flex-col'>
                <h4 className="text-lsm text-dune-orangespicy font-medium ">April - May </h4>
                <h4 className="text-4xl text-dune-lightblue font-bold ">Beta</h4>
                <p className="text-md  text-gray-500 text-left my-8">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
          </div>

          <hr className=''></hr>
          <div className="flex flex-row flex-start ">

            <h4 className="text-xl mt-8 pr-16 flex-grow-2 rounded-xl font-fonseca text-gray-400">03</h4>

            <div className='flex-grow-1 mt-4'>
              <div className='flex flex-col'>
                <h4 className="text-lsm text-dune-orangespicy font-semibold ">April - June</h4>
                <h4 className="text-4xl text-dune-lightblue font-bold ">GOLD</h4>
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
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 justify-center '>
        <ToolFrame src="/contents/tools/drive.png" role="Producer" name="Google Drive" desc="Google Drive is a file storage and synchronization service developed by Google." />
        <ToolFrame src="/contents/tools/docs.png" role="Producer" name="Google Docs" desc="Google Docs is an online word processor included as part of the free, web-based Google Docs Editors suite offered by Google." />
        <ToolFrame src="/contents/tools/slides.jfif" role="Producer" name="Google Slides " desc="Google Slides is a presentation program included as part of the free, web-based Google Docs Editors suite offered by Google." />
        <ToolFrame src="/contents/tools/sheets.png" role="Producer" name="Google Sheets" desc="Google Sheets is a spreadsheet program included as part of the free, web-based Google Docs Editors suite offered by Google." />
      </div>

      {/* Production */}
      <h3 className="text-lg mt-16 mb-8 ">Production Tools</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 justify-center '>
        <ToolFrame src="/contents/tools/drive.png" role="Producer" name="Google Drive" desc="Google Drive is a file storage and synchronization service developed by Google." />
        <ToolFrame src="/contents/tools/docs.png" role="Producer" name="Google Docs" desc="Google Docs is an online word processor included as part of the free, web-based Google Docs Editors suite offered by Google." />
        <ToolFrame src="/contents/tools/slides.jfif" role="Producer" name="Google Slides " desc="Google Slides is a presentation program included as part of the free, web-based Google Docs Editors suite offered by Google." />
        <ToolFrame src="/contents/tools/sheets.png" role="Producer" name="Google Sheets" desc="Google Sheets is a spreadsheet program included as part of the free, web-based Google Docs Editors suite offered by Google." />
      </div>

      {/* Programming */}
      <h3 className="text-lg mt-16 mb-8">Programming Tools</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 justify-center '>
        <ToolFrame src="/contents/tools/drive.png" role="Lead Programmer" name="Google Drive" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo. consectetur adipiscing elit." />
        <ToolFrame src="/contents/tools/docs.png" role="Lead Programmer" name="Google Docs" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo. consectetur adipiscing elit." />
        <ToolFrame src="/contents/tools/slides.jfif" role="Lead Programmer" name="Google Slides " desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo. consectetur adipiscing elit." />
        <ToolFrame src="/contents/tools/sheets.png" role="Lead Programmer" name="Google Sheets" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo. consectetur adipiscing elit." />
      </div>

      {/* Design */}
      <h3 className="text-lg mt-16 mb-8">Design Tools</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 justify-center '>
        <ToolFrame src="/contents/tools/inskcape.png" role="Designer" name="Inskcape" desc="nkscape is a free and open-source vector graphics editor used to create vector images." />
        <ToolFrame src="/contents/tools/unity.png" role="Designer" name="Unity" desc="Unity is a cross-platform game engine developed by Unity Technologies." />
        <ToolFrame src="/contents/tools/blender.webp" role="Designer" name="Blender" desc="Blender is a free and open-source 3D computer graphics software toolset." />
        <ToolFrame src="/contents/tools/figma.png" role="Designer" name="Figma" desc="Figma is a vector graphics editor and prototyping tool." />
        <ToolFrame src="/contents/tools/machination.png" role="Designer" name="Machinations" desc="Machinations is a visual language for diagramming game economies, and a tool for drawing, and above all, simulating them without writing code." />
        <ToolFrame src="/contents/tools/audacity.png" role="Designer" name="Audacity" desc="Audacity is a free and open-source digital audio editor and recording application software." />
        <ToolFrame src="/contents/tools/photoshop.png" role="Designer" name="Photoshop" desc="Adobe Photoshop is a raster graphics editor developed and published by Adobe." />
      </div>

      {/* Artist */}
      <h3 className="text-lg mt-16 mb-8">Artist Tools</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 justify-center '>
        <ToolFrame src="/contents/tools/audacity.png" role="Artist" name="Audacity" desc="Audacity is a free and open-source digital audio editor and recording application software." />
        <ToolFrame src="/contents/tools/maya.png" role="Artist" name="Maya" desc="Autodesk Maya, commonly shortened to just Maya, is a 3D computer graphics application." />
        <ToolFrame src="/contents/tools/3dmax.png" role="Artist" name="3DS Max" desc="3D Studio Max, is a professional 3D computer graphics program for making 3D animations." />
        <ToolFrame src="/contents/tools/audition.png" role="Artist" name="Adobe Audition" desc="Adobe Audition is a digital audio workstation developed by Adobe Inc." />
        <ToolFrame src="/contents/tools/illustrator.png" role="Artist" name="Adobe Illustrator" desc="Adobe Illustrator is a vector graphics editor and design program developed and marketed by Adobe Inc." />
        <ToolFrame src="/contents/tools/premiere.png" role="Artist" name="Adobe Premiere" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo. consectetur adipiscing elit." />
        <ToolFrame src="/contents/tools/photoshop.png" role="Artist" name="Adobe Photoshop" desc="Adobe Photoshop is a raster graphics editor developed and published by Adobe." />
      </div>


    </div>
  )
}
