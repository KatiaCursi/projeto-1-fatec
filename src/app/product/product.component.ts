import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products : Product[] = [
    {"id": 1, 
    "name": "Fone", 
    "price": 100,
    "category": "Eletrônico"
  },
  {"id": 2, 
    "name": "Celular", 
    "price": 2000,
    "category": "Eletrônico"
  },
  {"id": 3, 
    "name": "Açaí", 
    "price": 20,
    "category": "Alimento"
  },
  {"id": 4, 
    "name": "Camiseta", 
    "price": 40,
    "category": "Vestuário"
  },

  ];

}
