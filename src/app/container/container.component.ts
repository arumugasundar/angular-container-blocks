import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  products: any = [];
  showInfo: boolean = false;

  constructor(private productsService: ProductsService){ }

  ngOnInit(): void {

    this.productsService.getProducts().subscribe(data => {
      this.products = [];
      this.products = data;
    });

  }

}
