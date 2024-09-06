import Image from "next/image"

export const Footer = () => {
    return (
        <footer className='flex flex-col items-center w-full justify-center p-3 border-t border-gray-200'>
            <Image
                src="/spade.svg"
                alt="Spade Icon"
                width={14}
                height={14}
                className="transform transition-transform duration-1000 hover:-translate-y-1"
            />
            sic semper tyrannis
        </footer>
    )
}