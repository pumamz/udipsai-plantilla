import React, { useState, useEffect } from "react";
import { Modal } from "../ui/modal";
import Button from "../ui/button/Button";
import Input from "../form/input/InputField";
import Label from "../form/Label";
import Select from "../form/Select";

interface Institucion {
    id: number;
    nombreInstitucion: string;
    direccion: string;
    tipoInstitucion: string;
    institucionEstado: number;
}

interface InstitucionModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (institucion: Omit<Institucion, "id"> | Institucion) => void;
    initialData?: Institucion | null;
    title?: string;
}

export const InstitucionModal: React.FC<InstitucionModalProps> = ({
    isOpen,
    onClose,
    onSave,
    initialData,
    title = "Institución",
}) => {
    const [formData, setFormData] = useState({
        nombreInstitucion: "",
        direccion: "",
        tipoInstitucion: "",
        institucionEstado: 1,
    });

    useEffect(() => {
        if (initialData) {
            setFormData({
                nombreInstitucion: initialData.nombreInstitucion,
                direccion: initialData.direccion,
                tipoInstitucion: initialData.tipoInstitucion,
                institucionEstado: initialData.institucionEstado,
            });
        } else {
            setFormData({
                nombreInstitucion: "",
                direccion: "",
                tipoInstitucion: "",
                institucionEstado: 1,
            });
        }
    }, [initialData, isOpen]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSelectChange = (name: string, value: string) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        onSave({
            ...formData,
            ...(initialData ? { id: initialData.id } : {}),
        });
        onClose();
    };

    const optionsEstado = [
        { value: "1", label: "Activo" },
        { value: "0", label: "Inactivo" },
    ];

    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-[600px] p-6">
            <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {title}
                </h3>
            </div>
            <div className="space-y-4">
                <div>
                    <Label htmlFor="nombreInstitucion">Nombre de la Institución</Label>
                    <Input
                        id="nombreInstitucion"
                        type="text"
                        placeholder="Ingrese el nombre"
                        value={formData.nombreInstitucion}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <Label htmlFor="direccion">Dirección</Label>
                    <Input
                        id="direccion"
                        type="text"
                        placeholder="Ingrese la dirección"
                        value={formData.direccion}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <Label htmlFor="tipoInstitucion">Tipo de Institución</Label>
                    <Input
                        id="tipoInstitucion"
                        type="text"
                        placeholder="Ingrese el tipo (ej. Fiscal, Particular)"
                        value={formData.tipoInstitucion}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <Label htmlFor="institucionEstado">Estado</Label>
                    <Select
                        options={optionsEstado}
                        placeholder="Seleccione el estado"
                        onChange={(value) =>
                            handleSelectChange("institucionEstado", value)
                        }
                        className="dark:bg-dark-900"
                        defaultValue={String(formData.institucionEstado)}
                    />
                </div>
            </div>
            <div className="mt-6 flex justify-end gap-3">
                <Button variant="outline" onClick={onClose}>
                    Cancelar
                </Button>
                <Button onClick={handleSubmit}>Guardar</Button>
            </div>
        </Modal>
    );
};
