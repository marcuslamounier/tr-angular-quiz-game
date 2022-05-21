export class Heart {
    constructor(
        public full: boolean = true,
        public urlFullHeart: string = "/assets/coracao_cheio.png",
        public urlEmptyHeart: string = "/assets/coracao_vazio.png"
    ){

    }
    public showHeart(): string {
        return (this.full ? this.urlFullHeart : this.urlEmptyHeart)
    }
}