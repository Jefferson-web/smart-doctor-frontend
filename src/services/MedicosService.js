import http from '../http-common';

class MedicosService {

    ListarEspecialidades(filtro_nombre = null) {
        let params = {};
        if (filtro_nombre != null) {
            params = { filtro_nombre };
        }
        return http.get('/ConocerMedicos/ListarEspecialidades', { params });
    }

    ListarMedicos(filtro_nombre, especialidad) {
        let params = { "filtro_nombre": filtro_nombre, "especialidadId": especialidad };
        return http.get('/ConocerMedicos/ListarMedicos', { params });
    }

    VerPerfil(medicoId) {
        return http.get(`/ConocerMedicos/VerPerfil/${medicoId}`);
    }

    ListarHorariosDisponibles(medicoId, fecha) {
        let params = { "medicoId": medicoId, "fecha": fecha };
        return http.get('/ProgramarCita/ListarHorariosDisponibles', { params });
    }

    VerCalificaciones(medicoId) {
        return http.get(`/EvaluarMedico/VerCalificaciones/${medicoId}`);
    }

    VerPromedioCalificacion(medicoId) {
        return http.get(`/EvaluarMedico/VerPromedioCalificacion/${medicoId}`);
    }

    InfoMedico(medicoId) {
        return http.get(`/EvaluarMedico/InfoMedico/${medicoId}`);
    }

    VerHorario(horarioId) {
        return http.get(`/GestionarConsultorio/VerHorario/${horarioId}`);
    }

    ProgramarCita(cita){
        return http.post('/ProgramarCita/Programar', cita);
    }

    ListarCitasPaciente(pacienteId){
        return http.get(`/GestionarAtenciones/ListarCitasPaciente/${pacienteId}`);
    }

    VerDetalleCita(citaId){
        return http.get(`/GestionarAtenciones/VerDetalles/${citaId}`);
    }

    ListarTiposDePago(){
        return http.get('/Pagos/ListarTiposDePago');
    }

    RegistrarPago(pago){
        return http.post('/Pagos/RegistrarPago', pago);
    }

    ListarPagos(pacienteId){
        return http.get(`/Pagos/ListarPagos/${pacienteId}`);
    }

}

export default new MedicosService();