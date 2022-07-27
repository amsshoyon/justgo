import SearchIcon from '@mui/icons-material/Search';
import { FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material'
import { useDebounce } from 'utils';
import { useState } from 'react';

export const SearchField = ({ onChange }: { onChange: Function }) => {
    const inputHandler = useDebounce<React.ChangeEvent<HTMLInputElement>> (
        (e) => onChange(e.target.value),
        400
    );

    return (
        <div className='relative w-full'>
            <TextField
                placeholder="Search..."
                className='w-full h-full [&>*]:rounded-full'
                size="small"
                onChange={inputHandler}
                inputProps={{
                    style: {
                        paddingLeft: 40,
                        borderRadius: '50px'
                    }
                }}
            />
            <SearchIcon className='absolute top-1/2 left-3 -translate-y-1/2' />
        </div>
    )
}

export const ToggleButton = ({onChange}: {onChange: Function}) => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = ()=> {
        setToggle(!toggle)
        onChange()
    }

    return (
        <label htmlFor="toggleThree" className="flex items-center cursor-pointer select-none" onClick={handleToggle}>
            <div className="relative">
                <div className={`block w-14 h-8 rounded-full ${toggle ? 'bg-green-400' : 'bg-[#E5E7EB]'}`} />
                <div className={`absolute top-1 w-6 h-6 rounded-full transition duration-300 flex items-center justify-center bg-white ${toggle ? 'right-1' : 'left-1 '}`}>
                    <span className={!toggle ? 'hidden' : ''}>
                        <svg className="w-4 h-4 stroke-current" viewBox="0 0 11 8" fill="#000" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z" fill="#000" stroke="white" strokeWidth="0.4"></path>
                        </svg>
                    </span>
                    <span className={`${toggle ? 'hidden' : ''}`}>
                        <svg className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </span>
                </div>
            </div>
        </label>
    )
}

export const RadioGender = ({onChange}:{onChange: Function}) => {
    return (
        <RadioGroup row onChange={event => onChange(event.target.value)} defaultValue="all">
            <FormControlLabel value="all" control={<Radio />} label="All" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
    )
}