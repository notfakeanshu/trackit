'use client'
import React, { useState} from 'react'
import { PlusIcon } from "lucide-react";
import {ProfileBar} from '@/components/profilebar'
import { Editor } from "novel";
import { Button,buttonVariants } from "@repo/ui/button";
import {Content} from './defaultContent';
const NotesCreationPage = () =>{
    const [note, setNote] = useState(false);
    const Add = () => {
        return (
            <Button variant='outline' className="text-primary bg-secondary border-xl rounded-xl border-primary items-center mx-[50] mb-8 w-[200px] h-[60px] text-lg" onClick={()=>setNote(!note) }>
                <PlusIcon className="mx-4 my-4 w-[60px] h-[60px]"/>Add New Note
            </Button>
        )
    }
    const Save = () => {
        return (
            <Button variant='outline' className="text-primary bg-secondary border-xl rounded-xl border-primary pl-4 mb-8" onClick={()=>setNote(!note) }>
                Save
                <PlusIcon className="ml-2 my-4"/>
            </Button>
        )
    }
    
    return (
        <>
            <div className='flex flex-row justify-between  mx-4 my-4'>
                <div className='font-bold text-3xl'> My Notes </div>
                <ProfileBar ownerName="Shubham Tiwari" avatarUrl=""/>
            </div>
            <div className='flex flex-col items-center justify-between p-24 '>
                { note ? <Save/>:<Add/> }
                {note ? <Editor defaultValue={ Content } className="relative min-h-[250px] w-full max-w-screen-lg border-stone-200 bg-background text-inherit sm:mb-[calc(20vh)] sm:rounded-lg sm:border sm:shadow-lg ease-in className='flex min-h-screen flex-col items-center justify-between p-24 '"/>:<div className="w-[300px] px-4">"Never let any point escape your mind. Jot down your thoughts as it comes to your mind directly inside the meetings. create update delete and manage your notes at one place."</div>}
            </div>
        </>
    )
    
}

export default NotesCreationPage;