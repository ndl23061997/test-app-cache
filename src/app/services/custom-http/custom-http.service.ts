import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: "root"
})
export class CustomHttpService {
  options = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  constructor(private http: HttpClient, private storage: Storage) {}

  async get(url, options?, cb?) {
    if (!options) options = this.options;
    let cached = await this.storage.get(url);
    if (cb && cached) cb(cached);
    let data = await this.http.get(url, options).toPromise();
    if (data !== cached) {
      this.storage.set(url, data);
    }
    cb(data);
  }
}
