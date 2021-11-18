import React, { FC, Fragment, useState } from 'react'
import { PostAuthorType } from 'data/types'
import { NavLink } from 'react-router-dom'
import Avatar from 'components/Avatar/Avatar'
import { BackendUser } from 'types'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Popover, Transition } from '@headlessui/react'
import { NavItemType } from 'components/Navigation/NavigationItem'
import ncNanoId from 'utils/ncNanoId'

export interface CardUserProps {
	className?: string
	author?: BackendUser
	name?: string
	onLogout?: () => void
}

const CardUser: FC<CardUserProps> = ({ className = '', author, name, onLogout }) => {
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
				rel='noopener noreferrer'
				className='inline-flex items-center text-sm xl:text-base font-normal text-neutral-700 dark:text-neutral-300 py-2 px-2 xl:px-2 rounded-md hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200'
				to={`/dashboard`}
				activeClassName='!font-semibold !text-neutral-900 bg-neutral-100 dark:bg-neutral-800 dark:!text-neutral-100'
			>
				<Avatar
					sizeClass='h-10 w-10 text-base'
					containerClassName='flex-shrink-0 mr-3'
					radius='rounded-full'
					// imgUrl={avatar}
					// imgUrl="https://i.ibb.co/v36BcYv/1.jpg"
					userName={name}
					// userName={displayName}
				/>
				<div>
					<h2 className={`text-sm text-neutral-900 dark:text-neutral-100 font-semibold`}>
						{/* {displayName} */} გამარჯობა, {name?.toUpperCase()}
					</h2>
					<span className={`block mt-[1px] text-xs text-neutral-500 dark:text-neutral-400`}>
						{/* {jobTitle} */} გისურვებ წარმატებებს
					</span>
				</div>
				{/* {item.type && ( */}
				<ChevronDownIcon className='ml-1 -mr-1 h-4 w-4 text-neutral-400' aria-hidden='true' />
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
				className='flex items-center font-normal text-neutral-6000 dark:text-neutral-300 py-2 px-4 rounded-md hover:text-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200'
				to={{
					pathname: item.href || undefined
				}}
				onClick={() => (item.href ? null : onLogout && onLogout())}
				activeClassName='font-semibold text-neutral-700 dark:!text-neutral-200'
			>
				{item.name}
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
				onMouseEnter={() => onMouseEnterMenu(menuDropdown.id)}
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
								<ul className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10 text-sm relative bg-white dark:bg-neutral-900 py-4 grid space-y-1'>
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
			{/* <NavLink
      to={`/dashboard`}
      // to={`/team/${slug}`}
      className={`nc-CardAuthor flex items-center ${className}`}
      data-nc-id="CardAuthor"
    > */}
			{/* <Avatar
        sizeClass="h-10 w-10 text-base"
        containerClassName="flex-shrink-0 mr-3"
        radius="rounded-full"
        // imgUrl={avatar}
        imgUrl="https://i.ibb.co/v36BcYv/1.jpg"
        // userName={displayName}
      /> */}
			{/* <div>
        <h2
          className={`text-sm text-neutral-900 dark:text-neutral-100 font-semibold`}
        >
           გამარჯობა, ლევან
        </h2>
        <span
          className={`block mt-[1px] text-xs text-neutral-500 dark:text-neutral-400`}
        >
         გისურვებ წარმატებებს
        </span>
      </div>
      <ChevronDownIcon
            className="ml-2 h-4 w-4 text-neutral-500"
            aria-hidden="true"
          />
           */}
			{/* </NavLink> */}
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
						href: '/dashboard/profile',
						name: 'პროფილი'
					},
					{
						id: ncNanoId(),
						href: '/dashboard/edit-profile',
						name: 'პარამეტრები'
					},
					{
						id: ncNanoId(),
						href: '',
						name: 'გასვლა'
					}
				]
			})}
		</>
	)
}

export default CardUser
