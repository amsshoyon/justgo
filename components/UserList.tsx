import { Pagination } from '@mui/material';
import { Filter, Gender, User } from 'interfaces';
import React, { useEffect, useState } from 'react'
import { getUserList } from 'requests/user';
import DataTable from './DataTable';
import { RadioGender, SearchField, ToggleButton } from './Form';
import UserCard from './UserCard';

const UserList = () => {
    const toShow = 10;
    const [users, setUsers] = useState<User[]>([]);
    const [totalData, setTotalData] = useState<number>(0);
    const [filteredData, setFilteredData] = useState<User[]>([])
    const [tileView, setTileView] = useState(false)
    const [filters, setFilters] = useState<Filter>({
        key: '',
        gender: Gender.all,
        pageNumber: 1,

    })

    const getUser = async () => {
        let res = await getUserList();
        if (res) {
            setTotalData(res.info.results)
            let fotmateData = res.results.reduce((acc: [], curr: any, index: number) => {
                return [...acc, {
                    id: index,
                    name: curr.name.last + ' ' + curr.name.first,
                    email: curr.email,
                    image: curr.picture.medium,
                    registrationDate: curr.registered.date,
                    username: curr.login.username,
                    gender: curr.gender
                }]
            }, [])
            setUsers(fotmateData)
        }
    }

    useEffect(() => {
        if (!users.length) getUser();

        if (users.length) {
            let data = [...users];

            if (filters.key) {
                data = data.filter(item => {
                    if (
                        item.name.includes(filters.key) ||
                        item.email.includes(filters.key) ||
                        item.username.includes(filters.key)
                    ) return item
                })
            }

            if (filters.gender && filters.gender !== 'all') {
                data = data.filter(item => item.gender === filters.gender)
            }

            setTotalData(data.length)
            let indexFrom = (filters.pageNumber * toShow) - toShow;
            let paginatedData = data.slice(indexFrom, indexFrom + toShow)
            setFilteredData(paginatedData)
        }
    }, [filters, users])

    const handlePagination = (event: React.ChangeEvent<unknown>, value: number) => {
        setFilters({ ...filters, pageNumber: value });
    };

    return (
        <section className='container py-12'>
            <h4 className='text-24 font-medium mb-8'>User List</h4>

            <div className='grid grid-cols-4 gap-4 mb-4'>
                <div>
                    <SearchField onChange={(value: string) => setFilters({ ...filters, key: value })} />
                </div>
                <div className='col-span-2'>
                    <div className='flex items-center justify-center'>
                        <label className='mr-3 mb-1'>Filter By:</label>
                        <RadioGender onChange={(value: Gender) => setFilters({ ...filters, gender: value })} />
                    </div>
                </div>
                <div>
                    <div className="flex justify-end items-center">
                        <span className='mr-3'>Tile View</span>
                        <ToggleButton onChange={() => setTileView(!tileView)} />
                    </div>
                </div>
            </div>

            {tileView ?
                <div className="grid grid-cols-4 gap-6">
                    {filteredData.map((user, i) =>
                        <UserCard user={user} key={i} />
                    )}
                </div>
                :
                <DataTable className='mb-4' data={filteredData} pageSize={toShow} />
            }

            <Pagination count={Math.ceil(totalData / toShow)} shape="rounded" className='flex justify-end' onChange={handlePagination} />

        </section>
    )
}

export default UserList