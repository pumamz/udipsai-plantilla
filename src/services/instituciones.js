import api from './api';

export const institucionesService = {
  listar: async () => {
    try {
      const response = await api.get('api/instituciones/listar');
      return response.data;
    } catch (error) {
      console.error('Error al obtener instituciones:', error);
      throw error;
    }
  },

  crear: async (request) => {
    try {
      const response = await api.post('api/instituciones/insertar', request);
      return response.data;
    } catch (error) {
      console.error('Error al crear institución:', error);
      throw error;
    }
  },

  actualizar: async (id, request) => {
    try {
      const response = await api.put(`api/instituciones/actualizar/${id}`, request);
      return response.data;
    } catch (error) {
      console.error('Error al actualizar institución:', error);
      throw error;
    }
  },

  eliminar: async (id) => {
    try {
      const response = await api.delete(`api/instituciones/eliminar/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al eliminar institución:', error);
      throw error;
    }
  },
};
