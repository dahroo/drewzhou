import Link from "next/link"

export const Header = () => {
    return (
        <header className='flex flex-row items-center w-full justify-between sticky top-0 z-50 p-3 bg-gray-50 border-b border-gray-200'>
            <div>
                <Link key='home' href='/' className="text-xl font-bold">
                    drew zhou 
            </Link>
            </div>

            <div className="flex space-x-4">
                <Link key='writings' href='/writings' className="hover:italic hover:font-bold">
                    writings
                </Link>
                <Link key='projects' href='/projects' className="hover:italic hover:font-bold">
                    projects
                </Link>
                <Link key='about' href='/about' className="hover:italic hover:font-bold">
                    about
                </Link>
            </div>
        </header>
    )
}