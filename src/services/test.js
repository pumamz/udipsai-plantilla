import api from './api';

export const testService = {
  listarPorPaciente: async (id) => {
    try {
      const response = await api.get(`api/tests/paciente/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener tests:', error);
      throw error;
    }
  },

  subirTest: async (request) => {
    try {
      const response = await api.post('api/tests', request, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error al subir test:', error);
      throw error;
    }
  },

  eliminar: async (id) => {
    try {
      const response = await api.delete(`api/tests/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al eliminar test:', error);
      throw error;
    }
  },
};
