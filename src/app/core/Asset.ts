

export class Asset {     

    constructor(pathToImg:string){
        const pathAssets:string = '../../assets'

        const asset = pathAssets + `/${pathToImg}`

        return asset
    }

}