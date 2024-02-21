import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4'>
      <h1 className='py-4 text-4xl font-bold text-center text-blue'>Contact</h1>
      <form action="" method='POST' encType='multipart/form-data'></form>
      <div>
        <div>
          <label>Name</label>
          <input type='text' name='name' id='name' placeholder='Enter your name' />
        </div>
        <div>
          <label>Email</label>
          <input type='text' name='email' id='email' placeholder='Enter your email' />
        </div>
        <div>
          <label>Phone Number</label>
          <input type='text' name='phone' id='phone' placeholder='Enter your phone number' />
        </div>
        <div>
          <label>Message</label>
          <textarea name='message' id='message' placeholder='Enter your message'></textarea>
        </div>
      </div>
    </div>
  )
}

export default Contact
