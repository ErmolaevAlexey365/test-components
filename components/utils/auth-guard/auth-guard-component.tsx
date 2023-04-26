import React, { useEffect, useState } from "react";
import { NextComponentType } from "next";
import { useRouter } from "next/router";

import { AppRoutes } from "@/routes/app-routes";
import authService from "@/services/auth/auth-service";

function getAuthFinishedState() {
    const [finishedRegistration, setFinishedRegistration] = useState(
        authService.activeSession?.data?.finishedRegistration || false
    )

    useEffect(() => {
        const subscription = authService.subscribe('sessionUpdated', () => {
            const newFinishedRegistration = authService.activeSession?.data?.finishedRegistration || false
            if (newFinishedRegistration !== finishedRegistration) {
                setFinishedRegistration(authService.activeSession?.data?.finishedRegistration || false)
            }
        })

        return () => {
            subscription.unsubscribe()
        }
    }, [finishedRegistration])

    return finishedRegistration
}

export function withAuthGuard(Component: NextComponentType<any>) {
    const AuthGuard = (props: any) => {
        const router = useRouter()
        const [routerPath] = useState(router.asPath)
        const authFinishedState = getAuthFinishedState()
        const shouldRedirect = AppRoutes.isJobSeekerRoute(routerPath) &&
            !AppRoutes.isRoute(routerPath, AppRoutes.auth) &&
            !AppRoutes.isRoute(routerPath, AppRoutes.login) &&
            !authFinishedState

        useEffect(() => {
            if (shouldRedirect) {
                AppRoutes.push(router, AppRoutes.auth)
            }
        }, [authFinishedState])

        return <Component {...props} />
    };

    // Copy getInitial props so it will run as well
    if (Component.getInitialProps) {
        AuthGuard.getInitialProps = Component.getInitialProps
    }

    return AuthGuard
}