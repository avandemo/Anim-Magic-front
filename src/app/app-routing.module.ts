import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberComponent } from './components/member/member.component';
import { FormatTypeComponent } from './components/format-type/format-type.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'members', component: MemberComponent},
  { path: 'formatType', component: FormatTypeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
