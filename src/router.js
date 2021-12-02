import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            alias: '/',
            component: () => import("./components/Inicio")
        },
        {
            path: '/especialidades',
            component: () => import("./components/Especialidades")
        },
        {
            path: '/medicos/:especialidad',
            component: () => import("./components/Medicos")
        },
        {
            path: '/medico/:id',
            component: () => import("./components/MedicoPerfil")
        },
        {
            path: '/programar-teleconsulta/:medicoId',
            component: () => import("./components/ProgramarTeleconsulta")
        }
    ]
});

