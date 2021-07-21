import{

} from '@/views'

const ROOT_ROUTE = '/couple';
const HOME_PAGE = `${ROOT_ROUTE}/home`;
const mainRoutes = [
    {
        key:'home',
        component: HOME_PAGE,
        title: '首页',
        homePage:true,
    }
];
const NAV_ITEMS = [
    {
        key:'home',
        title:'首页',
    }
]

export {
    mainRoutes,
    ROOT_ROUTE,
    HOME_PAGE,
}