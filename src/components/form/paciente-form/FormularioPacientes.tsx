import ComponentCard from "../../common/ComponentCard";
import DatePicker from "../../form/date-picker";
import PhoneInput from "../../form/group-input/PhoneInput";
import Input from "../../form/input/InputField";
import TextArea from "../../form/input/TextArea";
import Label from "../../form/Label";
import Select from "../../form/Select";
import Switch from "../../form/switch/Switch";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { pacientesService } from "../../../services/pacientes";
import Button from "../../ui/button/Button";
import { institucionesService } from "../../../services";

export default function FormularioPacientes() {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEditing = !!id;

    const [formData, setFormData] = useState({
        fechaApertura: new Date().toISOString(),
        pacienteEstado: 0,
        nombresApellidos: "",
        ciudad: "",
        fechaNacimiento: "",
        edad: "",
        cedula: "",
        domicilio: "",
        imagen: "",
        telefono: "",
        celular: "",
        institucionEducativa: 0,
        jornada: 0,
        proyecto: "",
        nivelEducativo: "",
        anioEducacion: "",
        anioUniversitario: "",
        ciclo: "",
        carrera: "",
        perteneceInclusion: "no",
        tieneDiscapacidad: "no",
        portadorCarnet: false,
        diagnostico: "",
        motivoConsulta: "",
        observaciones: "",
        tipoDiscapacidad: "",
        detalleDiscapacidad: "",
        porcentajeDiscapacidad: 0,
        perteneceAProyecto: false,
        sede: 0,
        fichaCompromiso: 0
    });

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (isEditing) {
            const fetchPaciente = async () => {
                try {
                    setLoading(true);
                    const data = await pacientesService.obtenerPorId(id);

                    setFormData({
                        ...data,
                        fechaNacimiento: data.fechaNacimiento ? data.fechaNacimiento.split('T')[0] : "",
                        perteneceInclusion: data.perteneceInclusion || "no",
                        tieneDiscapacidad: data.tieneDiscapacidad || "no",
                        institucionEducativa: data.institucionEducativa?.id || data.institucionEducativa || 0,
                        jornada: data.jornada?.id || data.jornada || 0,
                        sede: data.sede?.id || data.sede || 0,
                    });
                } catch (error) {
                    console.error("Error fetching patient:", error);
                } finally {
                    setLoading(false);
                }
            };
            fetchPaciente();
        }
        getInstituciones();
    }, [id, isEditing]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSelectChange = (name: string, value: string | number) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSwitchChange = (name: string, checked: boolean) => {
        if (name === 'portadorCarnet' || name === 'perteneceAProyecto') {
            setFormData((prev) => ({ ...prev, [name]: checked }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: checked ? 'si' : 'no' }));
        }
    };

    const handleDateChange = (dates: Date[]) => {
        if (dates.length > 0) {
            const dateString = dates[0].toISOString();
            setFormData((prev) => ({ ...prev, fechaNacimiento: dateString }));
        }
    };

    const handlePhoneNumberChange = (value: string) => {
        setFormData(prev => ({ ...prev, celular: value }));
    }

    const handleSubmit = async () => {
        try {
            setLoading(true);
            const payload = {
                ...formData,
                institucionEducativa: Number(formData.institucionEducativa) || 0,
                jornada: Number(formData.jornada) || 0,
                sede: Number(formData.sede) || 0,
                fichaCompromiso: Number(formData.fichaCompromiso) || 0,
                porcentajeDiscapacidad: Number(formData.porcentajeDiscapacidad) || 0,
                edad: String(formData.edad),
                fechaApertura: isEditing ? formData.fechaApertura : new Date().toISOString(),
            };
            if (isEditing) {
                await pacientesService.actualizar(id, payload);
            } else {
                await pacientesService.crear(payload);
            }
            navigate("/pacientes");
        } catch (error) {
            console.error("Error saving patient:", error);
        } finally {
            setLoading(false);
        }
    };

    const countries = [
        { code: "EC", label: "+593" },
        { code: "US", label: "+1" },
    ];

    const optionsDiscapacidad = [
        { value: "intelectual", label: "Intelectual" },
        { value: "fisica", label: "Física" },
        { value: "auditiva", label: "Auditiva" },
        { value: "visual", label: "Visual" },
        { value: "psicosocial", label: "Psicosocial" },
        { value: "lenguaje", label: "Lenguaje" },
        { value: "multiple", label: "Múltiple" },
        { value: "otros", label: "Otros" },
    ];

    const getInstituciones = async () => {
        try {
            const data = await institucionesService.listar();
            setInstituciones(data);
        } catch (error) {
            console.error("Error fetching institutions:", error);
        }
    }

    const [instituciones, setInstituciones] = useState([
        {
            id: "0",
            nombreInstitucion: "",
        }
    ]);

    const optionsInstituciones = instituciones.map((institucion) => ({
        value: institucion.id,
        label: institucion.nombreInstitucion,
    }));
    
    const optionsJornada = [
        { value: "1", label: "Matutina" },
        { value: "2", label: "Vespertina" },
    ];
    const optionsNivelEducativo = [
        { value: "inicial", label: "Inicial" },
        { value: "preparatoria", label: "Preparatoria" },
        { value: "basica-elemental", label: "Básica Elemental" },
        { value: "basica-media", label: "Básica Media" },
        { value: "basica-superior", label: "Básica Superior" },
        { value: "bachillerato", label: "Bachillerato" },
        { value: "no-escolarizado", label: "No Escolarizado" },
    ];
    const optionsAñoEducativo = [
        { value: "primero", label: "Primero" },
        { value: "segundo", label: "Segundo" },
        { value: "tercero", label: "Tercero" },
    ];

    if (loading && isEditing && !formData.nombresApellidos) {
        return <div>Cargando datos del paciente...</div>;
    }

    return (
        <div>
            <ComponentCard title="Datos personales del paciente">
                <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                        <div>
                            <Label htmlFor="nombresApellidos">Nombre Completo</Label>
                            <Input
                                id="nombresApellidos"
                                type="text"
                                placeholder="Ingrese el nombre completo"
                                value={formData.nombresApellidos}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Label htmlFor="cedula">Cédula</Label>
                            <Input
                                id="cedula"
                                type="text"
                                placeholder="Ingrese la cédula"
                                value={formData.cedula}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Label htmlFor="fechaNacimiento">Fecha de Nacimiento</Label>
                            <DatePicker
                                id="fechaNacimiento"
                                placeholder="Seleccione la fecha de nacimiento"
                                onChange={handleDateChange}
                            />
                        </div>
                        <div>
                            <Label htmlFor="edad">Edad</Label>
                            <Input
                                id="edad"
                                type="number"
                                placeholder="Ingrese la edad"
                                value={formData.edad}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Label htmlFor="domicilio">Domicilio</Label>
                            <Input
                                id="domicilio"
                                type="text"
                                placeholder="Ingrese el domicilio"
                                value={formData.domicilio}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Label htmlFor="ciudad">Ciudad</Label>
                            <Input
                                id="ciudad"
                                type="text"
                                placeholder="Ingrese la ciudad"
                                value={formData.ciudad}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Label htmlFor="telefono">
                                Teléfono Convencional
                            </Label>
                            <Input
                                id="telefono"
                                type="text"
                                placeholder="Ingrese el teléfono convencional"
                                value={formData.telefono}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Label htmlFor="celular">Teléfono Celular</Label>
                            <PhoneInput
                                selectPosition="start"
                                countries={countries}
                                placeholder="+593 09 0000-0000"
                                onChange={handlePhoneNumberChange}
                            />
                        </div>
                        <div>
                            <Label htmlFor="imagen">Imagen (URL)</Label>
                            <Input
                                id="imagen"
                                type="text"
                                placeholder="URL de la imagen"
                                value={formData.imagen}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
            </ComponentCard>
            <br />
            <ComponentCard title="Datos de discapacidad">
                <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                        <div>
                            <Switch
                                label="¿Presenta discapacidad?"
                                checked={formData.tieneDiscapacidad === 'si'}
                                onChange={(checked) => handleSwitchChange("tieneDiscapacidad", checked)}
                            />
                        </div>
                        <div>
                            <Switch
                                label="¿Porta carnet de discapacidad?"
                                checked={formData.portadorCarnet}
                                onChange={(checked) => handleSwitchChange("portadorCarnet", checked)}
                            />
                        </div>
                        <div>
                            <Label htmlFor="tipoDiscapacidad">Tipo de Discapacidad</Label>
                            <Select
                                options={optionsDiscapacidad}
                                placeholder="Selecciona el tipo de discapacidad"
                                onChange={(value) => handleSelectChange("tipoDiscapacidad", value)}
                                className="dark:bg-dark-900"
                                defaultValue={formData.tipoDiscapacidad}
                            />
                        </div>
                        <div>
                            <Label htmlFor="detalleDiscapacidad">
                                Detalles de la Discapacidad
                            </Label>
                            <Input
                                id="detalleDiscapacidad"
                                type="text"
                                placeholder="Ingrese detalles adicionales"
                                value={formData.detalleDiscapacidad}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Label htmlFor="porcentajeDiscapacidad">
                                Porcentaje de Discapacidad
                            </Label>
                            <Input
                                id="porcentajeDiscapacidad"
                                type="number"
                                placeholder="Ingrese el porcentaje de discapacidad"
                                value={formData.porcentajeDiscapacidad}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Label htmlFor="diagnostico">Diagnóstico</Label>
                            <Input
                                id="diagnostico"
                                type="text"
                                placeholder="Ingrese el diagnóstico"
                                value={formData.diagnostico}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
            </ComponentCard>
            <br />
            <ComponentCard title="Información educativa y Proyecto">
                <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                        <div>
                            <Label htmlFor="institucionEducativa">
                                Institución Educativa
                            </Label>
                            <Select
                                options={optionsInstituciones}
                                placeholder="Seleccione la institución educativa"
                                onChange={(value) => handleSelectChange("institucionEducativa", value)}
                                className="dark:bg-dark-900"
                                defaultValue={String(formData.institucionEducativa)}
                            />
                        </div>
                        <div>
                            <Label htmlFor="jornada">Jornada</Label>
                            <Select
                                options={optionsJornada}
                                placeholder="Seleccione la jornada"
                                onChange={(value) => handleSelectChange("jornada", value)}
                                className="dark:bg-dark-900"
                                defaultValue={String(formData.jornada)}
                            />
                        </div>
                        <div>
                            <Label htmlFor="nivelEducativo">Nivel Educativo</Label>
                            <Select
                                options={optionsNivelEducativo}
                                placeholder="Seleccione el nivel educativo"
                                onChange={(value) => handleSelectChange("nivelEducativo", value)}
                                className="dark:bg-dark-900"
                                defaultValue={formData.nivelEducativo}
                            />
                        </div>
                        <div>
                            <Label htmlFor="anioEducacion">Año Educativo</Label>
                            <Select
                                options={optionsAñoEducativo}
                                placeholder="Seleccione el año educativo"
                                onChange={(value) => handleSelectChange("anioEducacion", value)}
                                className="dark:bg-dark-900"
                                defaultValue={formData.anioEducacion}
                            />
                        </div>
                        <div>
                            <Switch
                                label="Pertenencia a programa de inclusión"
                                checked={formData.perteneceInclusion === 'si'}
                                onChange={(checked) => handleSwitchChange("perteneceInclusion", checked)}
                            />
                        </div>
                        <div>
                            <Switch
                                label="Pertenece a Proyecto"
                                checked={formData.perteneceAProyecto}
                                onChange={(checked) => handleSwitchChange("perteneceAProyecto", checked)}
                            />
                        </div>
                        <div>
                            <Label htmlFor="proyecto">Proyecto</Label>
                            <Input
                                id="proyecto"
                                type="text"
                                placeholder="Ingrese el proyecto"
                                value={formData.proyecto}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Label htmlFor="anioUniversitario">Año Universitario</Label>
                            <Input
                                id="anioUniversitario"
                                type="text"
                                placeholder="Ingrese el año universitario"
                                value={formData.anioUniversitario}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Label htmlFor="ciclo">Ciclo</Label>
                            <Input
                                id="ciclo"
                                type="text"
                                placeholder="Ingrese el ciclo"
                                value={formData.ciclo}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Label htmlFor="carrera">Carrera</Label>
                            <Input
                                id="carrera"
                                type="text"
                                placeholder="Ingrese la carrera"
                                value={formData.carrera}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
            </ComponentCard>
            <br />
            <ComponentCard title="Información adicional">
                <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                        <div>
                            <Label htmlFor="motivoConsulta">Motivo de consulta</Label>
                            <TextArea
                                value={formData.motivoConsulta}
                                onChange={(value) => setFormData(prev => ({ ...prev, motivoConsulta: value }))}
                                rows={2}
                            />
                        </div>
                        <div>
                            <Label htmlFor="observaciones">Observaciones</Label>
                            <TextArea
                                value={formData.observaciones}
                                onChange={(value) => setFormData(prev => ({ ...prev, observaciones: value }))}
                                rows={2}
                            />
                        </div>
                    </div>
                </div>
            </ComponentCard>

            <div className="mt-6 flex justify-end gap-3">
                <Button variant="outline" onClick={() => navigate("/pacientes")}>
                    Cancelar
                </Button>
                <Button onClick={handleSubmit} disabled={loading}>
                    {loading ? "Guardando..." : "Guardar Paciente"}
                </Button>
            </div>
        </div>
    );
}
