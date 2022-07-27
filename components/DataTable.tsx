import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Image from 'next/image';
import moment from 'moment';

const columns: GridColDef[] = [
    {
        field: 'name',
        headerName: 'Name',
        flex: 1,
        renderCell: (params: GridValueGetterParams) => {
            const { name, email, image } = params.row;
            return (
                <div className='flex items-center p-5'>
                    <div className='w-[50] h-[50] rounded-full overflow-hidden border border-gray-900 mr-5'>
                        <Image src={image} alt="" width={50} height={50} />
                    </div>
                    <div>
                        <p className='font-bold'>{name}</p>
                        <p className='text-gray-600 font-medium'>{email}</p>
                    </div>
                </div>
            )
        }
    },
    {
        field: 'registrationDate',
        headerName: 'Registration Date',
        flex: 1,
        renderCell: (params: GridValueGetterParams) => moment(params.row.registrationDate).format('MMMM Do, YYYY')
    },
    {
        field: 'username',
        headerName: 'Username',
        flex: 1,
    },
];

interface componentProps {
    className?: string;
    data: any[] | null,
    pageSize?: number
}
const DataTable = ({ className, data = [], pageSize}: componentProps) => {
    return (
        <div className={className}>
            <DataGrid
                rows={data ? data : []}
                columns={columns}
                autoHeight
                pageSize={pageSize}
                disableColumnSelector
                disableColumnFilter
                disableColumnMenu
                disableDensitySelector
                hideFooter
                disableSelectionOnClick
                getRowHeight={() => 'auto'}
                sx={{
                    '.MuiDataGrid-columnSeparator': {
                        display: 'none',
                    },
                }}
            />
        </div>
    );
}

export default DataTable