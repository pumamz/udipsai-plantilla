import ComponentCard from "../../common/ComponentCard";
import DatePicker from "../date-picker";
import Input from "../input/InputField";
import Label from "../Label";
import Select from "../Select";
import Switch from "../switch/Switch";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { especialistasService } from "../../../services/especialistas";
import { sedesService } from "../../../services";
import Button from "../../ui/button/Button";

export default function FormularioEspecialistas() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = !!id;

  const [formData, setFormData] = useState({
    cedula: "",
    especialistaEstado: true,
    primerNombre: "",
    segundoNombre: "",
    primerApellido: "",
    segundoApellido: "",
    especialidadId: 0,
    esPasante: false,
    especialistaAsignado: "",
    contrasena: "",
    inicioPasantia: "",
    finPasantia: "",
    imagen: "",
    sedeId: 0,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isEditing) {
      const fetchEspecialista = async () => {
        try {
          setLoading(true);
          const data = await especialistasService.obtenerPorId(id);

          setFormData({
            ...data,
            sedeId: data.sede?.id || data.sedeId || 0,
            especialidadId: data.especialidad?.id || data.especialidadId || 0,
            especialistaAsignado:
              typeof data.especialistaAsignado === "object"
                ? data.especialistaAsignado?.cedula
                : data.especialistaAsignado || "",
          });
        } catch (error) {
          console.error("Error fetching especialista:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchEspecialista();
    }
    getSedes();
    getEspecialistas();
  }, [id, isEditing]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (name: string, value: string | number) => {
    console.log({ name, value });
    console.log("FORM DATA ANTES ----------------------------");
    console.log(formData);
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log("FORM DATA DESPUES ----------------------------");
    console.log(formData);
  };

  const handleSwitchChange = (name: string, checked: boolean) => {
    if (name === "esPasante") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: checked ? true : false }));
    }
  };

  const handleDateChange = (name: string, dateStr: string) => {
    setFormData((prev) => ({ ...prev, [name]: dateStr }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const payload = {
        ...formData,
        especialidadId: Number(formData.especialidadId) || 0,
        esPasante: !!formData.esPasante,
        especialistaAsignado: formData.especialistaAsignado || null,
        inicioPasantia: formData.inicioPasantia,
        finPasantia: formData.finPasantia,
        imagen: formData.imagen,
        sedeId: Number(formData.sedeId) || 0,
      };
      if (isEditing) {
        await especialistasService.actualizar(formData.cedula, payload);
      } else {
        await especialistasService.crear(payload);
      }
      navigate("/especialistas");
    } catch (error) {
      console.error("Error saving especialista:", error);
    } finally {
      setLoading(false);
    }
  };

  const getSedes = async () => {
    try {
      const data = await sedesService.listar();
      setSedes(data);
    } catch (error) {
      console.error("Error fetching sedes:", error);
    }
  };

  const [sedes, setSedes] = useState([{ id: "0", nombre: "" }]);

  const optionsSede = sedes.map((sede) => ({
    value: sede.id,
    label: sede.nombre,
  }));

  const getEspecialistas = async () => {
    try {
      const data = await especialistasService.listarNoPasantes();
      setEspecialistas(data);
    } catch (error) {
      console.error("Error fetching especialistas:", error);
    }
  };

  const [especialistas, setEspecialistas] = useState([
    { cedula: "0", primerNombre: "", primerApellido: "" },
  ]);

  const optionsEspecialistas = especialistas.map((especialista) => ({
    value: especialista.cedula,
    label: especialista.primerNombre + " " + especialista.primerApellido,
  }));

  const optionsEspecialidad = [
    { value: "1", label: "Coordinación" },
    { value: "2", label: "Secretaría" },
    { value: "3", label: "Psicología Educativa" },
    { value: "4", label: "Psicología Clínica" },
    { value: "5", label: "Terapia de Lenguaje y Fonoaudiología" },
    { value: "6", label: "Estimulación Temprana" },
    { value: "7", label: "Recuperación Pedagógica" },
    { value: "8", label: "Odontología" },
  ];

  if (loading && isEditing && !formData.cedula) {
    return <div>Cargando datos del especialista...</div>;
  }

  return (
    <div>
      <ComponentCard title="Datos personales del especialista">
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <div>
              <Label htmlFor="cedula">Cédula</Label>
              <Input
                id="cedula"
                type="text"
                placeholder="Ingrese el número de cédula/ruc"
                value={formData.cedula}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="primerNombre">Primer Nombre</Label>
              <Input
                id="primerNombre"
                type="text"
                placeholder="Ingrese el nombre completo"
                value={formData.primerNombre}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="segundoNombre">Segundo Nombre</Label>
              <Input
                id="segundoNombre"
                type="text"
                placeholder="Ingrese el nombre completo"
                value={formData.segundoNombre}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="primerApellido">Primer Apellido</Label>
              <Input
                id="primerApellido"
                type="text"
                placeholder="Ingrese el nombre completo"
                value={formData.primerApellido}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="segundoApellido">Segundo Apellido</Label>
              <Input
                id="segundoApellido"
                type="text"
                placeholder="Ingrese el nombre completo"
                value={formData.segundoApellido}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </ComponentCard>
      <br />
      <ComponentCard title="Datos de la especialidad">
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <div>
              <Label htmlFor="sedeId">Sede</Label>
              <Select
                options={optionsSede}
                placeholder="Seleccione una sede"
                onChange={(value) => handleSelectChange("sedeId", value)}
                className="dark:bg-dark-900"
                defaultValue={String(formData.sedeId || "")}
              />
            </div>
            <div>
              <Label htmlFor="especialidad">Especialidad</Label>
              <Select
                options={optionsEspecialidad}
                placeholder="Seleccione una especialidad"
                onChange={(value) =>
                  handleSelectChange("especialidadId", value)
                }
                className="dark:bg-dark-900"
                defaultValue={String(formData.especialidadId || "")}
              />
            </div>
            <div className="flex items-center gap-3">
              <Switch
                label="Pasante"
                checked={formData.esPasante}
                onChange={(checked) => handleSwitchChange("esPasante", checked)}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <div>
              <Label htmlFor="inicio-pasantia">Inicio de Pasantía</Label>
              <DatePicker
                id="inicio-pasantia"
                placeholder="Inicio de pasantía"
                onChange={(_, dateStr) =>
                  handleDateChange("inicioPasantia", dateStr)
                }
                defaultDate={formData.inicioPasantia}
              />
            </div>
            <div>
              <Label htmlFor="fin-pasantia">Fin de Pasantía</Label>
              <DatePicker
                id="fin-pasantia"
                placeholder="Fin de pasantía"
                onChange={(_, dateStr) =>
                  handleDateChange("finPasantia", dateStr)
                }
                defaultDate={formData.finPasantia}
              />
            </div>
            <div>
              <Label htmlFor="especialista-asignado">
                Especialista Asignado
              </Label>
              <Select
                options={optionsEspecialistas}
                placeholder="Seleccione o busque un especialista"
                onChange={(value) =>
                  handleSelectChange("especialistaAsignado", value)
                }
                className="dark:bg-dark-900"
                defaultValue={String(formData.especialistaAsignado)}
              />
            </div>
          </div>
        </div>
      </ComponentCard>
      <br />
      <ComponentCard title="Autenticación">
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <div>
              <Label htmlFor="contrasena">Contraseña</Label>
              <Input
                id="contrasena"
                type="password"
                placeholder="Ingrese la contraseña"
                value={formData.contrasena}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </ComponentCard>
      <div className="mt-6 flex justify-end gap-3">
        <Button variant="outline" onClick={() => navigate("/especialistas")}>
          Cancelar
        </Button>
        <Button onClick={handleSubmit} disabled={loading}>
          {loading ? "Guardando..." : "Guardar Paciente"}
        </Button>
      </div>
    </div>
  );
}
