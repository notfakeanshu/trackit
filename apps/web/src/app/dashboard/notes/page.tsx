'use client'
import React, { useState } from 'react'
import {ProfileBar} from '@/components/profilebar'
import { Editor } from "novel";
import { Button,buttonVariants } from "@repo/ui/button";
import { cn } from "@repo/ui/utils"

const NotesCreationPage = () =>{
    const [note, setNote] = useState(false);
    return (
        <>
            <div className='flex flex-row justify-between  mx-4 my-4'>
                <div className='font-bold text-3xl'> My Notes </div>
                <ProfileBar ownerName="Shubham Tiwari" avatarUrl=""/>
            </div>
            <Button variant='outline' className="text-primary bg-secondary border-xl rounded-xl border-primary" onClick={()=>{note == false ? setNote(true) : setNote(false)} }>Add New Note</Button>
            
            <div className='flex min-h-screen flex-col items-center justify-between p-24 '>
                <Editor className="relative min-h-[500px] w-full max-w-screen-lg border-stone-200 bg-background text-inherit sm:mb-[calc(20vh)] sm:rounded-lg sm:border sm:shadow-lg"/>
            </div>
        </>
    )
    
}

export default NotesCreationPage;