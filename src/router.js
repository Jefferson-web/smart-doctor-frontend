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
        },
        {
            path: '/citas-agendadas',
            name: 'CitasAgendadas',
            component: () => import("./components/CitasAgendadas")
        },
        {
            path: '/indicaciones',
            name: 'Indicaciones',
            component: () => import("./components/Indicaciones")
        },
        {
            path: '/metodo-pago',
            name: 'MetodoPago',
            component: () => import("./components/MetodoPago")
        },
        {
            path: '/tarjeta-credito',
            name: 'TarjetaCredito',
            component: () => import("./components/TarjetaCredito")
        },
        {
            path: '/listar-pagos',
            name: 'ListarPagos',
            component: () => import("./components/ListarPagos")
        },
        {
            path: '/editar-datos',
            name: 'EditarDatos',
            component: () => import("./components/EditarDatos")
        }
    ]
});

const routesAllowed = ["Login", "Registro"];

router.beforeEach((to, from, next) => {
    if (!routesAllowed.includes(to.name) && !TokenService.isAuthenticate) {
        next({ name: 'Login' });
    } else {
        next();
    }
});

export default router;