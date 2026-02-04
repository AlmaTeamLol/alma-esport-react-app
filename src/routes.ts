import type { RouteConfig } from "@react-router/dev/routes";
import { index, layout, route } from "@react-router/dev/routes";

export default [
    layout("layouts/navigation.tsx", [
        index("routes/home.tsx"),
        route("team", "routes/team.tsx"),
        route("member", "routes/member.tsx"),
        route("tierlist", "routes/tierlist.tsx"),
        route("about", "routes/about.tsx"),
        route("contact", "routes/contact.tsx"),
    ]),
] satisfies RouteConfig;