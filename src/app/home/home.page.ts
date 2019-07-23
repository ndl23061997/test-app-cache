import { Component } from "@angular/core";
import { CustomHttpService } from "../services/custom-http/custom-http.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  items = [];
  constructor(private mhttp: CustomHttpService) {
    this.initialize();
  }

  async initialize() {
    let url = "https://jsonplaceholder.typicode.com/todos";
    this.mhttp.get(url, undefined, data => {
      console.log(data);
      this.items = data;
    });
  }
}
