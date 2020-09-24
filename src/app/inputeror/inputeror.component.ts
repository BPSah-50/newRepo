import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from "@angular/forms";

@Component({
  selector: "app-inputeror",
  templateUrl: "./inputeror.component.html",
  styleUrls: ["./inputeror.component.css"],
})
export class InputerorComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this._fb.group({
      userName: ["", Validators.required],
      password: ["", Validators.required],
    });
  }
}
