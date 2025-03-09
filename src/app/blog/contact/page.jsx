// app/contact/page.jsx

'use client' // We'll do this if we want the rest of the file as a Client Component
// ^ We'll refine in a moment. Actually, let's do the new approach with "use server".

import React from 'react'

// 1) Create a server action:
export async function sendMessage(formData) {
    'use server' // Marks this as a server action

    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    // For now, let's just log it on the server:
    console.log('Received message:', { name, email, message })

    // In a real scenario, you might send an email or store it in a DB
    return { success: true }
}

// 2) Build the component:
export default function ContactPage() {
    return (
        <div className='max-w-lg mx-auto p-4'>
            <h1 className='text-2xl font-bold mb-4'>Contact Me</h1>
            <p className='mb-6'>
                Have a question or just want to say hi? Fill out the form below!
            </p>

            <form action={sendMessage}>
                <div className='mb-4'>
                    <label className='block font-semibold mb-1' htmlFor='name'>
                        Name
                    </label>
                    <input
                        id='name'
                        name='name'
                        className='w-full p-2 text-black'
                        required
                    />
                </div>
                <div className='mb-4'>
                    <label className='block font-semibold mb-1' htmlFor='email'>
                        Email
                    </label>
                    <input
                        id='email'
                        name='email'
                        type='email'
                        className='w-full p-2 text-black'
                        required
                    />
                </div>
                <div className='mb-4'>
                    <label
                        className='block font-semibold mb-1'
                        htmlFor='message'
                    >
                        Message
                    </label>
                    <textarea
                        id='message'
                        name='message'
                        rows='4'
                        className='w-full p-2 text-black'
                        required
                    />
                </div>
                <button
                    type='submit'
                    className='bg-brandGreen hover:bg-green-600 text-white font-semibold px-4 py-2 rounded'
                >
                    Send
                </button>
            </form>
        </div>
    )
}
