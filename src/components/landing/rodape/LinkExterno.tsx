import Link from "next/link"

interface LinkExternoProps {
    url: string
    texto: string
}

export default function LinkExterno(props: LinkExternoProps) {
    return (
        <Link href={props.url} target="_blank">
            <div className="text-zinc-500 cursor-pointer">
                {props.texto}
            </div>
        </Link>
    )
}