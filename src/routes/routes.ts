import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

const LazyLayout = lazy(() => import(/* webpackChunkName: 'LazyLayout' */ "../01-lazyload/layout/LazyLayout"));

type JSXComponent = () => JSX.Element;

type Route = {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent>|JSXComponent;
    name: string;
};
// This is a type definition for a route object. It includes the following properties:
// - `to`: a string representing the URL path to navigate to.
// - `path`: a string representing the path of the route.
// - `Component`: a React component that will be rendered when the route is matched.
// - `name`: a string representing the name of the route.
// This type can be used to define an array of route objects, which can be used for routing in a React application.
// The `Route` type is used to define the structure of a route object in a React application.
// The `to` property is used to specify the URL path to navigate to when the route is matched.
// The `path` property is used to specify the path of the route.
// The `Component` property is a React component that will be rendered when the route is matched.       

export const routes: Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload/',
        Component: LazyLayout,
        name: 'Lazy layout',
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: NoLazy,
        name: 'No Lazyload',
    },
];