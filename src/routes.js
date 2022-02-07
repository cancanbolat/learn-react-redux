import Home from './views/Home'
import Profile from './views/Profile'
import About from './views/About'

export const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
        auth: false
    },
    {
        path: '/about',
        exact: true,
        component: About,
        auth: false
    },
    {
        path: '/profile',
        exact: true,
        component: Profile,
        auth: true
    },
]