import React from 'react'

interface Props {
    label?: string,
    error?: boolean,
    errorMessage?: string,
    type?: string,
    value: any,
    Styles?: string
    border?: boolean,
    borderColor?: string,
    placeholder?: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>
}


const Dropdown: React.FC<Props> = ({label, onChange, error, errorMessage, value}) => {
    return (
        <div className='flex flex-col gap-2 items-start'>

            {label && 
                <label className={`text-sm font-medium ${error ? 'text-red-600' : 'text-gray-900'}`}>
                    {label}
                </label>
            }

            <div className='w-full h-max relative'>
                <select 
                name="dropdown" 
                id="dropdown"
                value={value}
                >

                </select>
            </div>

        </div>
    )
}

export default Dropdown