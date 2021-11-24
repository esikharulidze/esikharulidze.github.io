import React, { FC, Fragment, useState } from 'react'
import { PostAuthorType } from 'data/types'
import { NavLink } from 'react-router-dom'
import Avatar from 'components/Avatar/Avatar'
import { BackendUser } from 'types'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Popover, Transition } from '@headlessui/react'
import { NavItemType } from 'components/Navigation/NavigationItem'
import ncNanoId from 'utils/ncNanoId'
import ButtonPrimary from 'components/Button/ButtonPrimary'

export interface BookVisitProps {
	className?: string
	author?: BackendUser
	name?: string
	onLogout?: () => void
}

const BookVisit: FC<BookVisitProps> = ({ className = '', author, name, onLogout }) => {
	// const { firstName, lastName, avatar, jobTitle, slug } = author;
	// const displayName = `${firstName} ${lastName}`
	const [menuCurrentHovers, setMenuCurrentHovers] = useState<string[]>([])

	const onMouseEnterMenu = (id: string) => {
		setMenuCurrentHovers(state => [...state, id])
	}

	const onMouseLeaveMenu = (id: string) => {
		setMenuCurrentHovers(state => {
			return state.filter((item, index) => {
				return item !== id && index < state.indexOf(id)
			})
		})
	}

	const renderMainItem = (item: NavItemType) => {
		return (
			<NavLink
				exact
				strict
				target={item.targetBlank ? '_blank' : undefined}
				rel=''
				className='inline-flex items-center text-sm xl:text-base font-normal text-neutral-700 dark:text-neutral-300 py-2 px-2 xl:px-2 rounded-md'
				to={``}
				activeClassName='!font-semibold !text-neutral-900 dark:!text-neutral-100'
			>
				<div>
					<ButtonPrimary>ვიზიტის დაჯავშნა</ButtonPrimary>
				</div>
				{/* {item.type && ( */}
				{/* )} */}
			</NavLink>
		)
	}

	const renderDropdownMenuNavlink = (item: NavItemType) => {
		return (
			<NavLink
				exact
				strict
				target={item.targetBlank ? '_blank' : undefined}
				rel='noopener noreferrer'
				className='flex items-center font-normal text-neutral-6000 dark:text-neutral-300 py-1 px-1 rounded-md hover:text-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200'
				to={{
					pathname: item.href || undefined
				}}
				onClick={() => (item.href ? null : onLogout && onLogout())}
				activeClassName='font-semibold text-neutral-700 dark:!text-neutral-200'
			>
				{item.name === "ფსიქიატრთან" 
				? <ButtonPrimary className="w-full bg-yellow-500 hover:bg-yellow-500">{item.name}</ButtonPrimary>
				: <ButtonPrimary className="w-full bg-red-500 hover:bg-red-600">{item.name}</ButtonPrimary>
				}
				{item.type && (
					<ChevronDownIcon className='ml-2 h-4 w-4 text-neutral-500' aria-hidden='true' />
				)}
			</NavLink>
		)
	}

	const renderDropdownMenu = (menuDropdown: NavItemType) => {
		const isHover = menuCurrentHovers.includes(menuDropdown.id)
		return (
			<Popover
				as='div'
				className='menu-item menu-dropdown relative'
				// onMouseEnter={() => onMouseEnterMenu(menuDropdown.id)}
				onMouseDown={() => onMouseEnterMenu(menuDropdown.id)}
				onMouseLeave={() => onMouseLeaveMenu(menuDropdown.id)}
			>
				{() => (
					<>
						<Popover.Button as={Fragment}>{renderMainItem(menuDropdown)}</Popover.Button>
						<Transition
							as={Fragment}
							show={isHover}
							enter='transition ease-out duration-150'
							enterFrom='opacity-0 translate-y-1'
							enterTo='opacity-100 translate-y-0'
							leave='transition ease-in duration-150'
							leaveFrom='opacity-100 translate-y-0'
							leaveTo='opacity-0 translate-y-1'
						>
							<Popover.Panel
								static
								className='sub-menu nc-will-change-transform absolute transform z-10 w-56 pt-3 left-0'
							>
								<ul className='rounded-lg ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10 text-sm relative bg-white dark:bg-neutral-900 py-2 grid space-y-1'>
									{menuDropdown.children?.map((i: any) => {
										if (i.type) {
											// return renderDropdownMenuNavlinkHasChild(i);
										} else {
											return (
												<li key={i.id} className='px-2'>
													{renderDropdownMenuNavlink(i)}
												</li>
											)
										}
									})}
								</ul>
							</Popover.Panel>
						</Transition>
					</>
				)}
			</Popover>
		)
	}
	return (
		<>
			{renderDropdownMenu({
				id: 'ncNanoId()',
				href: '/services',
				name: 'სერვისები',
				type: 'dropdown',
				children: [
					// {
					//   id: ncNanoId(),
					//   href: "/services/individual",
					//   name: "ინდივიდუალური",
					// },
					{
						id: ncNanoId(),
						href: "survey/psychologist",
						name: "ფსიქოლოგთან",
					  },
					  {
						id: ncNanoId(),
						href: "/survey/psychiatrist",
						name: "ფსიქიატრთან",
					  },
				]
			})}
		</>
	)
}

export default BookVisit
