import api from './api';

export const documentosService = {
  obtenerContenido: async (documentoId: number | string) => {
    try {
      const response = await api.get(`api/documentos/${documentoId}/contenido`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener documento:', error);
      throw error;
    }
  },

  subirDocumento: async (pacienteId: number | string, file: File, nombre: string) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('pacienteId', String(pacienteId));
      formData.append('nombre', nombre);

      const response = await api.post('api/documentos', formData);
      return response.data;
    } catch (error) {
      console.error('Error al subir documento:', error);
      throw error;
    }
  },

  eliminar: async (pacienteId: number | string, documentoId: number | string) => {
    try {
      const response = await api.delete(`api/pacientes/${pacienteId}/documentos/${documentoId}`);
      return response.data;
    } catch (error) {
      console.error('Error al eliminar documento:', error);
      throw error;
    }
  },

  descargar: async (documentoId: number | string) => {
    try {
      const response = await api.get(`api/documentos/${documentoId}/descargar`, {
        responseType: 'blob',
      });
      
      const blob = new Blob([response.data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `documento_${documentoId}.pdf`;
      link.click();
      window.URL.revokeObjectURL(url);
      
      return true;
    } catch (error) {
      console.error('Error al descargar documento:', error);
      throw error;
    }
  },

  descargarBase64: async (documentoId: number | string) => {
    try {
      const response = await api.get(`api/documentos/${documentoId}/contenido`);
      const contenido = response.data;
      const binaryString = atob(contenido);
      const len = binaryString.length;
      const bytes = new Uint8Array(len);
      
      for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }

      const blob = new Blob([bytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `documento_${documentoId}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
      
      return true;
    } catch (error) {
      console.error('Error al descargar documento:', error);
      throw error;
    }
  },
};
