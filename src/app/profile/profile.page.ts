import { Component, OnInit } from "@angular/core"
import { AuthService } from "../auth.service"
import { DataService } from "../data.service"

@Component({
    selector: "app-profile",
    templateUrl: "./profile.page.html",
    styleUrls: ["./profile.page.scss"]
})
export class ProfilePage implements OnInit {
    model: any = {}

    constructor(public authService: AuthService, private dataService: DataService) {}

    ngOnInit() {}

    public onLogin(f) {
        this.authService.postLogin(f.value).subscribe(
            data => {
                console.log(data)
                this.dataService.token = data["token"]
                this.authService.isAuthenticated.next(true)
            },
            err => {
                console.log(err)
                this.authService.isAuthenticated.next(false)
            }
        )
    }

    public onLogOut() {
        this.authService.isAuthenticated.next(false)
    }
}
