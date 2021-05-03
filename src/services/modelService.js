export class ModelService {
    constructor(model) {
        this.model = model
        console.log(model.name)
    }

    async verify(id) {
        // if (id) {
            await this.model.findById({ _id: id }, (err, result) => {
                if (result) {
                    return { exists: true, message: `The ${this.model.name} does not exist`}
                } else {
                    return { exists: false, message: `The ${this.model.name} exist`}
                }
            })
        // }
        return { exists: false, message: `There is no is for ${this.model.name}`}
    }
}
