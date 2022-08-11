import React from 'react'

export default function Contact() {
  return (
    <div> 
      <form method="POST" action="/Contact">
    <input type='text' className='inputs' placeholder="What's your name?" value={name} onChange={e => setName(e.target.value)}/>
    <input type='email'className='inputs' placeholder="What's your email?" value={email} onChange={e => setEmail(e.target.value)}/>
    <textarea textarea='Send us a message!' className='textareainput' value ={message} onChange={e => setMessage(e.target.value)}/>
    <button onClick={submit}>Send Message</button>
    <span className={emailSent ? 'visible' : null}>Thanks so much! Talk to you soon!</span>
     
      </form>
 </div>
  )
}
