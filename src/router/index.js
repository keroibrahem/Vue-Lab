import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home';
import StudentDetails from '../components/StudentDetails';
import AddStudent from '../components/AddStudent';
import EditStudent from '../components/EditStudent';
import NotFound from '../components/NotFound.vue';


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/student/:id', name: 'StudentDetails', component: StudentDetails },
  { path: '/add', name: 'AddStudent', component: AddStudent },
  { path: '/edit/:id', name: 'EditStudent', component: EditStudent },
  { path: '/:catchAll(.*)', name: 'NotFound', component: NotFound },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
