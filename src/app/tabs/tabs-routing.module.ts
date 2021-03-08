import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { TabsPage } from "./tabs.page"

const routes: Routes = [
    {
        path: "tabs",
        component: TabsPage,
        children: [
            {
                path: "quotes",
                loadChildren: () => import("../quotes/quotes.module").then(m => m.QuotesPageModule)
            },
            {
                path: "quotes/edit-quote",
                loadChildren: () => import("../edit-quote/edit-quote.module").then(m => m.EditQuotePageModule)
            },
            {
                path: "quotes/:id/edit",
                loadChildren: () => import("../edit-quote/edit-quote.module").then(m => m.EditQuotePageModule)
            },
            {
                path: "quotes/:id",
                loadChildren: () => import("../quote-details/quote-details.module").then(m => m.QuoteDetailsPageModule)
            },
            {
                path: "about",
                loadChildren: () => import("../about/about.module").then(m => m.AboutPageModule)
            },
            {
                path: "profile",
                loadChildren: () => import("../profile/profile.module").then(m => m.ProfilePageModule)
            },
            {
                path: "",
                redirectTo: "/tabs/quotes",
                pathMatch: "full"
            }
        ]
    },
    {
        path: "",
        redirectTo: "/tabs/quotes",
        pathMatch: "full"
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class TabsPageRoutingModule {}
