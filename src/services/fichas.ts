import api from './api';

export const fichasService = {
  // Historial de cambios
  obtenerHistorial: async (id: number | string) => {
    try {
      const response = await api.get(`api/historial-cambios/listar/todos/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener historial:', error);
      throw error;
    }
  },

  // Ficha Médica
  obtenerFichaMedica: async (id: number | string) => {
    try {
      const response = await api.get(`api/fichas-medicas/paciente/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener ficha médica:', error);
      throw error;
    }
  },

  actualizarFichaMedica: async (id: number | string, request: any) => {
    try {
      const response = await api.put(`api/fichas-medicas/${id}`, request);
      return response.data;
    } catch (error) {
      console.error('Error al actualizar ficha médica:', error);
      throw error;
    }
  },

  obtenerReporteFichaMedica: async (id: number | string) => {
    try {
      const response = await api.get(`api/fichas-medicas/${id}/reporte`, {
        responseType: 'blob',
      });
      return response.data;
    } catch (error) {
      console.error('Error al obtener reporte ficha médica:', error);
      throw error;
    }
  },

  // Psicología Educativa
  obtenerPsicologiaEducativa: async (id: number | string) => {
    try {
      const response = await api.get(`api/psicologia-educativa/paciente/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener psicología educativa:', error);
      throw error;
    }
  },

  actualizarPsicologiaEducativa: async (id: number | string, request: any) => {
    try {
      const response = await api.put(`api/psicologia-educativa/${id}`, request);
      return response.data;
    } catch (error) {
      console.error('Error al actualizar psicología educativa:', error);
      throw error;
    }
  },

  obtenerReportePsicologiaEducativa: async (id: number | string) => {
    try {
      const response = await api.get(`api/psicologia-educativa/${id}/reporte`, {
        responseType: 'blob',
      });
      return response.data;
    } catch (error) {
      console.error('Error al obtener reporte psicología educativa:', error);
      throw error;
    }
  },

  // Psicología Clínica
  obtenerPsicologiaClinica: async (id: number | string) => {
    try {
      const response = await api.get(`api/psicologia-clinica/paciente/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener psicología clínica:', error);
      throw error;
    }
  },

  actualizarPsicologiaClinica: async (id: number | string, request: any) => {
    try {
      const response = await api.put(`api/psicologia-clinica/${id}`, request);
      return response.data;
    } catch (error) {
      console.error('Error al actualizar psicología clínica:', error);
      throw error;
    }
  },

  obtenerReportePsicologiaClinica: async (id: number | string) => {
    try {
      const response = await api.get(`api/psicologia-clinica/${id}/reporte`, {
        responseType: 'blob',
      });
      return response.data;
    } catch (error) {
      console.error('Error al obtener reporte psicología clínica:', error);
      throw error;
    }
  },

  // Fonoaudiología
  obtenerFonoaudiologia: async (id: number | string) => {
    try {
      const response = await api.get(`api/fonoaudiologia/paciente/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener fonoaudiología:', error);
      throw error;
    }
  },

  actualizarFonoaudiologia: async (id: number | string, request: any) => {
    try {
      const response = await api.put(`api/fonoaudiologia/${id}`, request);
      return response.data;
    } catch (error) {
      console.error('Error al actualizar fonoaudiología:', error);
      throw error;
    }
  },

  obtenerReporteFonoaudiologia: async (id: number | string) => {
    try {
      const response = await api.get(`api/fonoaudiologia/${id}/reporte`, {
        responseType: 'blob',
      });
      return response.data;
    } catch (error) {
      console.error('Error al obtener reporte fonoaudiología:', error);
      throw error;
    }
  },

  // Eliminar fichas
  eliminarFichaDiagnostica: async (documentoId: number | string) => {
    try {
      const response = await api.delete(`api/pacientes/documentos/${documentoId}`);
      return response.data;
    } catch (error) {
      console.error('Error al eliminar ficha diagnóstica:', error);
      throw error;
    }
  },

  eliminarFichaCompromiso: async (documentoId: number | string) => {
    try {
      const response = await api.delete(`api/pacientes/fichaCompromiso/${documentoId}`);
      return response.data;
    } catch (error) {
      console.error('Error al eliminar ficha compromiso:', error);
      throw error;
    }
  },

  eliminarFichaUnica: async (documentoId: number | string) => {
    try {
      const response = await api.delete(`api/pacientes/fichaUnica/${documentoId}`);
      return response.data;
    } catch (error) {
      console.error('Error al eliminar ficha única:', error);
      throw error;
    }
  },
};
