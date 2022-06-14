export interface Post {
    id: number,
    nome: string,
    email: string,
    apartamento: number,
    comentario: string,
    imagem: string
}

export interface SignIn {
    email: string,
    password: string
}

export interface User extends SignIn {
    id: number,
    password: string,
    confirmarSenha: string,
    apartamento: string,
    imagem: string
}

