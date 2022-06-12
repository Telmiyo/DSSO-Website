import React from 'react'
import { ImageFrame, ToolFrame } from '../components/frames'
import PageLayout from '../layouts/page-layout'
import Image from "next/image"

export default function Production() {
  return (
    <PageLayout>
      <h1 className="text-4xl tracking-wider text-center ">PRODUCTION</h1>
      <h2 className="text-xl text-dune-orangespicy font-bold text-center">Goal</h2>
      <p className="text-md text-gray-500 text-center my-8">Chamfer Studios is a group of 25 university students that share a common goal of producing their first 3D RTT video game for the subject Project III.</p>

      {/* Project 3 */}
      <h2 className="text-xl tracking-wider">About Our Team</h2>
      <ImageFrame src="/contents/images/chamfer_team.jpeg" width="1600px" height="1200px" layout="responsive"/>
      <p className="text-md text-gray-500 mt-2 ">The team consists of one producer, three leads, one for each department, and three departments: ten programmers, seven designers and four artists.</p>
      <p className="text-md text-gray-500 mt-8">Make sure you head over to the Team tab to get to know all of us!</p>

      <h3 className="text-lg text-gray-600 mt-8 tracking-wider">Producer</h3>
      <p className="text-md text-gray-500 mt-2">
        The role of the producer is to make sure the process and progress of the game’s design, development and release
        happen. They are in charge of the management of the project by keeping the team moving towards deadlines, working
        collaboratively and sticking to the same creative and technical vision during its progress.
      </p>

      <h3 className="text-lg tracking-wider text-gray-600 mt-8">Leads</h3>
      <p className="text-md text-gray-500 mt-2">
        The leads’ role is to direct, guide, and organize their department in the different stages of development.
        They are also in charge of communicating their progress, decisions and opinions to the producer.
      </p>

      <h3 className="text-lg tracking-wider text-gray-700 mt-8">Departments</h3>
      <p className="text-md text-gray-500 mt-2">
        Each department is in charge of a specific area on building the video game. The three are important and necessary to reach our end goal.
      </p>

      <h2 className="text-xl mt-8 tracking-wider">Methodology</h2>
      <p className="text-md text-gray-500 mt-2">
        The methodology Chamfer Studios followed through the design and development of the game is the scrum framework,
        consisting of short sprints inside several milestones. At first, the team worked specifically by departments,
        but as the product evolved, they started working in different scrum teams.
      </p>
      <ImageFrame src="/contents/images/scrum.png" width="1075px" height="438px" layout="responsive" />

      <h2 className="text-xl mt-8 tracking-wider">Sprints</h2>
      <p className="text-md text-gray-500 mt-2">
        There were a total of 16 sprints during the whole development of the game. Sprints started every Tuesday and ended Monday night, therefore lasting an entire week.
      </p>
      <p className="text-md text-gray-500 mt-2">
        As for meetings, every department had to meet daily, at 20:30, to discuss and update their lead of any progression or
        difficulties they encountered. Then, the leads with the producer met at 21:00 to update the producer about the situation in every department.
        This facilitated communication and ensured a good cohesion between departments.
      </p>

      <p className="text-md text-gray-500 mt-2">
        Sprint meetings occurred weekly, at the start of every sprint. The leads and the producer planned out the entire week for the members.
      </p>

      {/* Roadmap */}
      <div className='flex flex-row mt-16'>

        {/* Left Column */}
        <div className='w-1/3'>

          <h3 className="text-xl mt-8 tracking-wider">Roadmap</h3>
          <p className="text-md  text-left   ml-8 my-8">
            Milestones are a group of deadlines set at the beginning of the production in order to give the team a clear
            goal with a date. In the case of Chamfer Studios, each milestone represented a delivery</p>
        </div>

        {/* Right Column */}
        <div className='flex flex-col'>

          <hr className=''></hr>
          <div className="flex flex-row flex-start ">

            <h4 className="text-xl mt-8 pr-16 flex-grow-2 rounded-xl font-fonseca text-gray-400">01</h4>

            <div className='flex-grow-1 mt-4'>
              <div className='flex flex-col'>
                <h4 className="text-sm text-dune-orangespicy font-normal ">March - April</h4>
                <h4 className="text-4xl tracking-wider text-dune-lightblue font-bold ">Concept Discovery</h4>
                <ul className='list-disc ml-4 text-md  text-gray-500 text-left my-4'>
                  <li>Unify modules to build Ko-Fi engine</li>
                  <li>Explore and research for references for GDD</li>
                  <li>Art Bible</li>
                  <li>Develop and present Production Plan</li>

                </ul>
              </div>
            </div>
          </div>

          <hr className=''></hr>
          <div className="flex flex-row flex-start ">

            <h4 className="text-xl mt-8 pr-16 flex-grow-2 rounded-xl font-fonseca text-gray-400">02</h4>

            <div className='flex-grow-1 mt-4'>
              <div className='flex flex-col'>
                <h4 className="text-lsm text-dune-orangespicy font-medium ">April - May </h4>
                <h4 className="text-4xl tracking-wider text-dune-lightblue font-bold ">Vertical Slice</h4>
                <ul className='list-disc ml-4 text-md  text-gray-500 text-left my-4'>
                  <li>Define game pillars and start to build GDD</li>
                  <li>Expand on missing engine modules</li>
                  <li>Concept art for characters</li>

                </ul>
              </div>
            </div>
          </div>

          <hr className=''></hr>
          <div className="flex flex-row flex-start ">

            <h4 className="text-xl mt-8 pr-16 flex-grow-2 rounded-xl font-fonseca text-gray-400">03</h4>

            <div className='flex-grow-1 mt-4'>
              <div className='flex flex-col'>
                <h4 className="text-lsm text-dune-orangespicy font-semibold ">April - June</h4>
                <h4 className="text-4xl  tracking-wider text-dune-lightblue font-bold ">Vertical Slice 2</h4>
                <ul className='list-disc ml-4 text-md  text-gray-500 text-left my-4'>
                  <li>Basic character locomotion and environment</li>
                  <li>Initial GDD draft including character design, worldbuilding, game mechanics, etc</li>
                  <li>Main character model, player HUD and environmental prop</li>

                </ul>
              </div>
            </div>
          </div>

          <hr className=''></hr>
          <div className="flex flex-row flex-start ">

            <h4 className="text-xl mt-8 pr-16 flex-grow-2 rounded-xl font-fonseca text-gray-400">04</h4>

            <div className='flex-grow-1 mt-4'>
              <div className='flex flex-col'>
                <h4 className="text-lsm text-dune-orangespicy font-semibold ">April - June</h4>
                <h4 className="text-4xl  tracking-wider text-dune-lightblue font-bold ">Alpha 1</h4>
                <ul className='list-disc ml-4 text-md  text-gray-500 text-left my-4'>
                  <li>Camera movement, enemy patrol, finished character locomotion, blockout implemented, basic game loop</li>
                  <li>Enemies designed, including boss</li>
                  <li>Character and enemies modeled, textured and animated</li>

                </ul>
              </div>
            </div>
          </div>

          <hr className=''></hr>
          <div className="flex flex-row flex-start ">

            <h4 className="text-xl mt-8 pr-16 flex-grow-2 rounded-xl font-fonseca text-gray-400">05</h4>

            <div className='flex-grow-1 mt-4'>
              <div className='flex flex-col'>
                <h4 className="text-lsm text-dune-orangespicy font-semibold ">April - June</h4>
                <h4 className="text-4xl  tracking-wider text-dune-lightblue font-bold ">Alpha 2</h4>
                <ul className='list-disc ml-4 text-md  text-gray-500 text-left my-4'>
                  <li>Abilities programed, enemies AI expanded, level lighting, functionality HUD</li>
                  <li>GDD expanded by defining combat, stats, skills and menus</li>
                  <li>Particles atlas, effects, UI and environmental props</li>

                </ul>
              </div>
            </div>
          </div>

          <hr className=''></hr>
          <div className="flex flex-row flex-start ">

            <h4 className="text-xl mt-8 pr-16 flex-grow-2 rounded-xl font-fonseca text-gray-400">06</h4>

            <div className='flex-grow-1 mt-4'>
              <div className='flex flex-col'>
                <h4 className="text-lsm text-dune-orangespicy font-semibold ">April - June</h4>
                <h4 className="text-4xl  tracking-wider text-dune-lightblue font-bold ">Alpha 3</h4>
                <ul className='list-disc ml-4 text-md  text-gray-500 text-left my-4'>
                  <li>Bug Fixing, gameplay scripting, UI implementation, character and enemy polishing</li>
                  <li>Implementation in engine of enemies, characters and levels</li>
                  <li>Cutscenes, SFX, music</li>

                </ul>
              </div>
            </div>


          </div>

          <hr className=''></hr>
          <div className="flex flex-row flex-start ">

            <h4 className="text-xl mt-8 pr-16 flex-grow-2 rounded-xl font-fonseca text-gray-400">07</h4>

            <div className='flex-grow-1 mt-4'>
              <div className='flex flex-col'>
                <h4 className="text-lsm text-dune-orangespicy font-semibold ">April - June</h4>
                <h4 className="text-4xl  tracking-wider text-dune-lightblue font-bold ">Beta</h4>
                <ul className='list-disc ml-4 text-md  text-gray-500 text-left my-4'>
                  <li>More bug fixing, more polishing, optimization</li>
                  <li>Playtesting and implementation in engine</li>
                  <li>Finishing cutscenes and particles, as well as optimization and music</li>

                </ul>
              </div>
            </div>
          </div>

          <hr className=''></hr>
          <div className="flex flex-row flex-start ">

            <h4 className="text-xl mt-8 pr-16 flex-grow-2 rounded-xl font-fonseca text-gray-400">08</h4>
            <div className='flex-grow-1 mt-4'>
              <div className='flex flex-col'>
                <h4 className="text-lsm text-dune-orangespicy font-semibold ">April - June</h4>
                <h4 className="text-4xl  tracking-wider text-dune-lightblue font-bold ">Gold</h4>
                <ul className='list-disc ml-4 text-md  text-gray-500 text-left my-4'>
                  <li>General polishing and bug fixing</li>
                  <li>Website, trailer</li>
                  <li>Balancing and testing</li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-xl mt-8 tracking-wider">Scrum Teams</h2>
      <p className="text-md text-gray-500 mt-2">
        A scrum team is a group that was in charge of a specific design element, like the UI or a level.
        The idea is that, since one element may have several tasks from different departments, the scrum
        team would consist of at least a designer, a programmer and an artist (this changed depending on
        the necessity of the element). Each scrum team had a scrum master that was in charge of organizing
        and leading the team, ensuring they followed the scrum framework.
      </p>
      <p className="text-md text-gray-500 mt-2">
        The scrum master was a role that rotated weekly, giving everyone the chance of being
        the scrum master at least once. Preferably, the scrum masters were volunteers.

      </p>

      <p className="text-md text-gray-500 mt-2">
        The reason why we worked with this method was because it facilitates communication, organization, motivation, and encourages working with other people.

      </p>


      {/* Tools Grid */}
      <h2 className="text-xl tracking-wider mt-8">Tools</h2>

      <h3 className="text-lg text-gray-600 mt-8 tracking-wider">HacknPlan</h3>
      <p className="text-md text-gray-500 mt-2">
        The team used HacknPlan to manage the scrum framework, using the different sprint boards organized by milestones.
      </p>
      <p className="text-md text-gray-500 my-2">
        This allowed the team to organize the tasks not only by sprints and milestones, but also by design elements, departments and tags, which was very useful to ensure clarity and efficiency.
      </p>
      <ImageFrame src="/contents/images/hacknplan.png" width="1877px" height="961px" layout="responsive" />

      <h3 className="text-lg text-gray-600 mt-8 tracking-wider">Google Drive</h3>
      <p className="text-md text-gray-500 mt-2">
        In Google Drive, the team was able to keep track of all the different documents, such as reports and documentation, as well as assets, calendar, and other useful elements.
      </p>
      <p className="text-md text-gray-500 mt-2">
        In our Drive, the producer provided a series of templates that ensured organization and clarification. It included:
      </p>

      <h4 className="text-md text-gray-600 mt-8 tracking-wider">1. Google Calendar</h4>
      <p className="text-md text-gray-500 my-2">
        Where all the important timestamps were displayed, such as the sprint week, the milestone deliveries, as well as out of the ordinary meetings that we organized.
      </p>
      <ImageFrame src="/contents/images/calendar.png" width="953px" height="658px" layout="responsive" />

      <h4 className="text-md text-gray-600 mt-8 tracking-wider">2. Hour Log</h4>
      <p className="text-md text-gray-500 my-2">
        Where every team member, daily, noted down how many hours they spent working in order to keep track of the time invested as well as the longevity of a task.
      </p>
      <ImageFrame src="/contents/images/hourlog.png" width="901px" height="712px" layout="responsive" />

      <h4 className="text-md text-gray-600 mt-8 tracking-wider">3. Scrum Team</h4>
      <p className="text-md text-gray-500 my-2">
        The information of the scrum teams for that milestone. There were two graphs, one that
        showed who the scrum master was for the week, and another one with the different members
        in each scrum team as well as the tasks we wanted to complete for that week.
      </p>

      <ImageFrame src="/contents/images/scrummaster.png" width="1159px" height="583px" layout="responsive" />
      <ImageFrame src="/contents/images/scrumteams.png" width="864px" height="873px" layout="responsive" />

      <h4 className="text-md text-gray-600 mt-8 tracking-wider">4. Attendance</h4>
      <p className="text-md text-gray-500 my-2">
      The producer noted down who came to class every day in order to keep track of the implication each member has to the project, as well as their schedule.
      </p>

      <ImageFrame src="/contents/images/attendance.png" width="1697px" height="713px" layout="responsive" />

      <h4 className="text-md text-gray-600 mt-8 tracking-wider">5. Evaluation</h4>
      <p className="text-md text-gray-500 my-2">
      In every delivery, the producer had to send an evaluation to the teachers with an analysis on 
      the progress and impact every member of the team was doing. This included their attendance to class, to our meetings,
      how many hours they worked, if they were scrum masters (because it was evaluated positively), the tasks done, a grade
      from their lead, as well as additional comments from the leads. These comments that came from the leads were crucial 
      for their grading, since at the end of the day, they were the ones that knew in a detailed way how hard each member was working, 
      and their level of motivation for the project.
      </p>

      <p className="text-md text-gray-500 my-2">
      Using these reports, the teachers could have an understanding on how everyone was performing, which greatly influenced their grades.
      </p>

      <ImageFrame src="/contents/images/evaluation.png" width="1360px" height="807px" layout="responsive" />

      {/* General */}
      <h3 className="text-lg mt-8 mb-8 tracking-wider">General Tools</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 justify-center '>
        <ToolFrame src="/contents/tools/drive.png" role="Producer" name="Google Drive" desc="Google Drive is a file storage and synchronization service developed by Google." />
        <ToolFrame src="/contents/tools/docs.png" role="Producer" name="Google Docs" desc="Google Docs is an online word processor included as part of the free, web-based Google Docs Editors suite offered by Google." />
        <ToolFrame src="/contents/tools/slides.jfif" role="Producer" name="Google Slides " desc="Google Slides is a presentation program included as part of the free, web-based Google Docs Editors suite offered by Google." />
        <ToolFrame src="/contents/tools/sheets.png" role="Producer" name="Google Sheets" desc="Google Sheets is a spreadsheet program included as part of the free, web-based Google Docs Editors suite offered by Google." />
      </div>

      {/* Production */}
      <h3 className="text-lg mt-16 mb-8 tracking-wider ">Production Tools</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 justify-center '>
        <ToolFrame src="/contents/tools/drive.png" role="Producer" name="Google Drive" desc="Google Drive is a file storage and synchronization service developed by Google." />
        <ToolFrame src="/contents/tools/docs.png" role="Producer" name="Google Docs" desc="Google Docs is an online word processor included as part of the free, web-based Google Docs Editors suite offered by Google." />
        <ToolFrame src="/contents/tools/slides.jfif" role="Producer" name="Google Slides " desc="Google Slides is a presentation program included as part of the free, web-based Google Docs Editors suite offered by Google." />
        <ToolFrame src="/contents/tools/sheets.png" role="Producer" name="Google Sheets" desc="Google Sheets is a spreadsheet program included as part of the free, web-based Google Docs Editors suite offered by Google." />
      </div>

      {/* Programming */}
      <h3 className="text-lg mt-16 mb-8 tracking-wider">Programming Tools</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 justify-center '>
        <ToolFrame src="/contents/tools/drive.png" role="Lead Programmer" name="Google Drive" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo. consectetur adipiscing elit." />
        <ToolFrame src="/contents/tools/docs.png" role="Lead Programmer" name="Google Docs" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo. consectetur adipiscing elit." />
        <ToolFrame src="/contents/tools/slides.jfif" role="Lead Programmer" name="Google Slides " desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo. consectetur adipiscing elit." />
        <ToolFrame src="/contents/tools/sheets.png" role="Lead Programmer" name="Google Sheets" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo. consectetur adipiscing elit." />
      </div>

      {/* Design */}
      <h3 className="text-lg mt-16 mb-8 tracking-wider">Design Tools</h3>
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
      <h3 className="text-lg mt-16 mb-8 tracking-wider">Artist Tools</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 justify-center '>
        <ToolFrame src="/contents/tools/audacity.png" role="Artist" name="Audacity" desc="Audacity is a free and open-source digital audio editor and recording application software." />
        <ToolFrame src="/contents/tools/maya.png" role="Artist" name="Maya" desc="Autodesk Maya, commonly shortened to just Maya, is a 3D computer graphics application." />
        <ToolFrame src="/contents/tools/3dmax.png" role="Artist" name="3DS Max" desc="3D Studio Max, is a professional 3D computer graphics program for making 3D animations." />
        <ToolFrame src="/contents/tools/audition.png" role="Artist" name="Adobe Audition" desc="Adobe Audition is a digital audio workstation developed by Adobe Inc." />
        <ToolFrame src="/contents/tools/illustrator.png" role="Artist" name="Adobe Illustrator" desc="Adobe Illustrator is a vector graphics editor and design program developed and marketed by Adobe Inc." />
        <ToolFrame src="/contents/tools/premiere.png" role="Artist" name="Adobe Premiere" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo. consectetur adipiscing elit." />
        <ToolFrame src="/contents/tools/photoshop.png" role="Artist" name="Adobe Photoshop" desc="Adobe Photoshop is a raster graphics editor developed and published by Adobe." />
      </div>


    </PageLayout>
  )
}
