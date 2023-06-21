import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/category.model';
import { CategoryService } from '../shared/category.service';
import toastr from 'toastr';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  public categoreis: Category[] = [];
  public indiceInicial = 0;
  public indiceFinal = 5;
  public qtdpaginas = 5;
  constructor(private categoryservice: CategoryService) { }

  ngOnInit(): void {
    this.categoryservice.getAll().subscribe(
      categoreis => this.categoreis = categoreis,
      error => alert('Error a o carregar as tarefas')
    )
  }


  public deletarCategorias(category): any {

    const mustDelete = toastr.success('Tarefa excluida com sucesso')
    


    if (mustDelete) {
      this.categoryservice.delete(category.id).subscribe(
        () => this.categoreis = this.categoreis.filter(element => element != category),
        () => toastr.error('Error a o excluir')
      )
    }
  }


  public alterarPagina(event) {

    this.qtdpaginas = event.pageSize;

    this.indiceInicial = event.pageIndex * this.qtdpaginas;

    this.indiceFinal = this.indiceInicial + this.qtdpaginas
    
  }
}
