import React, { useState, useEffect } from "react";
import { Modal } from "../ui/modal";
import Button from "../ui/button/Button";
import Input from "../form/input/InputField";
import Label from "../form/Label";
import Select from "../form/Select";

interface Sede {
    id: number;
    nombre: string;
    estado: number;
}

interface SedeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (sede: Omit<Sede, "id"> | Sede) => void;
  initialData?: Sede | null;
  title?: string;
}

export const SedeModal: React.FC<SedeModalProps> = ({
  isOpen,
  onClose,
  onSave,
  initialData,
  title = "Institución",
}) => {
  const [formData, setFormData] = useState({
    nombre: "",
    estado: 1,
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        nombre: initialData.nombre,
        estado: initialData.estado,
      });
    } else {
      setFormData({
        nombre: "",
        estado: 1,
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
          <Label htmlFor="nombre">Nombre de la Sede</Label>
          <Input
            id="nombre"
            type="text"
            placeholder="Ingrese el nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="estado">Estado</Label>
          <Select
            options={optionsEstado}
            placeholder="Seleccione el estado"
            onChange={(value) =>
              handleSelectChange("estado", value)
            }
            className="dark:bg-dark-900"
            defaultValue={String(formData.estado)}
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
