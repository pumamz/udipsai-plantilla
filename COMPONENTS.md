# Documentación de Componentes - UDipsAI Plantilla

Esta documentación describe todos los componentes disponibles en la plantilla, su funcionalidad y cómo utilizarlos.

## Tabla de Contenidos

1. [Autenticación](#autenticación)
2. [Formularios](#formularios)
3. [Elementos UI](#elementos-ui)
4. [Tablas](#tablas)
5. [Gráficos](#gráficos)
6. [Header y Navegación](#header-y-navegación)
7. [Layout](#layout)
8. [Componentes Comunes](#componentes-comunes)
9. [E-commerce](#e-commerce)

---

## Autenticación

### SignInForm
**Ubicación:** `src/components/auth/SignInForm.tsx`

Formulario de inicio de sesión con integración de autenticación social (Google).

**Características:**
- Input de email y contraseña
- Mostrar/ocultar contraseña
- Checkbox "Recordarme"
- Botones de autenticación social (Google, Apple, GitHub)
- Enlace a registro
- Responsive

**Uso:**
```tsx
import SignInForm from './components/auth/SignInForm';

<SignInForm />
```

### SignUpForm
**Ubicación:** `src/components/auth/SignUpForm.tsx`

Formulario de registro de nuevos usuarios.

**Características:**
- Campos para nombre, email y contraseña
- Validación de formulario
- Términos y condiciones
- Autenticación social opcional
- Enlace a inicio de sesión

**Uso:**
```tsx
import SignUpForm from './components/auth/SignUpForm';

<SignUpForm />
```

---

## Formularios

### Form
**Ubicación:** `src/components/form/Form.tsx`

Componente wrapper para formularios con manejo de submit automático.

**Props:**
- `onSubmit: (event: FormEvent) => void` - Función que se ejecuta al enviar el formulario
- `children: ReactNode` - Contenido del formulario
- `className?: string` - Clases CSS adicionales

**Uso:**
```tsx
import Form from './components/form/Form';

<Form onSubmit={handleSubmit} className="space-y-4">
  {/* campos del formulario */}
</Form>
```

### Label
**Ubicación:** `src/components/form/Label.tsx`

Etiqueta para campos de formulario con estilos consistentes.

**Uso:**
```tsx
import Label from './components/form/Label';

<Label htmlFor="email">Correo Electrónico</Label>
```

### InputField
**Ubicación:** `src/components/form/input/InputField.tsx`

Campo de entrada de texto básico con soporte para diferentes tipos.

**Props:**
- `type?: string` - Tipo de input (text, email, password, etc.)
- `placeholder?: string` - Texto de marcador de posición
- `value?: string` - Valor controlado
- `onChange?: (e) => void` - Manejador de cambios
- `className?: string` - Clases adicionales

**Uso:**
```tsx
import InputField from './components/form/input/InputField';

<InputField 
  type="email" 
  placeholder="tu@email.com"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
```

### Checkbox
**Ubicación:** `src/components/form/input/Checkbox.tsx`

Checkbox personalizado con estilos consistentes.

**Props:**
- `checked?: boolean` - Estado del checkbox
- `onChange?: (e) => void` - Manejador de cambios
- `label?: string` - Etiqueta del checkbox

**Uso:**
```tsx
import Checkbox from './components/form/input/Checkbox';

<Checkbox 
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
  label="Acepto los términos"
/>
```

### FileInput
**Ubicación:** `src/components/form/input/FileInput.tsx`

Input para cargar archivos con preview y validación.

**Uso:**
```tsx
import FileInput from './components/form/input/FileInput';

<FileInput 
  onChange={handleFileChange}
  accept="image/*"
/>
```

### Select
**Ubicación:** `src/components/form/Select.tsx`

Select personalizado con estilos mejorados.

**Uso:**
```tsx
import Select from './components/form/Select';

<Select>
  <option value="1">Opción 1</option>
  <option value="2">Opción 2</option>
</Select>
```

### MultiSelect
**Ubicación:** `src/components/form/MultiSelect.tsx`

Select múltiple con chips para selecciones múltiples.

**Uso:**
```tsx
import MultiSelect from './components/form/MultiSelect';

<MultiSelect 
  options={options}
  onChange={handleChange}
/>
```

### DatePicker
**Ubicación:** `src/components/form/date-picker.tsx`

Selector de fecha con calendario integrado (usa Flatpickr).

**Uso:**
```tsx
import DatePicker from './components/form/date-picker';

<DatePicker 
  value={date}
  onChange={setDate}
/>
```

### Elementos de Formulario Adicionales

#### CheckboxComponents
**Ubicación:** `src/components/form/form-elements/CheckboxComponents.tsx`

Diferentes variantes de checkboxes (básico, con etiqueta, grupo de checkboxes).

#### DefaultInputs
**Ubicación:** `src/components/form/form-elements/DefaultInputs.tsx`

Inputs predeterminados con diferentes configuraciones.

#### DropZone
**Ubicación:** `src/components/form/form-elements/DropZone.tsx`

Zona de arrastrar y soltar para carga de archivos múltiples.

#### FileInputExample
**Ubicación:** `src/components/form/form-elements/FileInputExample.tsx`

Ejemplos de uso de inputs de archivo.

#### InputGroup
**Ubicación:** `src/components/form/form-elements/InputGroup.tsx`

Grupos de inputs con iconos y prefijos/sufijos.

#### InputStates
**Ubicación:** `src/components/form/form-elements/InputStates.tsx`

Inputs en diferentes estados (normal, error, success, disabled).

#### RadioButtons
**Ubicación:** `src/components/form/form-elements/RadioButtons.tsx`

Botones de radio personalizados.

#### SelectInputs
**Ubicación:** `src/components/form/form-elements/SelectInputs.tsx`

Variantes de selects personalizados.

#### TextAreaInput
**Ubicación:** `src/components/form/form-elements/TextAreaInput.tsx`

Área de texto con contador de caracteres.

#### ToggleSwitch
**Ubicación:** `src/components/form/form-elements/ToggleSwitch.tsx`

Interruptor de alternancia (switch) personalizado.

#### PhoneInput
**Ubicación:** `src/components/form/group-input/PhoneInput.tsx`

Input especializado para números telefónicos con selector de país.

---

## Elementos UI

### Button
**Ubicación:** `src/components/ui/button/Button.tsx`

Botón personalizable con múltiples variantes y tamaños.

**Props:**
- `children: ReactNode` - Contenido del botón
- `size?: "sm" | "md"` - Tamaño del botón (default: "md")
- `variant?: "primary" | "outline"` - Variante del botón (default: "primary")
- `startIcon?: ReactNode` - Icono antes del texto
- `endIcon?: ReactNode` - Icono después del texto
- `onClick?: () => void` - Manejador de clic
- `disabled?: boolean` - Estado deshabilitado
- `className?: string` - Clases adicionales

**Uso:**
```tsx
import Button from './components/ui/button/Button';

<Button 
  size="md" 
  variant="primary"
  onClick={handleClick}
>
  Guardar
</Button>
```

### Badge
**Ubicación:** `src/components/ui/badge/Badge.tsx`

Insignia o etiqueta para mostrar estados, categorías o información breve.

**Props:**
- `variant?: "light" | "solid"` - Variante del badge (default: "light")
- `size?: "sm" | "md"` - Tamaño (default: "md")
- `color?: "primary" | "success" | "error" | "warning" | "info" | "light" | "dark"` - Color (default: "primary")
- `startIcon?: ReactNode` - Icono al inicio
- `endIcon?: ReactNode` - Icono al final
- `children: ReactNode` - Contenido del badge

**Uso:**
```tsx
import Badge from './components/ui/badge/Badge';

<Badge color="success" variant="light">
  Activo
</Badge>
```

### Modal
**Ubicación:** `src/components/ui/modal/index.tsx`

Modal o diálogo modal para mostrar contenido superpuesto.

**Props:**
- `isOpen: boolean` - Controla si el modal está abierto
- `onClose: () => void` - Función para cerrar el modal
- `children: ReactNode` - Contenido del modal
- `className?: string` - Clases adicionales
- `showCloseButton?: boolean` - Mostrar botón de cerrar (default: true)
- `isFullscreen?: boolean` - Modal en pantalla completa (default: false)

**Características:**
- Cierre con tecla Escape
- Bloqueo de scroll del body
- Backdrop con clic para cerrar
- Animaciones suaves

**Uso:**
```tsx
import { Modal } from './components/ui/modal';

const [isOpen, setIsOpen] = useState(false);

<Modal 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)}
>
  <div>Contenido del modal</div>
</Modal>
```

### Alert
**Ubicación:** `src/components/ui/alert/`

Alertas para mostrar mensajes importantes al usuario.

**Tipos:**
- Información
- Éxito
- Advertencia
- Error

### Avatar
**Ubicación:** `src/components/ui/avatar/`

Avatar de usuario con imagen o iniciales.

**Características:**
- Imágenes redondas
- Fallback a iniciales
- Diferentes tamaños
- Indicador de estado (online/offline)

### Dropdown
**Ubicación:** `src/components/ui/dropdown/`

Menú desplegable para opciones y acciones.

**Uso típico:**
- Menús de navegación
- Acciones de usuario
- Filtros y ordenamiento

### Images
**Ubicación:** `src/components/ui/images/`

Componentes para mostrar imágenes con diferentes estilos y efectos.

### Videos
**Ubicación:** `src/components/ui/videos/`

Componentes para incrustar y reproducir videos.

### Table
**Ubicación:** `src/components/ui/table/`

Componentes base para crear tablas estructuradas.

**Componentes incluidos:**
- `Table` - Contenedor principal
- `TableHeader` - Encabezado de tabla
- `TableBody` - Cuerpo de tabla
- `TableRow` - Fila de tabla
- `TableCell` - Celda de tabla

---

## Tablas

### BasicTableOne
**Ubicación:** `src/components/tables/BasicTables/BasicTableOne.tsx`

Tabla básica con información de proyectos y usuarios.

**Características:**
- Visualización de usuarios con avatar
- Información de proyectos
- Equipo asignado con múltiples avatares
- Badges de estado
- Presupuesto
- Responsive

**Estructura de datos:**
```typescript
interface Order {
  id: number;
  user: {
    image: string;
    name: string;
    role: string;
  };
  projectName: string;
  team: {
    images: string[];
  };
  status: string;
  budget: string;
}
```

**Uso:**
```tsx
import BasicTableOne from './components/tables/BasicTables/BasicTableOne';

<BasicTableOne />
```

---

## Gráficos

Los gráficos utilizan ApexCharts a través de `react-apexcharts`.

### LineChartOne
**Ubicación:** `src/components/charts/line/LineChartOne.tsx`

Gráfico de líneas con gradiente.

**Características:**
- Múltiples series de datos
- Gradiente en el área bajo la línea
- Grid personalizable
- Tooltips interactivos
- Responsive
- Soporte de tema oscuro

**Uso:**
```tsx
import LineChartOne from './components/charts/line/LineChartOne';

<LineChartOne />
```

### BarChartOne
**Ubicación:** `src/components/charts/bar/BarChartOne.tsx`

Gráfico de barras para comparación de datos.

**Características:**
- Barras verticales u horizontales
- Múltiples series
- Colores personalizables
- Animaciones

**Uso:**
```tsx
import BarChartOne from './components/charts/bar/BarChartOne';

<BarChartOne />
```

---

## Header y Navegación

### Header
**Ubicación:** `src/components/header/Header.tsx`

Header principal de la aplicación con navegación y controles.

**Props:**
- `onClick?: () => void` - Función opcional para manejar clics
- `onToggle: () => void` - Función para alternar el sidebar en móvil

**Características:**
- Botón hamburguesa para móvil
- Menú de aplicaciones
- Buscador
- Notificaciones
- Perfil de usuario
- Toggle de tema oscuro/claro
- Sticky al hacer scroll
- Responsive

**Uso:**
```tsx
import Header from './components/header/Header';

<Header onToggle={toggleSidebar} />
```

### NotificationDropdown
**Ubicación:** `src/components/header/NotificationDropdown.tsx`

Dropdown para mostrar notificaciones del usuario.

**Características:**
- Lista de notificaciones
- Indicador de no leídas
- Timestamp de notificaciones
- Marcado de leído/no leído

### UserDropdown
**Ubicación:** `src/components/header/UserDropdown.tsx`

Dropdown con opciones de usuario.

**Opciones típicas:**
- Ver perfil
- Configuración
- Cerrar sesión

---

## Layout

### AppLayout
**Ubicación:** `src/layout/AppLayout.tsx`

Layout principal de la aplicación que envuelve todas las páginas.

**Estructura:**
- Sidebar colapsable
- Header fijo
- Área de contenido principal
- Backdrop para móvil
- Context provider para el sidebar

**Características:**
- Sidebar expandible/colapsable
- Responsive para móvil, tablet y desktop
- Transiciones suaves
- Manejo de estado del sidebar

**Uso:**
```tsx
import AppLayout from './layout/AppLayout';

// En tu configuración de rutas
<Route element={<AppLayout />}>
  <Route path="/" element={<Home />} />
  {/* más rutas */}
</Route>
```

### AppHeader
**Ubicación:** `src/layout/AppHeader.tsx`

Header del layout que incluye el componente Header principal.

### AppSidebar
**Ubicación:** `src/layout/AppSidebar.tsx`

Sidebar de navegación lateral con menú principal.

**Características:**
- Menú colapsable
- Iconos de navegación
- Indicadores de página activa
- Responsive

### Backdrop
**Ubicación:** `src/layout/Backdrop.tsx`

Overlay oscuro que aparece detrás del sidebar en dispositivos móviles.

---

## Componentes Comunes

### PageBreadcrumb
**Ubicación:** `src/components/common/PageBreadCrumb.tsx`

Navegación de migas de pan para mostrar la ruta actual.

**Props:**
- `pageTitle: string` - Título de la página actual

**Uso:**
```tsx
import PageBreadcrumb from './components/common/PageBreadcrumb';

<PageBreadcrumb pageTitle="Configuración" />
```

### PageMeta
**Ubicación:** `src/components/common/PageMeta.tsx`

Componente para configurar los metadatos de la página (título, descripción, etc.).

**Uso:**
```tsx
import PageMeta from './components/common/PageMeta';

<PageMeta 
  title="Dashboard - Mi App"
  description="Panel de control principal"
/>
```

### ThemeToggleButton
**Ubicación:** `src/components/common/ThemeToggleButton.tsx`

Botón para cambiar entre tema claro y oscuro.

**Uso:**
```tsx
import { ThemeToggleButton } from './components/common/ThemeToggleButton';

<ThemeToggleButton />
```

### ThemeTogglerTwo
**Ubicación:** `src/components/common/ThemeTogglerTwo.tsx`

Variante alternativa del botón de cambio de tema.

### ScrollToTop
**Ubicación:** `src/components/common/ScrollToTop.tsx`

Componente que fuerza el scroll al inicio al cambiar de página.

**Uso:**
```tsx
import ScrollToTop from './components/common/ScrollToTop';

// En tu App o Router
<ScrollToTop />
```

### ComponentCard
**Ubicación:** `src/components/common/ComponentCard.tsx`

Tarjeta contenedora para componentes con título y descripción.

**Uso:**
```tsx
import ComponentCard from './components/common/ComponentCard';

<ComponentCard title="Título">
  {/* Contenido */}
</ComponentCard>
```

### ChartTab
**Ubicación:** `src/components/common/ChartTab.tsx`

Pestañas para alternar entre diferentes vistas de gráficos.

### GridShape
**Ubicación:** `src/components/common/GridShape.tsx`

Formas decorativas de fondo en cuadrícula.

---

## E-commerce

### EcommerceMetrics
**Ubicación:** `src/components/ecommerce/EcommerceMetrics.tsx`

Métricas y KPIs para dashboards de e-commerce.

**Métricas típicas:**
- Ventas totales
- Pedidos
- Tasa de conversión
- Valor promedio de pedido

### RecentOrders
**Ubicación:** `src/components/ecommerce/RecentOrders.tsx`

Lista de pedidos recientes con información detallada.

**Información mostrada:**
- ID de pedido
- Cliente
- Estado
- Monto
- Fecha

### StatisticsChart
**Ubicación:** `src/components/ecommerce/StatisticsChart.tsx`

Gráfico de estadísticas para datos de e-commerce.

### CountryMap
**Ubicación:** `src/components/ecommerce/CountryMap.tsx`

Mapa interactivo de países con datos de ventas por región.

**Características:**
- Usa react-jvectormap
- Tooltips con información
- Colores basados en datos
- Interactivo

---

## Perfiles de Usuario

### UserInfoCard
**Ubicación:** `src/components/UserProfile/UserInfoCard.tsx`

Tarjeta con información básica del usuario.

### UserMetaCard
**Ubicación:** `src/components/UserProfile/UserMetaCard.tsx`

Tarjeta con metadatos del usuario (fecha de registro, último acceso, etc.).

### UserAddressCard
**Ubicación:** `src/components/UserProfile/UserAddressCard.tsx`

Tarjeta con información de dirección del usuario.

---

## Context y Hooks

### SidebarContext
**Ubicación:** `src/context/SidebarContext.tsx`

Context provider para manejar el estado del sidebar.

**Estados:**
- `isExpanded` - Si el sidebar está expandido
- `isHovered` - Si el cursor está sobre el sidebar
- `isMobileOpen` - Si el sidebar está abierto en móvil

**Uso:**
```tsx
import { useSidebar } from './context/SidebarContext';

const { isExpanded, toggleSidebar } = useSidebar();
```

### ThemeContext
**Ubicación:** `src/context/ThemeContext.tsx`

Context para manejar el tema (claro/oscuro) de la aplicación.

**Uso:**
```tsx
import { useTheme } from './context/ThemeContext';

const { theme, toggleTheme } = useTheme();
```

### useGoBack
**Ubicación:** `src/hooks/useGoBack.ts`

Hook personalizado para navegar hacia atrás en el historial.

**Uso:**
```tsx
import { useGoBack } from './hooks/useGoBack';

const goBack = useGoBack();

<button onClick={goBack}>Volver</button>
```

### useModal
**Ubicación:** `src/hooks/useModal.ts`

Hook para manejar el estado de modales.

**Uso:**
```tsx
import { useModal } from './hooks/useModal';

const { isOpen, open, close } = useModal();

<button onClick={open}>Abrir Modal</button>
<Modal isOpen={isOpen} onClose={close}>
  {/* Contenido */}
</Modal>
```

---

## Páginas de Ejemplo

La plantilla incluye páginas de ejemplo que muestran cómo usar los componentes:

### Home (Dashboard)
**Ubicación:** `src/pages/Dashboard/Home.tsx`

Página principal del dashboard con métricas y gráficos.

### FormElements
**Ubicación:** `src/pages/Forms/FormElements.tsx`

Ejemplos de todos los elementos de formulario disponibles.

### BasicTables
**Ubicación:** `src/pages/Tables/BasicTables.tsx`

Ejemplos de tablas básicas.

### Charts
**Ubicación:** `src/pages/Charts/`

Páginas de ejemplo para gráficos de líneas y barras.

### UI Elements
**Ubicación:** `src/pages/UiElements/`

Páginas que muestran alertas, avatares, badges, botones, imágenes y videos.

### Auth Pages
**Ubicación:** `src/pages/AuthPages/`

Páginas de autenticación (SignIn, SignUp) con layout especial.

### UserProfiles
**Ubicación:** `src/pages/UserProfiles.tsx`

Página de perfil de usuario con todas las tarjetas de información.

### Calendar
**Ubicación:** `src/pages/Calendar.tsx`

Calendario interactivo usando FullCalendar.

### NotFound
**Ubicación:** `src/pages/OtherPage/NotFound.tsx`

Página 404 para rutas no encontradas.

### Blank
**Ubicación:** `src/pages/Blank.tsx`

Página en blanco como punto de partida para nuevas páginas.

---

## Tecnologías Utilizadas

- **React 19** - Framework principal
- **TypeScript** - Tipado estático
- **React Router 7** - Navegación
- **Tailwind CSS 4** - Estilos
- **ApexCharts** - Gráficos
- **FullCalendar** - Calendario
- **React Dropzone** - Carga de archivos
- **Flatpickr** - Selector de fechas
- **React Helmet Async** - Metadatos de página
- **Vite** - Build tool

---

## Guía de Uso General

### 1. Instalación
```bash
npm install
```

### 2. Desarrollo
```bash
npm run dev
```

### 3. Build para producción
```bash
npm run build
```

### 4. Vista previa de producción
```bash
npm run preview
```

---

## Convenciones de Código

### Estructura de Componentes
```tsx
import { FC } from 'react';

interface ComponentProps {
  // Props con TypeScript
}

const Component: FC<ComponentProps> = ({ prop1, prop2 }) => {
  return (
    // JSX
  );
};

export default Component;
```

### Estilos con Tailwind
- Usar clases de Tailwind directamente
- Usar `dark:` prefix para modo oscuro
- Mantener consistencia con el sistema de diseño

### Tipado
- Siempre definir interfaces para props
- Usar TypeScript para todo el código
- Evitar `any` cuando sea posible

---

## Personalización

### Colores
Los colores principales se configuran en el archivo de configuración de Tailwind.

### Temas
El tema se maneja a través de ThemeContext y clases CSS de Tailwind.

### Iconos
Los iconos están en `src/icons/index.ts` y se importan como componentes React.

---

## Mejores Prácticas

1. **Reutilización**: Usa los componentes base antes de crear nuevos
2. **Tipado**: Siempre define tipos para props y estados
3. **Accesibilidad**: Mantén los atributos ARIA y semántica HTML
4. **Responsive**: Todos los componentes deben ser responsive
5. **Tema oscuro**: Asegúrate de soportar ambos temas
6. **Performance**: Usa React.memo cuando sea necesario
7. **Consistencia**: Sigue los patrones establecidos en la plantilla

---

## Soporte

Para preguntas o problemas, contacta al equipo de desarrollo.

Última actualización: Diciembre 2025
