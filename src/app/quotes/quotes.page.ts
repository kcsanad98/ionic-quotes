import { Component, OnInit } from "@angular/core"
import { DataService } from "../data.service"

@Component({
    selector: "app-quotes",
    templateUrl: "./quotes.page.html",
    styleUrls: ["./quotes.page.scss"]
})
export class QuotesPage implements OnInit {
    public quotes: any = []

    constructor(private dataService: DataService) {
        this.dataService.getData("quotes").subscribe(data => (this.quotes = data))
    }

    ngOnInit() {}
}
