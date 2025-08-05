import BoasVindas from "./BoasVindas";
import MenuUsuario from "./MenuUsuario";

export default function Cabecalho() {
    return (

        <div className=" flex justify-between items-center p-8 border-b border-zinc-500 text-white">
            <BoasVindas />
            <MenuUsuario />
        </div>

    )
}