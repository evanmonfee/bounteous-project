import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsModule)
  },
  {
    path: "tabs",
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
