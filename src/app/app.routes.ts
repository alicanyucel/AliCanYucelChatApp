import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "login",
        loadComponent: () => import("./components/login/login.component").then(m => m.LoginComponent)
    },
    {
        path: "register",
        loadComponent: () => import("./components/register/register.component").then(m => m.RegisterComponent)
    },
    {
        path: "",
        loadComponent: () => import("./components/layout/layout.component").then(m => m.LayoutComponent),
        children: [
            {
                path: "",
                loadComponent: () => import("./components/home/home.component").then(m => m.HomeComponent)
            },
            {
                path: "chat",  // "chaat" yerine "chat" olabilir, yazım hatası olmasın
                loadComponent: () => import("./components/chat/chat.component").then(m => m.ChatComponent)
            }
        ]
    },
    {
        path:"**", // adresi bulamadıysak
        loadComponent: () => import("./components/not-found/not-found.component").then(m => m.NotFoundComponent)
    }
];
