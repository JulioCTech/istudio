import Logo from "../comum/Logo"
import Area from "../comum/Area"
import Links from "./Links"
import LinkExterno from "./LinkExterno"
import RedesSociais from "./RedeSociais"

export default function Rodape() {
    return (
        <Area className="bg-black text-white py-10 sm:py-20">
            <div className="flex flex-col items-center md:items-stretch">
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-7 sm:gap-0 text-center sm:text-left">
                    <div className="flex flex-col items-center sm:items-start mb-7 sm:mb-0">
                        <Logo />
                        <div className="mt-3 text-zinc-400">
                            <div>Plataforma financeira</div>
                            <div className="flex gap-1.5">que <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">simplifica</span> sua vida</div>
                        </div>
                    </div>
                    <Links titulo="Projetos">
                        <LinkExterno texto="DevPet" url="" />
                        <LinkExterno texto="Dashboard" url="" />
                        <LinkExterno texto="Crud" url="" />
                    </Links>
                    <Links titulo="iStudio">
                        <LinkExterno texto="JavaScript" url="" />
                        <LinkExterno texto="NextJS" url="" />
                        <LinkExterno texto="Blog" url="" />
                    </Links>
                    <Links titulo="Contato">
                        <LinkExterno texto="Julinhubbs@gmailcom" url="" />
                        <LinkExterno texto="Dúvidas" url="https://google.com" />
                        <LinkExterno texto="WhatsApp" url="https://google.com" />
                    </Links>
                </div>

                <div className="flex flex-col md:flex-row md:justify-between items-center mt-14">
                    <RedesSociais />
                    <p className="text-zinc-100 mt-7 md:mt-0 text-center">
                        <span className="font-bold">iStudio<span className="text-[#14c8d0]">J</span>S</span> ® {new Date().getFullYear()} - Todos os direitos reservados
                    </p>
                </div>
            </div>
        </Area>
    )
}