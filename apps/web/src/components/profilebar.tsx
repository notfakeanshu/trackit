import { HTMLAttributes } from 'react';
export interface profileProps extends HTMLAttributes<HTMLElement>{
    ownerName: string;
    avatarUrl: string;
}

export const ProfileBar = ({ownerName, avatarUrl} : profileProps) => {
    return (
        <div className="backdrop-blur-xl bg-white/30 flex justify-between rounded-lg">
            <div className='px-2 py-2 '>
                { ownerName }
            </div>
            <div style = {{ backgroundImage: `url(${avatarUrl})` ,backgroundRepeat: 'no-repeat'}} className="py-[6px] px-[4px]">
                Lolz
            </div>
        </div>
    )
}