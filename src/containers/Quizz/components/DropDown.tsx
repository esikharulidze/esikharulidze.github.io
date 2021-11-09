import React, {useState, FC, useRef, useEffect, createRef, useLayoutEffect} from 'react'
import { useHistory } from 'react-router-dom'
import useOnBlur from 'hooks/useOnBlur'
import { BackendCourse, BackendService } from 'types'

interface Props {
    placeholder: string
    data: number[]
    className: string
    selected?: number
    setSelected: (val: number) => void
    disabled?: boolean
}  

const DropDown: FC<Props> = ({data, disabled= false, placeholder, className, setSelected, selected}) => {
    const [show, setShow] = useState(false)
    const dropDownRef = useRef(null)
    const selectorRef = createRef<HTMLDivElement>()
    useLayoutEffect(() => {
        if (show) {
            selectorRef.current?.focus()
        }
    }, [show])
    useOnBlur(dropDownRef, () => {setShow(false)})
    const history = useHistory()
   
    return (
        <div ref={dropDownRef} className="relative">
            <div ref={selectorRef} onClick={() => setShow(!show)} className={!disabled ? show ? `border-primary-300 ring ring-primary-200 ring-opacity-50 dark:ring-primary-6000 dark:ring-opacity-25 ${className}` : className : className + ' opacity-75'} onFocus={() => console.log('focused')}>
                {selected ? selected : placeholder}
                
            </div>
            
            {!disabled && show ? <div className="z-10 max-h-40 border bg-white p-2 mt-2 mb-4 w-full absolute rounded-md overflow-y-scroll dark:border-neutral-700 dark:bg-neutral-900">
                {data.map((item, i) => <div onClick={() => {setSelected(item ); setShow(false)}} className="rounded-md h-8 pl-2 mt-1 py-1 text-sm font-normal cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800" key={i}>{item}</div>)}
            </div>: null}
        </div>
    )
}

export default DropDown