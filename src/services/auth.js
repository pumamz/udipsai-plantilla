import api from './api';

export const authService = {
  login: async (values) => {
    try {
      const response = await api.post('api/especialistas/login', values);
      const usuario = { ...response.data };
      return {
        ...usuario,
        username: usuario.primerNombre + ' ' + usuario.primerApellido,
      };
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      throw error;
    }
  },
};
