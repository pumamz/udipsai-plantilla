import api from './api';

export const pacientesService = {
  listar: async () => {
    try {
      const response = await api.get('/pacientes');
      return response.data;
    } catch (error) {
      console.error('Error al listar pacientes:', error);
      throw error;
    }
  },

  crear: async (data: any, file?: File) => {
    try {
      const formData = new FormData();
      formData.append("data", JSON.stringify(data));
      
      if (file) {
        formData.append("file", file);
      }

      const response = await api.post('/pacientes', formData);
      return response.data;
    } catch (error) {
      console.error('Error al crear paciente:', error);
      throw error;
    }
  },

  actualizar: async (id: number | string, data: any, file?: File) => {
    try {
      const formData = new FormData();
      formData.append("data", JSON.stringify(data));
      
      if (file) {
        formData.append("file", file);
      }

      const response = await api.put(`/pacientes/${id}`, formData);
      return response.data;
    } catch (error) {
      console.error('Error al actualizar paciente:', error);
      throw error;
    }
  },

  obtenerPorId: async (id: number | string) => {
    try {
      const response = await api.get(`/pacientes/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener paciente:', error);
      throw error;
    }
  },

  buscar: async (search?: string, sedeId?: number | string) => {
    try {
      const params = new URLSearchParams();
      if (search) params.append('search', search);
      if (sedeId) params.append('sedeId', String(sedeId));

      const response = await api.post(`/pacientes/buscar?${params.toString()}`);
      return response.data;
    } catch (error) {
      console.error('Error al buscar pacientes:', error);
      throw error;
    }
  },

  obtenerFoto: async (filename: string) => {
    try {
        const response = await api.get(`/pacientes/foto/${filename}`, {
            responseType: 'blob'
        });
        return URL.createObjectURL(response.data);
    } catch (error) {
        console.error('Error al obtener foto:', error);
        throw error;
    }
  },

  eliminar: async (id: number | string) => {
    try {
      const response = await api.delete(`/pacientes/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al eliminar paciente:', error);
      throw error;
    }
  },

  subirDocumento: async (id: number | string, file: File) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      
      const response = await api.post(`/pacientes/${id}/documento`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error al subir documento:', error);
      throw error;
    }
  },

  obtenerReporteGeneral: async (id: number | string) => {
      try {
        const response = await api.get(`/pacientes/${id}/reporte-general`, {
          responseType: 'blob',
        });
        return response.data;
      } catch (error) {
        console.error('Error al obtener reporte general:', error);
        throw error;
      }
  },
};
