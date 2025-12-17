import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";

import Badge from "../../ui/badge/Badge";

interface Paciente {
  id: number;
  nombre: string;
  cedula: string;
  telefono: string;
  sede: string;
  estado: boolean;
}

const tableData: Paciente[] = [
  {
    id: 1,
    nombre: "Juan Perez",
    cedula: "1234567890",
    telefono: "3012345678",
    sede: "Sede Principal",
    estado: true,
  },
  {
    id: 2,
    nombre: "Maria Gomez",
    cedula: "0987654321",
    telefono: "3109876543",
    sede: "Sede Norte",
    estado: true,
  },
  {
    id: 3,
    nombre: "Carlos Sanchez",
    cedula: "5555555555",
    telefono: "3115555555",
    sede: "Sede Sur",
    estado: false,
  },
  {
    id: 4,
    nombre: "Ana Martinez",
    cedula: "4444444444",
    telefono: "3104444444",
    sede: "Sede Principal",
    estado: true,
  },
];

export default function PacientesTable() {
  const getEstadoBadge = (estado: boolean) => {
    return estado ? 'success' : 'error';
  };

  return (
    <div>
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Número de ficha
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Nombre del paciente
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Cédula
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Teléfono
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Sede
              </TableCell>
              <TableCell
              isHeader
              className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
            >
              Estado
            </TableCell>
            </TableRow>
          </TableHeader>
          {/* Table Body */}
          <TableBody>
            {tableData.map((paciente) => (
              <TableRow key={paciente.id}>
                <TableCell className="px-5 py-3 text-theme-xs text-gray-700 dark:text-gray-300">
                  {paciente.id}
                </TableCell>
                <TableCell className="px-5 py-3 text-theme-xs text-gray-700 dark:text-gray-300">
                  {paciente.nombre}
                </TableCell>
                <TableCell className="px-5 py-3 text-theme-xs text-gray-700 dark:text-gray-300">
                  {paciente.cedula}
                </TableCell>
                <TableCell className="px-5 py-3 text-theme-xs text-gray-700 dark:text-gray-300">
                  {paciente.telefono}
                </TableCell>
                <TableCell className="px-5 py-3 text-theme-xs text-gray-700 dark:text-gray-300">
                  {paciente.sede}
                </TableCell>
                <TableCell className="px-5 py-3 text-theme-xs text-gray-700 dark:text-gray-300">
                  <Badge
                    size="sm"
                    color={getEstadoBadge(paciente.estado)}
                  >
                    {paciente.estado ? 'Activo' : 'Inactivo'}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
