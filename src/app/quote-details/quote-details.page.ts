import { Component, OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { DataService } from "../data.service"

@Component({
    selector: "app-quote-details",
    templateUrl: "./quote-details.page.html",
    styleUrls: ["./quote-details.page.scss"]
})
export class QuoteDetailsPage implements OnInit {
    public quote: any

    constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) {}

    ngOnInit() {
        const id = this.activatedRoute.snapshot.paramMap.get("id")
        this.dataService.getData(`quotes/${id}`).subscribe(data => (this.quote = data))
    }
}
