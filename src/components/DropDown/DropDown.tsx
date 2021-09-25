import React, {useState, FC, useRef, useEffect, createRef, useLayoutEffect} from 'react'
import { useHistory } from 'react-router-dom'
import useOnBlur from 'hooks/useOnBlur'

interface Props {
    placeholder: string
    data: {
        label: string
        id: number
        value: string
        slug: string
    }[]
    className: string
}

const DropDown: FC<Props> = ({data, placeholder, className}) => {
    const [show, setShow] = useState(false)
    const [value, setValue] = useState<{label: string, id: number, value: string, slug: string}>()
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
            {value ? <div onClick={() => history.push(`/services/${value.slug}`)} className="absolute right-6 top-4 text-xs font-bold bg-transparent">გაიგე მეტი</div>: <></>}
        <div ref={selectorRef} onClick={() => setShow(!show)} className={show ? `border-primary-300 ring ring-primary-200 ring-opacity-50 dark:ring-primary-6000 dark:ring-opacity-25 ${className}` : className} onFocus={() => console.log('focused')}>
            {value ? value.label : placeholder}
        </div>
        {/* <div> */}
        {show ? <div className="border bg-white p-2 mt-1 mb-4 w-full absolute rounded-2xl overflow-hidden dark:border-neutral-700 dark:bg-neutral-900">
            {data.map((item, i) => <div onClick={() => {setValue(item); setShow(false)}} className="rounded-md h-8 pl-2 py-1 text-sm font-normal cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800" key={i}>{item.label}</div>)}
        </div>: <></>}
        {/* </div> */}
        </div>
    );
}

export default DropDown