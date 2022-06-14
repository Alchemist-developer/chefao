export interface Post {
    id: number,
    nome: string,
    email: string,
    apartamento: number,
    comentario: string,
    imagem: string
}

export interface User {
    id: number,
    nome: string,
    email: string,
    senha: string,
    apartamento: string,
    imagem: string
}