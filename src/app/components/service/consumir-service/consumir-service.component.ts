import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-consumir-service',
  templateUrl: './consumir-service.component.html',
  styleUrls: ['./consumir-service.component.scss']
})
export class ConsumirServiceComponent implements OnInit {

  produtos!: Produto[]
  displayedColumns: string[] = ['idProduto', 'nomeProduto', 'precoProduto']

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
  }

  obterProdutos() {
    this.produtos = this.produtoService.getProdutos()
  }

}
