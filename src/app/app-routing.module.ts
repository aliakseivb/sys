import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./shared/layout/layout.component";
import {MainComponent} from "./views/main/main.component";
import {PolicyComponent} from "./views/policy/policy.component";
import {TermsComponent} from "./views/terms/terms.component";

const routes: Routes = [
  {path: '',
  component: LayoutComponent,
    children: [
      {path: '', component: MainComponent},
      {path: 'policy', component: PolicyComponent},
      {path: 'terms', component: TermsComponent},
      {path: '', loadChildren: () => import('./views/user/user.module').then(m => m.UserModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
