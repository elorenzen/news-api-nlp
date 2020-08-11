import Vue from 'vue'
import Router from 'vue-router'

import Landing from '../components/Landing'
import AuthorList from '../components/AuthorList'
import PublicationList from '../components/PublicationList'
import SelectedAuthor from '../components/SelectedAuthor'
import SelectedPublication from '../components/SelectedPublication'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Landing',
            component: Landing
        },
        {
            path: '/authors',
            name: 'AuthorList',
            component: AuthorList
        },
        {
            path: '/publications',
            name: 'PublicationList',
            component: PublicationList
        },
        {
            path: '/author/:id',
            name: 'SelectedAuthor',
            component: SelectedAuthor
        },
        {
            path: '/publication/:id',
            name: 'SelectedPublication',
            component: SelectedPublication
        }
    ]
})