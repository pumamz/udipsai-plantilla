import { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../../ui/table";

import Badge from "../../ui/badge/Badge";
import { sedesService } from "../../../services/sedes";
import Button from "../../ui/button/Button";
import { DeleteModal } from "../../ui/modal/DeleteModal";
import { useModal } from "../../../hooks/useModal";
import { TableActionHeader } from "../../common/TableActionHeader";
import { Pencil, Trash } from "lucide-react";
import { SedeModal } from "../../modals/SedesModal";

interface Sedes {
    id: number;
    nombre: string;
    estado: number;
}

export default function SedesAccionesTable() {
    const [sedes, setSedes] = useState<Sedes[]>([]);
    const [loading, setLoading] = useState(true);

    // Modal states using custom hook
    const {
        isOpen: isModalOpen,
        openModal: openSedeModal,
        closeModal: closeSedeModal
    } = useModal();

    const {
        isOpen: isDeleteModalOpen,
        openModal: openDeleteModal,
        closeModal: closeDeleteModal
    } = useModal();

    const [currentSede, setCurrentSede] = useState<Sedes | null>(null);
    const [sedesToDelete, setSedesToDelete] = useState<number | null>(null);

    const fetchSedes = async () => {
        try {
            setLoading(true);
            const data = await sedesService.listar();
            setSedes(data);
        } catch (error) {
            console.error("Error fetching sedes:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSedes();
    }, []);

    const getEstadoBadge = (estado: number) => {
        return estado === 1 ? 'success' : 'error';
    };

    // Handlers
    const handleCreate = () => {
        setCurrentSede(null);
        openSedeModal();
    };

    const handleEdit = (sedes: Sedes) => {
        setCurrentSede(sedes);
        openSedeModal();
    };

    const handleDelete = (id: number) => {
        setSedesToDelete(id);
        openDeleteModal();
    };

    const confirmDelete = async () => {
        if (sedesToDelete) {
            try {
                await sedesService.eliminar(sedesToDelete);
                await fetchSedes();
                closeDeleteModal();
                setSedesToDelete(null);
            } catch (error) {
                console.error("Error deleting sedes:", error);
            }
        }
    };

    const handleSave = async (sedes: Omit<Sedes, "id"> | Sedes) => {
        try {
            if ('id' in sedes) {
                await sedesService.actualizar(sedes.id, sedes);
            } else {
                await sedesService.crear(sedes);
            }
            await fetchSedes();
            closeSedeModal();
        } catch (error) {
            console.error("Error saving sedes:", error);
        }
    };

    const handleSearch = (term: string) => {
        console.log("Searching for:", term);
        // Implement search logic here
    };

    const handleExport = () => {
        console.log("Exporting data...");
        // Implement export logic here
    };

    if (loading && sedes.length === 0) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-white/[0.05] dark:bg-white/[0.03]">
            <TableActionHeader
                title="Sedes"
                onSearch={handleSearch}
                onNew={handleCreate}
                newButtonText="Nueva Sede"
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
                                Id de la sede
                            </TableCell>
                            <TableCell
                                isHeader
                                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                            >
                                Nombre de la sede
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
                        {sedes.map((sede) => (
                            <TableRow key={sede.id}>
                                <TableCell className="px-5 py-3 text-theme-xs text-gray-700 dark:text-gray-300">
                                    {sede.id}
                                </TableCell>
                                <TableCell className="px-5 py-3 text-theme-xs text-gray-700 dark:text-gray-300">
                                    {sede.nombre}
                                </TableCell>
                                <TableCell className="px-5 py-3 text-theme-xs text-gray-700 dark:text-gray-300">
                                    <Badge
                                        size="sm"
                                        color={getEstadoBadge(sede.estado)}
                                    >
                                        {sede.estado === 1 ? 'Activo' : 'Inactivo'}
                                    </Badge>
                                </TableCell>
                                <TableCell className="px-5 py-3 text-theme-xs text-gray-700 dark:text-gray-300">
                                    <div className="flex items-center gap-2">
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            onClick={() => handleEdit(sede)}
                                            className="hover:bg-white hover:text-yellow-600 p-2 text-blue-600 dark:text-blue-400"
                                            title="Editar"
                                        >
                                            <Pencil size={14}/>
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            onClick={() => handleDelete(sede.id)}
                                            className="hover:bg-red-500 hover:text-white p-2 text-red-600 dark:text-red-400"
                                            title="Eliminar"
                                        >
                                            <Trash size={14} />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <SedeModal
                isOpen={isModalOpen}
                onClose={closeSedeModal}
                onSave={handleSave}
                initialData={currentSede}
                title={currentSede ? "Editar Sede" : "Nueva Sede"}
            />

            <DeleteModal
                isOpen={isDeleteModalOpen}
                onClose={closeDeleteModal}
                onConfirm={confirmDelete}
                title="Eliminar Institución"
                description={`¿Estás seguro de que deseas eliminar la institución?`}
            />
        </div>
    );
}