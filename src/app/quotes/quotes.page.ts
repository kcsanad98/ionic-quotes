import { Component, OnInit } from "@angular/core"
import { AuthService } from "../auth.service"
import { DataService } from "../data.service"

@Component({
    selector: "app-quotes",
    templateUrl: "./quotes.page.html",
    styleUrls: ["./quotes.page.scss"]
})
export class QuotesPage implements OnInit {
    public quotes: any = []

    constructor(private dataService: DataService, public authService: AuthService) {
        this.getQuotes()
        this.dataService.refreshQuotes.subscribe(() => this.getQuotes())
    }

    getQuotes() {
        this.dataService.getData("quotes").subscribe(data => (this.quotes = data))
    }

    ngOnInit() {}
}
