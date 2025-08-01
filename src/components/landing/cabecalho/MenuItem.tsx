import Link from "next/link";
import { ReactNode } from "react";

interface MenuItemProps {
    children: ReactNode
    url?: string
    onClick?: () => void
    className?: string
}

export default function MenuItem(props: MenuItemProps) {
    function renderizarBotão() {
        return (
            <div className={`
            flex justify-center items-center cursor-pointer
            text-zinc-300 m-2 p-4 rounded-md h-9
            ${props.className ?? ''}
            `}
                onClick={props.onClick}>

                {props.children}

            </div>
        )
    }
    return props.url ? (
        <Link href={props.url ?? ''}>{renderizarBotão()}</Link>
    ) : renderizarBotão()
}