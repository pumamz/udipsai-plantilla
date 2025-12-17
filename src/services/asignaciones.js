import api from './api';

export const asignacionesService = {
  buscar: async (formData) => {
    try {
      const response = await api.post('api/asignaciones/buscar', formData);
      return response.data;
    } catch (error) {
      console.error('Error al buscar asignaciones:', error);
      throw error;
    }
  },

  obtenerPorPasante: async (cedula) => {
    try {
      const response = await api.get(`api/asignaciones/pasante/${cedula}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener asignaciones del pasante:', error);
      throw error;
    }
  },

  asignar: async (pacienteId, pasanteId) => {
    try {
      const response = await api.post('api/asignaciones/asignar', {
        pacienteId,
        pasanteId,
      });
      return response.data;
    } catch (error) {
      console.error('Error al asignar paciente:', error);
      throw error;
    }
  },

  eliminar: async (asignacionId) => {
    try {
      const response = await api.delete(`api/asignaciones/eliminar/${asignacionId}`);
      return response.data;
    } catch (error) {
      console.error('Error al eliminar asignación:', error);
      throw error;
    }
  },
};
