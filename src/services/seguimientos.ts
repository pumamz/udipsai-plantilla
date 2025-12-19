import api from './api';

export const seguimientosService = {
  listarPorPaciente: async (id: number | string) => {
    try {
      const response = await api.get(`api/seguimientos/paciente/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener seguimientos del paciente:', error);
      throw error;
    }
  },

  crear: async (request: any) => {
    try {
      const response = await api.post('api/seguimientos', request);
      return response.data;
    } catch (error) {
      console.error('Error al crear seguimiento:', error);
      throw error;
    }
  },

  actualizar: async (id: number | string, request: any) => {
    try {
      const response = await api.put(`api/seguimientos/${id}`, request);
      return response.data;
    } catch (error) {
      console.error('Error al actualizar seguimiento:', error);
      throw error;
    }
  },

  eliminar: async (id: number | string) => {
    try {
      const response = await api.delete(`api/seguimientos/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al eliminar seguimiento:', error);
      throw error;
    }
  },

  subirArchivo: async (id: number | string, formData: FormData) => {
    try {
      const response = await api.post(`api/seguimientos/${id}/documento`, formData, {
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

  eliminarArchivo: async (id: number | string) => {
    try {
      const response = await api.delete(`api/seguimientos/documento/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al eliminar archivo:', error);
      throw error;
    }
  },
};
