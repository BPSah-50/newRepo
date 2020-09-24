import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";
import { GetpasswordComponent } from "./getpassword/getpassword.component";
import { InputerorComponent } from "./inputeror/inputeror.component";
import { MobileotpComponent } from "./mobileotp/mobileotp.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SnackbarComponent } from "./snackbar/snackbar.component";
import { DownloadComponent } from "./download/download.component";
import { TableComponent } from "./table/table.component";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "download", component: DownloadComponent },
  { path: "signup", component: SignupComponent },
  { path: "getpasswd", component: GetpasswordComponent },
  { path: "input", component: InputerorComponent },
  { path: "otp", component: MobileotpComponent },
  { path: "navbar", component: NavbarComponent },
  { path: "snackbar", component: SnackbarComponent },
  { path: "table", component: TableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  SignupComponent,
  LoginComponent,
  GetpasswordComponent,
];
