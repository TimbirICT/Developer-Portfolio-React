import React from "react";



export default function Portfolio() {
    return (
        <div id='portfolio' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className="text-4xl font-bold text-center text-blue">Portfolio</h1>
            <p className="text-center py-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ratione sapiente deleniti exercitationem, 
            a unde fugiat vitae eum tempore pariatur id. Perspiciatis aliquam repellat rem, eligendi laborum beatae 
            esse alias!
            </p>
            <div className="grid sm:grid-cols-2 gap-12">
              <ProjectItem img{} title='' />  
              <ProjectItem img{} title=''/>
              <ProjectItem img{} title=''/>
              <ProjectItem img{} title=''/>
            </div>
        </div>
    );
}