import { useEffect } from "react";
import { NextComponentType } from "next";
import { useRouter } from "next/router";

import routeRewriter from "@/routes/route-rewriter/route-rewriter";


export function routeRewriterComponent(Component: NextComponentType<any>) {
    const RouteRewriterComponent = (props: any) => {
        const router = useRouter()
        const currentPath = router.asPath
        const newRoute = routeRewriter.rewriteRoute(currentPath)

        useEffect(() => {
            if (newRoute !== currentPath) {
                router.push(newRoute)
            }
        })

        if (newRoute !== currentPath) {
            return <div> Redirecting </div>
        }

        return <Component {...props} />
    };

    if (Component.getInitialProps) {
        RouteRewriterComponent.getInitialProps = Component.getInitialProps;
    }

    return RouteRewriterComponent;
}