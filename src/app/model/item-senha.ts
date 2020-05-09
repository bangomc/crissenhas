export class ItemSenha {

    public id: number;
    public nome: string;
    public descricao: string;
    public endereco: string;
    public userName: string;
    public userPass: string;

    constructor(nome: string, endereco: string, descricao: string, userName: string, userPass: string){
        this.nome = nome;
        this.endereco = endereco;
        this.descricao = descricao;
        this.userName = userName;
        this.userPass = userPass;
    };
}
