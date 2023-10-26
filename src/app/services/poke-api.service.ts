import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { GenerationApiModel } from '../models/generation-api-model';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private baseUrl: string

  constructor(
    private readonly httpClient: HttpClient
  ) {
    this.baseUrl = environment.url
  }

  public getGenerationDetails = (generation: number) => {
    return this.httpClient.get<GenerationApiModel[]>(this.baseUrl)
  }


}
