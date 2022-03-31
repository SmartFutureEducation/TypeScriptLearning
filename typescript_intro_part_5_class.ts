const recyclableWastes: string[] = ['Plastic', 'Metal', 'Paper'] 

class Waste{
    id: number = 0
    material: string = 'Unknown'
    weightInGram: number = 0
    wasteType: string = 'Unknown'
    description: string = ''

    constructor(id:number) {
        this.id = id;
    }

    selfIntro(){
        console.log(`Hello everyone, my waste number ${this.id}. I made with ${this.material}. In details, this is ${this.description}`)
    }

    classify(){
        if (recyclableWastes.indexOf(this.material) > -1){
            this.wasteType = 'Recyclable'
        }else{
            this.wasteType = 'Non-recyclable'
        } // definitely more categories can be added here
            
        console.log(`Because made of ${this.material}, I'm classified as ${this.wasteType}`)
    }
}

let totalWasteItems = 0
let wasteBottle1 = new Waste(totalWasteItems)
totalWasteItems ++
wasteBottle1.material = 'Plastic'
wasteBottle1.weightInGram = 50
wasteBottle1.description = 'Coco-cola 1.5L bottle.'
wasteBottle1.selfIntro()
wasteBottle1.classify()

let nappy1 = new Waste(totalWasteItems)
totalWasteItems ++
nappy1.material = 'Nappy'
nappy1.weightInGram = 25
nappy1.description = 'Baby nappy used'
nappy1.selfIntro()
nappy1.classify()
