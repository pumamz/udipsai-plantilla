import api from './api';

export const sedesService = {
  listar: async () => {
    try {
      const response = await api.get('api/sedes/listar');
      return response.data;
    } catch (error) {
      console.error('Error al obtener sedes:', error);
      throw error;
    }
  },

  crear: async (request: any) => {
    try {
      const response = await api.post('api/sedes/insertar', request);
      return response.data;
    } catch (error) {
      console.error('Error al crear sede:', error);
      throw error;
    }
  },

  actualizar: async (id: number | string, request: any) => {
    try {
      const response = await api.put(`api/sedes/actualizar/${id}`, request);
      return response.data;
    } catch (error) {
      console.error('Error al actualizar sede:', error);
      throw error;
    }
  },

  eliminar: async (id: number | string) => {
    try {
      const response = await api.delete(`api/sedes/eliminar/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al eliminar sede:', error);
      throw error;
    }
  },
};
