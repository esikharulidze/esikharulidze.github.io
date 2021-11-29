import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logoImg from 'images/logo.png'
import logoLightImg from 'images/logo-light.png'
import LogoSvg from './LogoSvg'
import LogoLightSvg from './LogoLightSvg'
import LogoDarkSvg from './LogoDarkSvg'
import { useAppSelector } from 'app/hooks'
import { selectDarkmodeState } from 'app/darkmode/darkmode'

export interface LogoProps {
	img?: string
	imgLight?: string
}

const Logo: React.FC<LogoProps> = ({ img = logoImg, imgLight = logoLightImg }) => {
	const darkmodeState = useAppSelector(selectDarkmodeState)
	const [isDark, setIsDark] = useState(false)
	useEffect(() => {
		setIsDark(darkmodeState)
	}, [darkmodeState])
	return (
		<Link to='/' className='ttnc-logo inline-block text-primary-6000'>
			{/* THIS USE FOR MY MULTI DEMO */}
			{/* IF YOU ARE MY CLIENT. PLESE DELETE THIS CODE AND YOU YOUR IMAGE PNG BY BELLOW CODE */}
			{isDark ? <LogoDarkSvg /> : <LogoLightSvg />}
		</Link>
	)
}

export default Logo
