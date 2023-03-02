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
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    id?:string,
    onKeyDown?:any
}

const TextInput: React.FC<Props> = ({
        id,
        label, 
        error, 
        errorMessage, 
        type, 
        value, 
        Styles, 
        border, 
        borderColor, 
        placeholder, 
        onChange,
        onKeyDown
    }) => {
  return (
    <div className='flex flex-col gap-2 items-start'>

        {label && 
            <label className={`text-sm font-medium ${error ? 'text-red-600' : 'text-gray-900'}`}>
                {label}
            </label>
        }

        <input
            id={id}
            type={type ? type : 'text'}
            value={value}
            className={`${Styles ? Styles : 'text-sm font-medium bg-white'} w-full px-6 py-2 focus:outline-none ${border && 'border'} ${border && error ? 'border-red-600': borderColor} `}
            placeholder={placeholder}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />

        {error && 
            <small className="text-xs text-red-600">
                { errorMessage }
            </small>
        }
        
    </div>
  )
}


export default TextInput