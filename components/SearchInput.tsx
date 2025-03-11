import { redirect } from 'next/navigation'
import React from 'react'


export default function SearchInput() {
    async function searchAction(formData: FormData) {
        "use server"

        const serchTerm = formData.get('searchTerm')
        redirect(`/search/${serchTerm}`)
    }

  return (
    <form action={searchAction} className=' py-2 px-4 rounded-2xl mt-4 border border-zinc-600 flex justify-between bg-black'>
        <input type="text" placeholder='Search any movie...' name='searchTerm' className='flex-1 bg-transparent outline-none' />
        <button type="submit" className='hover:bg-zinc-700 py-2 px-4 transition-colors rounded-2xl text-sm cursor-pointer '>Search</button>
    </form>
  )
}