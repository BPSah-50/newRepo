import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";
import { GetpasswordComponent } from "./getpassword/getpassword.component";
import { InputerorComponent } from "./inputeror/inputeror.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { from } from "rxjs";
import { MobileotpComponent } from "./mobileotp/mobileotp.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SnackbarComponent } from "./snackbar/snackbar.component";
import { DownloadComponent } from "./download/download.component";
import { TableComponent } from "./table/table.component";
import { ToastrModule } from "ngx-toastr";
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    GetpasswordComponent,
    InputerorComponent,
    MobileotpComponent,
    NavbarComponent,
    SnackbarComponent,
    DownloadComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
