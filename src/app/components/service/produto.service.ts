import { Injectable } from '@angular/core';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() { }

  public getProdutos() {

    let produtos: Produto[];

    produtos = [
      new Produto(1, 'Sabre de luz', 199),
      new Produto(2, 'Mascara Darth Vader', 159),
      new Produto(3, 'Nave espacial Han Solo', 25800)
    ]

    return produtos
  }
}
