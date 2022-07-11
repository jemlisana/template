/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { CategoriesModule } from './categories.module';

/* Containers */
import * as categoriesContainers from './containers';

/* Guards */
import { SBRouteData } from '@modules/navigation/models';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: categoriesContainers.CategoriesComponent,
        data: {
            title: 'Categories - SB Admin Angular',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Categories',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [CategoriesModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class CategoriesRoutingModule {}