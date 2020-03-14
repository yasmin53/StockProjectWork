import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './user/register/register.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { LoginComponent } from './login/login.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { PipesComponent } from './pipes/pipes/pipes.component';
import { AdminComponent } from './admin/admin.component';
import { ImportComponent } from './import/import.component';
import { AddnewcompanyComponent } from './addnewcompany/addnewcompany.component';
import { UpdatecompanyComponent } from './updatecompany/updatecompany.component';
import { DeletecompanyComponent } from './deletecompany/deletecompany.component';
import { UseripoComponent } from './useripo/useripo.component';
import { CompanyrelatedataComponent } from './companyrelatedata/companyrelatedata.component';
import { StockexchangeComponent } from './stockexchange/stockexchange.component';
import {  StockpricesComponent } from './stockprices/stockprices.component';
import { UserlandingComponent } from './userlanding/userlanding.component';
import { CompaniesComponent } from './companies/companies.component';
import { StockexchangesComponent } from './stockexchanges/stockexchanges.component';
import { UpdatestockexchangeComponent } from './updatestockexchange/updatestockexchange.component';
import { StockpriceComponent } from './stockprice/stockprice.component';
import { UpdatestockpriceComponent } from './updatestockprice/updatestockprice.component';
import { IpoComponent } from './ipo/ipo.component';
import { IposComponent } from './ipos/ipos.component';
import { UpdateipoComponent } from './updateipo/updateipo.component';
import { ActivateComponent } from './activate/activate.component';
import { LogoutComponent } from './logout/logout.component';
import { ChartsComponent } from './charts/charts.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ComparecompaniesComponent } from './comparecompanies/comparecompanies.component';
const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'users',component: UsersComponent},
  {path:'add-user',component: AddUserComponent },
  {path:'login',component: LoginComponent},
  {path:'update-user',component:UpdateUserComponent},
  {path:'admin',component:AdminComponent},
  {path:'import',component:ImportComponent},
  {path:'addnewcompany',component:AddnewcompanyComponent},
  {path:'updatecompany',component:UpdatecompanyComponent},
  {path:'deletecompany',component:DeletecompanyComponent},
  {path:'userlanding',component:UserlandingComponent},
  {path:'useripo',component:UseripoComponent},
  {path:'companyrelatedata',component:CompanyrelatedataComponent},
  {path:'stockexchange',component:StockexchangeComponent},
  {path:'stockexchanges',component:StockexchangesComponent},
  {path:'updatestockexchange',component:UpdatestockexchangeComponent},
 
  
  {path:'stockprice',component:StockpriceComponent},
  {path:'stockprices',component:StockpricesComponent},
  {path:'updatestockprices',component:UpdatestockpriceComponent},
  {path:'companies',component:CompaniesComponent},
  {path:'ipo',component:IpoComponent},
  {path:'ipos',component:IposComponent},
  {path:'updateipo',component: UpdateipoComponent},
  {path:'activate',component: ActivateComponent},
  {path:'logout',component: LogoutComponent},
  {path:'charts',component: ChartsComponent},
  {path:'admin-user',component: AdminUserComponent},
  {path:'userprofile',component: UserprofileComponent},
  {path:'updateuser',component: UpdateUserComponent},
  {path:'changepassword',component: ChangepasswordComponent},
  {path:'comparecompanies',component:ComparecompaniesComponent},
  
  
  

  
  // {path:'pipes',component:PipesComponent},
  {path:'**',component: HomeComponent}   
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }