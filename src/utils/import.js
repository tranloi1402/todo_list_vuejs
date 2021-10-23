import { defineAsyncComponent } from "vue";

export function registerGlobalComponent(app) {
    app.component(
        "auth-layout", defineAsyncComponent(() => import("@/layout/auth.vue"))
    ),
    app.component(
        "default-layout", defineAsyncComponent(() => import("@/layout/default"))
    )
};
