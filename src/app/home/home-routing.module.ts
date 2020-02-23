import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent, HomeDetailComponent, HomeGrandComponent, HomeAuxComponent } from '.';


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
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
