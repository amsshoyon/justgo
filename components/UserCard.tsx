import { User } from 'interfaces'
import Image from 'next/image'
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const UserCard = ({ user }: { user: User }) => {
    return (
        <div className="flex p-5 shadow-lg rounded-md w-full h-full">
            <div className='w-[60px] h-[60px] rounded-full border border-gray-800 overflow-hidden mr-4'>
                <Image src={user.image} alt="" width={60} height={60} />
            </div>
            <div className='text-14'>
                <p className="text-18 font-bold">{user.name}</p>
                <p className='text-gray-600 mb-2'>{user.email}</p>
                <p className='mb-2'>
                    <PersonIcon fontSize='small' /> {user.username}
                </p>
                <p>
                    <CalendarMonthIcon fontSize='small' /> {user.registrationDate}
                </p>
            </div>
        </div>
    )
}

export default UserCard