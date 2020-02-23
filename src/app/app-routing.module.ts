import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeContainerComponent, HomeDetailComponent, HomeGrandComponent, HomeAuxComponent, ParentComponent } from './home';


const routes: Routes = [
    { 
        path: '', 
        redirectTo: 'home',
        pathMatch: 'full'
     },
    //  {
    //      path:'change-detection',
    //      pathMatch:'full',
    //      component: ParentComponent
    //  }

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
