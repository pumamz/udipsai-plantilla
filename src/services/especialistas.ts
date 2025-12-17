import api from './api';

export const especialistasService = {
  listarPasantes: async () => {
    try {
      const response = await api.get('api/especialistas/pasantes');
      return response.data;
    } catch (error) {
      console.error('Error al obtener pasantes:', error);
      throw error;
    }
  },

  listarNoPasantes: async () => {
    try {
      const response = await api.get('api/especialistas/activos/nopasantes');
      return response.data;
    } catch (error) {
      console.error('Error al obtener especialistas no pasantes:', error);
      throw error;
    }
  },

  listarActivos: async () => {
    try {
      const response = await api.get('api/especialistas/activos');
      return response.data;
    } catch (error) {
      console.error('Error al obtener especialistas activos:', error);
      throw error;
    }
  },

  obtenerPorId: async (id: number | string) => {
    try {
      const response = await api.get(`api/especialistas/${id}`);
      const data = response.data;
      
      // Si tiene especialista asignado, obtenerlo también
      if (data.especialistaAsignado) {
        const asignado = await api.get(`api/especialistas/${data.especialistaAsignado}`);      
          data.especialistaAsignado = asignado.data;
      }
      
      return data;
    } catch (error) {
      console.error('Error al obtener especialista:', error);
      throw error;
    }
  },

  crear: async (request: any) => {
    try {
      const response = await api.post('api/especialistas/insertar', request);
      return response.data;
    } catch (error) {
      console.error('Error al crear especialista:', error);
      throw error;
    }
  },

  actualizar: async (id: number | string, request: any) => {
    try {
      const response = await api.put(`api/especialistas/actualizar/${id}`, request);
      return response.data;
    } catch (error) {
      console.error('Error al actualizar especialista:', error);
      throw error;
    }
  },

  eliminar: async (id: number | string) => {
    try {
      const response = await api.delete(`api/especialistas/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al eliminar especialista:', error);
      throw error;
    }
  },
};
