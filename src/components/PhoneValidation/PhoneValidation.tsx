import React, { FC, useEffect, useRef, useState } from "react";
import NcModal from "components/NcModal/NcModal";
import ButtonPrimary from "components/Button/ButtonPrimary";
import ButtonSecondary from "components/Button/ButtonSecondary";
import Input from "components/Input/Input";

export interface PhoneValidationProps {
  show: boolean;
  onCloseModalDeleteComment: () => void;
}

const PhoneValidation: FC<PhoneValidationProps> = ({
  show,
  onCloseModalDeleteComment,
}) => {

  const firstInput = useRef<HTMLInputElement>(null)
	const secondInput = useRef<HTMLInputElement>(null)
	const thirdInput = useRef<HTMLInputElement>(null)
	const fourthInput = useRef<HTMLInputElement>(null)
	const [error, setError] = useState(false)
	const [otp, setOtp] = useState<(number | null)[]>([null, null, null, null])
	useEffect(() => {
		if(firstInput.current) {
			firstInput.current.focus()
		}
	}, [firstInput])
	useEffect(() => {
		if(otp[0] !== null && otp[1] === null) {
			secondInput.current?.focus()
		}
	}, [otp, secondInput])
	useEffect(() => {
		if(otp[1] !== null && otp[2] === null) {
			thirdInput.current?.focus()
		}
	}, [otp, thirdInput])
	useEffect(() => {
		if(otp[2] !== null && otp[3] === null) {
			fourthInput.current?.focus()
		}
	}, [otp, fourthInput])

  const renderContent = () => {
    return (
		<div>
			<h2 className="text-xl mb-2 mt-2 font-bold ml-3">დაადასტურეთ ტელეფონი</h2>
			<p className="ml-3 mb-6 text-sm">კოდი გამოგზავნილია ნომერზე ******123</p>
		<div className="flex gap-5 justify-center">
	<Input
			type='text'
			placeholder={''}
			sizeClass={"h-16 w-16 px-6 font-semibold"}
			className='mt-1 text-xl'
			ref={firstInput}
			value={otp[0] || undefined}
			onChange={({target: {value}}) => setOtp(prevOtp => {
				const a = [...prevOtp]
				a[0] = value !== '' ? Number(value) % 10 : null
				return a
			})}
		/>
	<Input
			type='text'
			placeholder={''}
			sizeClass={"h-16 w-16 px-6 font-semibold"}
			className='mt-1 text-xl'
			ref={secondInput}
			value={otp[1] || undefined}
			onChange={({target: {value}}) => setOtp(prevOtp => {
				const a = [...prevOtp]
				a[1] = value !== '' ? Number(value) % 10 : null
				return a
			})}
		/>
	<Input
			type='text'
			placeholder={''}
			sizeClass={"h-16 w-16 px-6 font-semibold"}
			className='mt-1 text-xl'
			ref={thirdInput}
			value={otp[2] || undefined}
			onChange={({target: {value}}) => setOtp(prevOtp => {
				const a = [...prevOtp]
				a[2] = value !== '' ? Number(value) % 10 : null
				return a
			})}
		/>
	<Input
			type='text'
			placeholder={''}
			sizeClass={"h-16 w-16 px-6 font-semibold"}
			className='mt-1 text-xl'
			ref={fourthInput}
			value={otp[3] || undefined}
			onChange={({target: {value}}) => setOtp(prevOtp => {
				const a = [...prevOtp]
				a[3] = value !== '' ? Number(value) % 10 : null
				return a
			})}
		/>
		</div>
		<div className="pr-3 pl-3 mt-4">
		{error ? <p className="text-red-500">კოდი არასწორია</p> : null}
		<ButtonPrimary className="mt-2 w-full">დადასტურება</ButtonPrimary>
		</div>
		<p className="ml-3 mt-4 cursor-pointer font-semibold">კოდის თავიდან გაგზავნა</p>
	</div>
    );
  };

  const renderTrigger = () => {
    return null;
  };

  return (
    <NcModal
      isOpenProp={show}
      onCloseModal={onCloseModalDeleteComment}
      contentExtraClass="max-w-sm"
      renderContent={renderContent}
      renderTrigger={renderTrigger}
      modalTitle=""
	  closeButton={false}
    />
  );
};

export default PhoneValidation;
