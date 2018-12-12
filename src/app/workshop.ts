export class Workshop {
    constructor(
        public id:number,
        public name:string,
        public start:Date,
        public end:Date,
        public priceFull:number,
        public priceStudent:number,
        public priceFullLate:number,
        public priceStudentLate:number) {
    }
}