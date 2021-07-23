import Loadable from 'react-loadable'

const Home = Loadable({
    loader:() => import('./Home/index'),
})

export{
    Home,
}