import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../../ui/table";

import { PencilIcon, TrashBinIcon, CopyIcon } from "../../../icons";

import Badge from "../../ui/badge/Badge";
import { pacientesService } from "../../../services/pacientes";
import Button from "../../ui/button/Button";
import { useModal } from "../../../hooks/useModal";
import { DeleteModal } from "../../ui/modal/DeleteModal";
import { PatientDetailsModal } from "./PacienteDetalleModal";

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
    const [selectedPaciente, setSelectedPaciente] = useState<Paciente | null>(null);
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
                await fetchPacientes();
                closeDeleteModal();
                setSelectedPaciente(null);
            } catch (error) {
                console.error("Error al eliminar paciente:", error);
            }
        }
    };

    const handleDetailsClick = (paciente: Paciente) => {
        setSelectedPaciente(paciente);
        openDetailsModal();
    };

    const getEstadoBadge = (estado: number) => {
        return estado === 1 ? 'success' : 'error';
    };

    if (loading) {
        return <div>Cargando...</div>;
    }

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
                        {pacientes.map((paciente) => (
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
                                        {paciente.pacienteEstado === 1 ? 'Activo' : 'Inactivo'}
                                    </Badge>
                                </TableCell>
                                <TableCell className="px-5 py-3 text-theme-xs text-gray-700 dark:text-gray-300">
                                    <div className="flex items-center gap-2">
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            onClick={() => handleDetailsClick(paciente)}
                                            className="p-2"
                                            title="Detalles"
                                        >
                                            <CopyIcon />
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            onClick={() => handleEdit(paciente.id)}
                                            className="p-2 "
                                            title="Editar"
                                        >
                                            <PencilIcon />
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            onClick={() => handleDeleteClick(paciente)}
                                            className="p-2 text-red-600 hover:text-red-700 dark:text-red-400"
                                            title="Eliminar"
                                        >
                                            <TrashBinIcon />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
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
