import { GeneralApiModel } from "./general-api-model"

export interface GenerationApiModel {
  abilities: []
  main_region: {}
  moves: []
  name: string
  pokemon_species: GeneralApiModel[]
  types: GeneralApiModel[]
  version_groups: GeneralApiModel[]
}
