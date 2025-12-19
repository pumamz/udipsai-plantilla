import { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../../ui/table";

import Badge from "../../ui/badge/Badge";
import { institucionesService } from "../../../services/instituciones";
import Button from "../../ui/button/Button";
import { InstitucionModal } from "../../modals/InstitucionModal";
import { DeleteModal } from "../../ui/modal/DeleteModal";
import { useModal } from "../../../hooks/useModal";
import { TableActionHeader } from "../../common/TableActionHeader";
import { Pencil, Trash} from "lucide-react";

interface Institucion {
    id: number;
    nombreInstitucion: string;
    direccion: string;
    tipoInstitucion: string;
    institucionEstado: number;
}

export default function InstitucionesTable() {
    const [instituciones, setInstituciones] = useState<Institucion[]>([]);
    const [loading, setLoading] = useState(true);

    // Modal states using custom hook
    const {
        isOpen: isModalOpen,
        openModal: openInstitucionModal,
        closeModal: closeInstitucionModal
    } = useModal();

    const {
        isOpen: isDeleteModalOpen,
        openModal: openDeleteModal,
        closeModal: closeDeleteModal
    } = useModal();

    const [currentInstitucion, setCurrentInstitucion] = useState<Institucion | null>(null);
    const [institucionToDelete, setInstitucionToDelete] = useState<number | null>(null);

    const fetchInstituciones = async () => {
        try {
            setLoading(true);
            const data = await institucionesService.listar();
            setInstituciones(data);
        } catch (error) {
            console.error("Error fetching instituciones:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchInstituciones();
    }, []);

    const getEstadoBadge = (estado: number) => {
        return estado === 1 ? 'success' : 'error';
    };

    // Handlers
    const handleCreate = () => {
        setCurrentInstitucion(null);
        openInstitucionModal();
    };

    const handleEdit = (institucion: Institucion) => {
        setCurrentInstitucion(institucion);
        openInstitucionModal();
    };

    const handleDelete = (id: number) => {
        setInstitucionToDelete(id);
        openDeleteModal();
    };

    const confirmDelete = async () => {
        if (institucionToDelete) {
            try {
                await institucionesService.eliminar(institucionToDelete);
                await fetchInstituciones();
                closeDeleteModal();
                setInstitucionToDelete(null);
            } catch (error) {
                console.error("Error deleting institucion:", error);
            }
        }
    };

    const handleSave = async (institucion: Omit<Institucion, "id"> | Institucion) => {
        try {
            if ('id' in institucion) {
                await institucionesService.actualizar(institucion.id, institucion);
            } else {
                await institucionesService.crear(institucion);
            }
            await fetchInstituciones();
            closeInstitucionModal();
        } catch (error) {
            console.error("Error saving institucion:", error);
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

    if (loading && instituciones.length === 0) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-white/[0.05] dark:bg-white/[0.03]">

            <TableActionHeader
                title="Instituciones"
                onSearch={handleSearch}
                onNew={handleCreate}
                newButtonText="Nueva Institución"
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
                                Id de institución
                            </TableCell>
                            <TableCell
                                isHeader
                                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                            >
                                Nombre de la institución
                            </TableCell>
                            <TableCell
                                isHeader
                                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                            >
                                Dirección
                            </TableCell>
                            <TableCell
                                isHeader
                                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                            >
                                Tipo de institución
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
                        {instituciones.map((institucion) => (
                            <TableRow key={institucion.id}>
                                <TableCell className="px-5 py-3 text-theme-xs text-gray-700 dark:text-gray-300">
                                    {institucion.id}
                                </TableCell>
                                <TableCell className="px-5 py-3 text-theme-xs text-gray-700 dark:text-gray-300">
                                    {institucion.nombreInstitucion}
                                </TableCell>
                                <TableCell className="px-5 py-3 text-theme-xs text-gray-700 dark:text-gray-300">
                                    {institucion.direccion}
                                </TableCell>
                                <TableCell className="px-5 py-3 text-theme-xs text-gray-700 dark:text-gray-300">
                                    {institucion.tipoInstitucion}
                                </TableCell>
                                <TableCell className="px-5 py-3 text-theme-xs text-gray-700 dark:text-gray-300">
                                    <Badge
                                        size="sm"
                                        color={getEstadoBadge(institucion.institucionEstado)}
                                    >
                                        {institucion.institucionEstado === 1 ? 'Activo' : 'Inactivo'}
                                    </Badge>
                                </TableCell>
                                <TableCell className="px-5 py-3 text-theme-xs text-gray-700 dark:text-gray-300">
                                    <div className="flex items-center gap-2">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => handleEdit(institucion)}
                                            title="Editar"
                                            className="hover:bg-white hover:text-yellow-600 p-2 text-blue-600 dark:text-blue-400"
                                        >
                                            <Pencil size={14} />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="hover:bg-red-500 hover:text-white p-2 text-red-600 hover:text-red-700 dark:text-red-400"
                                            size="sm"
                                            onClick={() => handleDelete(institucion.id)}
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

            <InstitucionModal
                isOpen={isModalOpen}
                onClose={closeInstitucionModal}
                onSave={handleSave}
                initialData={currentInstitucion}
                title={currentInstitucion ? "Editar Institución" : "Nueva Institución"}
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