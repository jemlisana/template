import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '@modules/categories/services/categories.service';

@Component({
  selector: 'sb-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {
  categories: any;
  constructor(private categorieService: CategoriesService) { }

  ngOnInit(): void {
    this.readCategories();
  }
  readCategories(): void {
    this.categorieService.readAll()
      .subscribe(
        (categories) => {
          
          this.categories = categories;
          console.log(categories);
        },
        (        error) => {
          console.log(error);
        });
  }
}
