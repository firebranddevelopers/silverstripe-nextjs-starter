import React from "react"
import { Navigation } from "@silverstripe/nextjs-toolkit"
import { Popover } from "@headlessui/react"
import MenuItem from "./MenuItem"
import DropdownMenuItem from "./DropdownMenuItem"
import { PageInterface } from "ss-schema"
import { useRouter } from "next/router"
import Link from "next/link"

interface Props {
  menuItems: Array<PageInterface>
}
const MainMenu = ({ menuItems }: Props): JSX.Element => {
  const router = useRouter()

<<<<<<< HEAD
const MainMenu = (): JSX.Element => {
    const router = useRouter()
    const menu = useStaticQuery<Query["readPages"]>(`
        query MainMenu {
            readPages(filter: { parentID: { eq: 0 } }) {
                nodes {
                    id
                    title
                    link
                    menuTitle
                }
            }
        }   
    `)
    const menuItems = menu?.readPages?.nodes ?? []
    return (
        <>
        <nav>
            <Navigation items={menuItems} router={router}>
                {(child, state) => {
                    return (
                        <div key={state.key}>
                            <Link href={child.link}>
                                <a className={state.linkingMode}>{child.menuTitle}</a>
                            </Link>
                        </div>
                    )
                }}
            </Navigation>
        </nav>
        <style jsx>{`
                nav {
                    display: flex;
                    gap: 1rem;
                }
                .current {
                    border-bottom: 2px solid;
                }
        `}</style>
        </>
    )
=======
  return (
    <Popover.Group as="nav" className="hidden md:flex space-x-10">
      <Navigation items={menuItems} router={router}>
        {(item, state) =>
          !state.hasChildren ? (
            <MenuItem
              key={state.key}
              link={item.link}
              title={item.menuTitle!}
            />
          ) : (
            <DropdownMenuItem
              key={state.key}
              link={item.link}
              title={item.menuTitle!}
            >
              <Popover.Panel className="absolute z-50 -ml-4 mt-8 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    <Navigation items={state.children} router={router}>
                      {(child, childState) => (
                        <Link href={child.link} key={childState.key}>
                          <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                                {child.menuTitle}
                              </p>
                            </div>
                          </a>
                        </Link>
                      )}
                    </Navigation>
                  </div>
                </div>
              </Popover.Panel>
            </DropdownMenuItem>
          )
        }
      </Navigation>
    </Popover.Group>
  )
>>>>>>> 4fc1360... Add theme
}

export default MainMenu
