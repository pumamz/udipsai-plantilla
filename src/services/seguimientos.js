import api from './api';

export const seguimientosService = {
  listarPorPaciente: async (id) => {
    try {
      const response = await api.get(`api/seguimientos/paciente/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener seguimientos del paciente:', error);
      throw error;
    }
  },

  crear: async (request) => {
    try {
      const response = await api.post('api/seguimientos', request);
      return response.data;
    } catch (error) {
      console.error('Error al crear seguimiento:', error);
      throw error;
    }
  },

  actualizar: async (id, request) => {
    try {
      const response = await api.put(`api/seguimientos/${id}`, request);
      return response.data;
    } catch (error) {
      console.error('Error al actualizar seguimiento:', error);
      throw error;
    }
  },

  eliminar: async (id) => {
    try {
      const response = await api.delete(`api/seguimientos/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al eliminar seguimiento:', error);
      throw error;
    }
  },

  subirArchivo: async (id, formData) => {
    try {
      const response = await api.post(`api/seguimientos/${id}/documento`, formData, {\n        headers: {\n          'Content-Type': 'multipart/form-data',\n        },\n      });\n      return response.data;\n    } catch (error) {\n      console.error('Error al subir archivo:', error);\n      throw error;\n    }\n  },\n\n  eliminarArchivo: async (id) => {\n    try {\n      const response = await api.delete(`api/seguimientos/documento/${id}`);\n      return response.data;\n    } catch (error) {\n      console.error('Error al eliminar archivo:', error);\n      throw error;\n    }\n  },\n};
