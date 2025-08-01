import Area from "../comum/Area";
import Slogan from "./Slogan";
import principal from "../../../../public/principal.png"
import ImagensResponsiva from "../comum/ImagensResponsiva";

export default function Destaque() {
    return (
        <Area id="inicio" className="pt-20">
            <div className={`flex items-center justify-around h-[500px]`}>
                <Slogan />
                <ImagensResponsiva
                    imagem={principal}
                    className="rotate-3 hidden md:inline"
                />

            </div>

        </Area>
    )
}