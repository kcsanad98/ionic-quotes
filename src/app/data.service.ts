import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Subject } from "rxjs"
import { environment } from "src/environments/environment"

const apiUrl = environment.apiUrl

@Injectable({
    providedIn: "root"
})
export class DataService {
    public token
    public refreshQuotes = new Subject<number>()
    constructor(private http: HttpClient) {}

    public getData(url: string) {
        return this.http.get(`${apiUrl}/wp/v2/${url}`)
    }

    public postData(url: string, data: any) {
        const headers = new HttpHeaders({
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.token}`
        })
        return this.http.post(`${apiUrl}/wp/v2/${url}`, data, { headers: headers })
    }

    public putData(url: string, data: any) {
        const headers = new HttpHeaders({
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.token}`
        })
        return this.http.put(`${apiUrl}/wp/v2/${url}`, data, { headers: headers })
    }

    public deleteData(url: string) {
        const headers = new HttpHeaders({
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.token}`
        })
        return this.http.delete(`${apiUrl}/wp/v2/${url}`, { headers: headers })
    }
}
