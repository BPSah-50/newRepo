import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-mobileotp",
  templateUrl: "./mobileotp.component.html",
  styleUrls: ["./mobileotp.component.css"],
})
export class MobileotpComponent implements OnInit {
  mobileotp = new FormControl("", [Validators.required]);
  constructor() {}

  ngOnInit() {}
}
