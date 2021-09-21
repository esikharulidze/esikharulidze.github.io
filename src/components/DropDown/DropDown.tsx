import React, {useState, FC, useRef} from 'react'
import useOnBlur from 'hooks/useOnBlur'

interface Props {
    placeholder: string
    data: {
        label: string
        id: number
        value: string
    }[]
    className: string
}

const DropDown: FC<Props> = ({data, placeholder, className}) => {
    const [show, setShow] = useState(false)
    const dropDownRef = useRef(null)
    useOnBlur(dropDownRef, () => setShow(false))
    return (
        <>
        <div ref={dropDownRef} onClick={() => setShow(!show)} className={className}>
            {placeholder}
        </div>
        <div className="relative">
        {show ? <div className="border bg-white mt-1 mb-4 w-full absolute rounded-2xl">
            {data.map((item, i) => <div className="h-8 pl-4 py-1 text-sm font-normal" key={i}>{item.label}</div>)}
        </div>: <></>}
        </div>
        </>
    );
}

export default DropDown