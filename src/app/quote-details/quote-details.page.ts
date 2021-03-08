import { Component, OnInit } from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router"
import { AuthService } from "../auth.service"
import { DataService } from "../data.service"

@Component({
    selector: "app-quote-details",
    templateUrl: "./quote-details.page.html",
    styleUrls: ["./quote-details.page.scss"]
})
export class QuoteDetailsPage implements OnInit {
    public quote: any

    constructor(
        private activatedRoute: ActivatedRoute,
        private dataService: DataService,
        public authService: AuthService,
        private router: Router
    ) {}

    ngOnInit() {
        const id = this.activatedRoute.snapshot.paramMap.get("id")
        this.dataService.getData(`quotes/${id}`).subscribe(data => (this.quote = data))
    }

    public onDelete() {
        this.dataService.deleteData(`quotes/${this.quote.id}`).subscribe(() => this.refreshQuotes())
    }

    private refreshQuotes() {
        this.dataService.refreshQuotes.next()
        this.router.navigateByUrl("/tabs")
    }
}
