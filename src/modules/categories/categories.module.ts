/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as categorieComponents from './components';

/* Containers */
import * as categoriesContainers from './containers';

/* Directives */

/* Guards */

/* Services */
import * as CategoriesService from './services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
    ],
    providers: [
        DecimalPipe,
        ...CategoriesService.services,
    ],
    declarations: [
        ...categoriesContainers.containers,
        ...categorieComponents.components,
    ],
    exports: [...categoriesContainers.containers, ...categorieComponents.components],
})
export class CategoriesModule {}
