import { IconBrandGoogle } from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function Menu() {

    function loginGoogle() {
        alert("Login Google")
    }

    return (
        <div className="flex gap-2">
            <MenuItem url="#inicio" className="hidden sm:flex">
                Início
            </MenuItem>
            <MenuItem url="#vantagens" className="hidden sm:flex">
                Vantagens
            </MenuItem>
            <MenuItem url="#depoimentos" className="hidden sm:flex">
                Depoimentos
            </MenuItem>
            <MenuItem onClick={loginGoogle} className="bg-[#14c8d0] ">
                <div className="flex items-center gap-2 text-zinc-600 font-semibold">
                    <span><IconBrandGoogle size={15} /></span>
                    <span>Login</span>
                </div>
            </MenuItem>

        </div>
    )
}