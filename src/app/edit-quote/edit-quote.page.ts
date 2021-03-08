import { Component, OnInit } from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router"
import { DataService } from "../data.service"

@Component({
    selector: "app-edit-quote",
    templateUrl: "./edit-quote.page.html",
    styleUrls: ["./edit-quote.page.scss"]
})
export class EditQuotePage implements OnInit {
    public model: any = {}
    private id

    constructor(private dataService: DataService, private router: Router, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.id = this.activatedRoute.snapshot.paramMap.get("id")
        if (this.id) {
            this.dataService.getData(`quotes/${this.id}`).subscribe(data => {
                this.model = {
                    title: data["title"].rendered,
                    writer: data["writer"],
                    status: data["status"]
                }
            })
        }
    }

    public onSave(f) {
        if (this.id) {
            this.dataService.putData(`quotes/${this.id}`, f.value).subscribe(() => this.refreshQuotes())
        } else {
            this.dataService.postData("quotes", f.value).subscribe(() => this.refreshQuotes())
        }
    }

    private refreshQuotes() {
        this.dataService.refreshQuotes.next()
        this.router.navigateByUrl("/tabs")
    }
}
