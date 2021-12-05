import Vue from "vue";
import VueRouter from "vue-router";
import TokenService from './services/TokenService'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/inicio',
            alias: '/',
            name: 'Inicio',
            component: () => import("./components/Inicio")
        },
        {
            path: '/especialidades',
            name: 'Especialidades',
            component: () => import("./components/Especialidades")
        },
        {
            path: '/medicos/:especialidad',
            name: 'Medicos',
            component: () => import("./components/Medicos")
        },
        {
            path: '/medico/:id',
            name: 'Medico',
            component: () => import("./components/MedicoPerfil")
        },
        {
            path: '/programar-teleconsulta/:medicoId',
            name: 'Programar',
            component: () => import("./components/ProgramarTeleconsulta")
        },
        {
            path: '/calificaciones/:medicoId',
            name: 'Calificaciones',
            component: () => import("./components/Calificaciones")
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import("./components/Login")
        },
        {
            path: '/agendar-cita',
            name: 'AgendarCita',
            component: () => import("./components/AgendarCita")
        },
        {
            path: '/registro',
            name: 'Registro',
            component: () => import("./components/Registro")
        }
    ]
});

const routesAllowed = ["Login", "Registro"];

routesAllowed.includes();
router.beforeEach((to, from, next) => {
    if (!routesAllowed.includes(to.name) && !TokenService.isAuthenticate) {
        next({ name: 'Login' });
    } else {
        next();
    }
});

export default router;