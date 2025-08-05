'use client'
import { Avatar, Menu, } from "@mantine/core";
import { IconArrowsRightLeft, IconLogout, IconUser } from "@tabler/icons-react";
import usuario from "@/data/constants/usuarioFalso";
import Link from "next/link";

export default function MenuUsuario() {


    return (
        <Menu position="bottom-end" offset={10} arrowOffset={16} withArrow>
            <Menu.Target>
                <div className='flex items-center text-white gap-3 cursor-pointer'>
                    <div className='hidden md:flex flex-col select-none'>
                        <span className='text-sm font-bold text-zinc-200'>{usuario?.nome}</span>
                        <span className='text-xs text-zinc-400'>{usuario?.email}</span>
                    </div>
                    <Avatar
                        size={40}
                        radius="xl"
                        src={usuario?.imagemUrl ?? 'https://picsum.photos/100'}
                    />
                </div>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Label>Usuário</Menu.Label>
                <Link href="/">
                    <Menu.Item
                        leftSection={<IconArrowsRightLeft size={14} />}
                    >Finanças</Menu.Item>
                </Link>
                <Link href="/usuario">
                    <Menu.Item
                        leftSection={<IconUser size={14} />}
                    >Meus Dados</Menu.Item>
                </Link>

                <Menu.Divider />

                <Menu.Item
                    color="red"
                    leftSection={<IconLogout size={14} />}

                >Sair do Sistema</Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}


