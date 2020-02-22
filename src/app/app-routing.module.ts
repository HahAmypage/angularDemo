import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeContainerComponent, HomeDetailComponent, HomeGrandComponent, HomeAuxComponent, ParentComponent } from './home';


const routes: Routes = [
    { 
        path: 'home', 
        component: HomeContainerComponent,
        children:[
            {
                path:'',
                redirectTo: 'hot',
                pathMatch:'full'
            },
            {
                path:':tablink',
                component: HomeDetailComponent,
                children:[
                    {
                        path:'grand',
                        component:HomeGrandComponent
                    },
                    {
                        path:'aux',
                        component:HomeAuxComponent,
                        outlet:'second'
                    }
                ]
            }
        ]
     },
     {
         path:'change-detection',
         pathMatch:'full',
         component: ParentComponent
     }

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
