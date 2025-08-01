import Area from "../comum/Area";
import Depoimento from "./Depoimento";

export default function Depoimentos() {
    return (
        <Area id="depoimentos" className={`
            bg-gradient-to-r from-black via-zinc-900 to-black
            py-10 sm:py-20 scroll-smooth
        `}>
            <div className={`flex flex-col justify-center items-center`}>
                <h2 className="font-thin text-zinc-600 text-2xl sm:text-4xl mb-11 text-center">
                    As pessoas estão dizendo...
                </h2>
                <div className="flex justify-center xl:justify-between items-center justify-items-center gap-7 w-full flex-wrap">
                    <Depoimento
                        avatar="https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=723&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        nome="Lucas Almeida"
                        titulo="Designer Gráfico"
                        texto="Já perdi o controle das finanças várias vezes. Hoje, com organização e foco, mantenho as contas em dia e ainda consigo guardar dinheiro todo mês."
                    />
                    <Depoimento
                        avatar="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        nome="Mariana Costa"
                        titulo=" Analista de Dados"
                        texto="Eu não sabia para onde meu salário ia. Depois que comecei a acompanhar meus gastos, consegui sair do aperto e planejar meu futuro com mais segurança."
                        destaque
                    />
                    <Depoimento
                        avatar="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        nome="Thiago Menezes"
                        titulo="Técnico em Informática"
                        texto="Antigamente vivia no limite do cheque especial. Com disciplina e um bom controle financeiro, estou pagando dívidas e começando a investir."
                    />
                </div>
            </div>
        </Area>
    )
}