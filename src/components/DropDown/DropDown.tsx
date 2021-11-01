import React, {useState, FC, useRef, useEffect, createRef, useLayoutEffect} from 'react'
import { useHistory } from 'react-router-dom'
import useOnBlur from 'hooks/useOnBlur'
import { BackendCourse, BackendService } from 'types'

interface Props {
    placeholder: string
    data?: BackendService
    className: string
    selectedCourse?: BackendCourse
    setSelectedCourse: (course: any) => void
    onShowMore: (cb: () => void) => void
    disabled?: boolean
}  

const DropDown: FC<Props> = ({data, disabled= false, placeholder, className, setSelectedCourse, onShowMore, selectedCourse}) => {
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
    if (data)
    return (
        
        <div ref={dropDownRef} className="relative">
            {!disabled&&selectedCourse ? <div onClick={() => onShowMore(() => history.push(`/services/${data.slug}/${selectedCourse.slug}`))} className="absolute right-6 top-4 text-xs font-bold bg-transparent">გაიგე მეტი</div>: <></>}
            <div ref={selectorRef} onClick={() => setShow(!show)} className={!disabled ? show ? `border-primary-300 ring ring-primary-200 ring-opacity-50 dark:ring-primary-6000 dark:ring-opacity-25 ${className}` : className : className + ' opacity-75'} onFocus={() => console.log('focused')}>
                {selectedCourse ? selectedCourse.title : placeholder}
            </div>
            {/* <div> */}
            {!disabled && show ? <div className="border bg-white p-2 mt-1 mb-4 w-full absolute rounded-2xl overflow-hidden dark:border-neutral-700 dark:bg-neutral-900">
                {data.courses.map((item, i) => <div onClick={() => {setSelectedCourse(item); setShow(false)}} className="rounded-md h-8 pl-2 py-1 text-sm font-normal cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800" key={i}>{item.title}</div>)}
            </div>: <></>}
            {/* </div> */}
        </div>
    );
    else 
    return (
        <div ref={dropDownRef} className="relative">
            <div ref={selectorRef} onClick={() => setShow(!show)} className={!disabled ? show ? `border-primary-300 ring ring-primary-200 ring-opacity-50 dark:ring-primary-6000 dark:ring-opacity-25 ${className}` : className : className + ' opacity-75'} onFocus={() => console.log('focused')}>
                {selectedCourse ? selectedCourse.title : placeholder}
                
            </div>
            
            {!disabled && show ? <div className="max-h-40 border bg-white p-2 mt-2 mb-4 w-full absolute rounded-md overflow-y-scroll dark:border-neutral-700 dark:bg-neutral-900">
                {Array.from(Array(95).keys()).slice(0).map((item, i) => <div onClick={() => {setSelectedCourse(item + 6); setShow(false)}} className="rounded-md h-8 pl-2 mt-1 py-1 text-sm font-normal cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800" key={i}>{item+6}</div>)}
            </div>: <></>}
        </div>
    )
}

export default DropDown