import api from './api';

export const pacientesService = {
  crear: async (request) => {
    try {
      const response = await api.post('api/pacientes/insertar', request);
      return response.data;
    } catch (error) {
      console.error('Error al crear paciente:', error);
      throw error;
    }
  },

  actualizar: async (id, request) => {
    try {
      const response = await api.put(`api/pacientes/actualizar/${id}`, request);
      return response.data;
    } catch (error) {
      console.error('Error al actualizar paciente:', error);
      throw error;
    }
  },

  obtenerPorId: async (id) => {
    try {
      const response = await api.get(`api/pacientes/listar/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener paciente:', error);
      throw error;
    }
  },

  buscar: async (formData) => {
    try {
      const response = await api.post('api/pacientes/buscar', formData);
      return response.data;
    } catch (error) {
      console.error('Error al buscar pacientes:', error);
      throw error;
    }
  },

  subirArchivo: async (formData) => {
    try {
      const response = await api.post('api/pacientes/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error al subir archivo:', error);
      throw error;
    }
  },

  subirFichaDiagnostica: async (id, formData) => {
    try {
      const response = await api.post(`api/pacientes/${id}/documento`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error al subir ficha diagnóstica:', error);
      throw error;
    }
  },

  subirFichaCompromiso: async (id, formData) => {
    try {
      const response = await api.post(`api/pacientes/${id}/fichaCompromiso`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error al subir ficha compromiso:', error);
      throw error;
    }
  },

  subirFichaUnica: async (id, formData) => {
    try {
      const response = await api.post(`api/pacientes/${id}/fichaUnica`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error al subir ficha única:', error);
      throw error;
    }
  },

  obtenerReporteGeneral: async (id) => {
    try {
      const response = await api.get(`api/pacientes/${id}/reporte-general`, {
        responseType: 'blob',
      });
      return response.data;
    } catch (error) {
      console.error('Error al obtener reporte general:', error);
      throw error;
    }
  },

  eliminarDocumento: async (id) => {
    try {
      const response = await api.delete(`api/documentos/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al eliminar documento:', error);
      throw error;
    }
  },
};
