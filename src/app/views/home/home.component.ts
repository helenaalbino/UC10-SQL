import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/models/produtos';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private produtoService: ProdutosService) { }

  listaProdutos = [] as Produtos[]

  ngOnInit(): void {
    this.carregarProdutos()
  }

  carregarProdutos(){
    this.produtoService.getProdutos().subscribe( (produtosRecebidos: Produtos[]) => {
      this.listaProdutos = produtosRecebidos;
      console.log(this.listaProdutos)
    })
  }

}
