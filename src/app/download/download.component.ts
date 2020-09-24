import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-download",
  templateUrl: "./download.component.html",
  styleUrls: ["./download.component.css"],
})
export class DownloadComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    const url =
      "http://newsapi.org/v2/everything?q=bitcoin&from=2020-06-18&sortBy=publishedAt&apiKey=608a4f495f7a4e04a9cb4d9cfe05b1b7";
    this.http.get(url).subscribe((res) => {
      console.log(res);
    });
  }
}
