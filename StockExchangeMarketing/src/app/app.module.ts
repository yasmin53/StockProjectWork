import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './user/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HighchartsChartModule } from "highcharts-angular";

import { UserService } from './services/user.service';
import { UsersComponent } from './users/users.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddUserComponent } from './add-user/add-user.component';
import { LoginComponent } from './login/login.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { PipesComponent } from './pipes/pipes/pipes.component';
import { CustompipePipe } from './custompipe.pipe';
import { AdminComponent } from './admin/admin.component';
import { ImportComponent } from './import/import.component';
import { AddnewcompanyComponent } from './addnewcompany/addnewcompany.component';
import { DeletecompanyComponent } from './deletecompany/deletecompany.component';
import { UpdatecompanyComponent } from './updatecompany/updatecompany.component';
import { UserlandingComponent } from './userlanding/userlanding.component';
import { UseripoComponent } from './useripo/useripo.component';
import { CompanyrelatedataComponent } from './companyrelatedata/companyrelatedata.component';
import { StockexchangeComponent } from './stockexchange/stockexchange.component';
import { StockpriceComponent } from './stockprice/stockprice.component';
import { CompaniesComponent } from './companies/companies.component';
import { StockexchangesComponent } from './stockexchanges/stockexchanges.component';
import { UpdatestockexchangeComponent } from './updatestockexchange/updatestockexchange.component';
import { StockpricesComponent } from './stockprices/stockprices.component';
import { UpdatestockpriceComponent } from './updatestockprice/updatestockprice.component';
import { IpoComponent } from './ipo/ipo.component';
import { UpdateipoComponent } from './updateipo/updateipo.component';
import { IposComponent } from './ipos/ipos.component';
import { ActivateComponent } from './activate/activate.component';
import { LogoutComponent } from './logout/logout.component';
import { ComparecompaniesComponent } from './comparecompanies/comparecompanies.component';
import { ComparesectorsComponent } from './comparesectors/comparesectors.component';
import { ChartsComponent } from './charts/charts.component';
import { HttpInterseptorService } from './http-interseptor.service';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,

    UsersComponent,

    AddUserComponent,

    LoginComponent,

    UpdateUserComponent,

    PipesComponent,

    CustompipePipe,

    AdminComponent,

    ImportComponent,

    AddnewcompanyComponent,

    DeletecompanyComponent,

    UpdatecompanyComponent,
    UserlandingComponent,
    UseripoComponent,
    CompanyrelatedataComponent,
    StockexchangeComponent,
    StockpriceComponent,
    CompaniesComponent,
    StockexchangesComponent,
    UpdatestockexchangeComponent,
    StockpricesComponent,
    UpdatestockpriceComponent,
    IpoComponent,
    UpdateipoComponent,
    IposComponent,
    ActivateComponent,
    LogoutComponent,
    ComparecompaniesComponent,
    ComparesectorsComponent,
    ChartsComponent,
    AdminUserComponent,
    ChangepasswordComponent,
    UserprofileComponent,
    UpdateprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HighchartsChartModule
  ],


  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterseptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }