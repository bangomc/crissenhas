export class ItemSenha {

    public key: string;
    public nome: string;
    public descricao: string;
    public endereco: string;
    public userName: string;
    public userPass: string;

    constructor(key: string, nome: string, endereco: string, descricao: string, userName: string, userPass: string){
        this.key = key;
        this.nome = nome;
        this.endereco = endereco;
        this.descricao = descricao;
        this.userName = userName;
        this.userPass = userPass;
    };
}
