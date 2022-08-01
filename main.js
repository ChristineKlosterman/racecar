
export class Car {

    constructor(name, picture, number, distance) {
        this.name = name
        this.img = picture
        this.number = number
        this.distance = distance
    }



    get template() {
        return `
        <div class="row-12 justify-content-around m-3"><img img-fluid src="${this.img}"></img>
        </div>
        
        `
    }
}

