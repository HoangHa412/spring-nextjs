import {ReactNode} from "react";

export interface MenuBase {
    key: string
    label: string
    href?: string
}

export interface MenuItem extends MenuBase {
    children?: ReactNode
}

export interface Users{
    id: number
    username: string
    email: string
    phone: string
    password: string
    fullname: string
    created_at: string
    create_by:string
    updated_at: string
    update_by: string
}
