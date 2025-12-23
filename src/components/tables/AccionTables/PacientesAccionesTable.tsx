import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";

import { Pen, Trash, Info } from "lucide-react";

import Badge from "../../ui/badge/Badge";
import { toast } from "react-toastify";
import { pacientesService } from "../../../services/pacientes";
import Button from "../../ui/button/Button";
import { useModal } from "../../../hooks/useModal";
import { DeleteModal } from "../../ui/modal/DeleteModal";
import { PatientDetailsModal } from "../../modals/PacienteDetalleModal";
import { TableActionHeader } from "../../common/TableActionHeader";

interface Paciente {
  id: number;
  nombresApellidos: string;
  cedula: string;
  telefono: string;
  celular: string;
  sede: {
    nombre: string;
  };
  pacienteEstado: number;
  fechaNacimiento?: string;
  edad?: string;
  ciudad?: string;
  domicilio?: string;
  institucionEducativa?: {
    nombreInstitucion: string;
  };
  motivoConsulta?: string;
  observaciones?: string;
}

export default function PacientesAccionesTable() {
  const [pacientes, setPacientes] = useState<Paciente[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPaciente, setSelectedPaciente] = useState<Paciente | null>(
    null
  );
  const navigate = useNavigate();

  const {
    isOpen: isDeleteModalOpen,
    openModal: openDeleteModal,
    closeModal: closeDeleteModal,
  } = useModal();

  const {
    isOpen: isDetailsModalOpen,
    openModal: openDetailsModal,
    closeModal: closeDetailsModal,
  } = useModal();

  const fetchPacientes = async () => {
    try {
      setLoading(true);
      const data = await pacientesService.listar();
      setPacientes(data);
    } catch (error) {
      console.error("Error al obtener pacientes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPacientes();
  }, []);

  const handleEdit = (id: number) => {
    navigate(`/pacientes/editar/${id}`);
  };

  const handleDeleteClick = (paciente: Paciente) => {
    setSelectedPaciente(paciente);
    openDeleteModal();
  };

  const handleConfirmDelete = async () => {
    if (selectedPaciente) {
      try {
        await pacientesService.eliminar(selectedPaciente.id);
        toast.success("Paciente eliminado correctamente");
        await fetchPacientes();
        closeDeleteModal();
        setSelectedPaciente(null);
      } catch (error) {
        toast.error("Error al eliminar el paciente");
        console.error("Error al eliminar paciente:", error);
      }
    }
  };

  const handleDetailsClick = (paciente: Paciente) => {
    setSelectedPaciente(paciente);
    openDetailsModal();
  };

  const getEstadoBadge = (estado: number) => {
    return estado === 1 ? "success" : "error";
  };

  const handleSearch = (term: string) => {
    console.log("Searching for:", term);
    // Implement search logic here
  };

  const handleExport = () => {
    console.log("Exporting data...");
    // Implement export logic here
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-white/[0.05] dark:bg-white/[0.03]">
      <TableActionHeader
        title="Pacientes"
        onSearch={handleSearch}
        onNew={() => navigate("/pacientes/nuevo")}
        newButtonText="Nuevo Paciente"
        onExport={handleExport}
      />
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
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Acciones
              </TableCell>
            </TableRow>
          </TableHeader>
          {/* Table Body */}
          <TableBody>
            {Array.isArray(pacientes) && pacientes.length > 0 ? (
              pacientes.map((paciente) => (
                <TableRow key={paciente.id}>
                  <TableCell className="px-5 py-3 text-theme-xs text-gray-700 dark:text-gray-300">
                    {paciente.id}
                  </TableCell>
                  <TableCell className="px-5 py-3 text-theme-xs text-gray-700 dark:text-gray-300">
                    {paciente.nombresApellidos}
                  </TableCell>
                  <TableCell className="px-5 py-3 text-theme-xs text-gray-700 dark:text-gray-300">
                    {paciente.cedula}
                  </TableCell>
                  <TableCell className="px-5 py-3 text-theme-xs text-gray-700 dark:text-gray-300">
                    {paciente.telefono}
                  </TableCell>
                  <TableCell className="px-5 py-3 text-theme-xs text-gray-700 dark:text-gray-300">
                    {paciente.sede?.nombre}
                  </TableCell>
                  <TableCell className="px-5 py-3 text-theme-xs text-gray-700 dark:text-gray-300">
                    <Badge
                      size="sm"
                      color={getEstadoBadge(paciente.pacienteEstado)}
                    >
                      {paciente.pacienteEstado === 1 ? "Activo" : "Inactivo"}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-5 py-3 text-theme-xs text-gray-700 dark:text-gray-300">
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDetailsClick(paciente)}
                        className="hover:bg-white hover:text-blue-600 p-2 text-blue-600 dark:text-blue-400"
                        title="Detalles"
                      >
                        <Info size={14} />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEdit(paciente.id)}
                        className="hover:bg-white hover:text-yellow-600 p-2 text-blue-600 dark:text-blue-400"
                        title="Editar"
                      >
                        <Pen size={14} />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDeleteClick(paciente)}
                        className="hover:bg-red-500 hover:text-white p-2 text-red-600 dark:text-red-400"
                        title="Eliminar"
                      >
                        <Trash size={14} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell className="text-center py-10">
                  No se encontraron pacientes.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onConfirm={handleConfirmDelete}
        title="Eliminar Paciente"
        description={`¿Estás seguro de que deseas eliminar al paciente ${selectedPaciente?.nombresApellidos}? Esta acción no se puede deshacer.`}
      />

      <PatientDetailsModal
        isOpen={isDetailsModalOpen}
        onClose={closeDetailsModal}
        paciente={selectedPaciente}
      />
    </div>
  );
}
