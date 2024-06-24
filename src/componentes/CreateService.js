import React, { useState } from 'react';
import '../css/CreateService.css';

const CreateService = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        precio: '',
        categoria: '',
        modalidad: 'presencial',
        descripcion: ''
    });
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Maneja el envío del formulario, por ejemplo, con una solicitud a la API
        console.log(formData, image);
    };

    return (
        <div className="create-service-container">
            <h1>Crear servicio</h1>
            <form onSubmit={handleSubmit}>
                <div className="image-upload">
                    <label htmlFor="imageInput">
                        {imagePreview ? (
                            <img src={imagePreview} alt="Vista previa" className="image-preview" />
                        ) : (
                            <div className="image-placeholder">Subir imagen</div>
                        )}
                        <input type="file" id="imageInput" accept="image/*" onChange={handleImageChange} />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleInputChange} placeholder="Nombre" />
                </div>
                <div className="form-group">
                    <label htmlFor="precio">Precio</label>
                    <input type="text" id="precio" name="precio" value={formData.precio} onChange={handleInputChange} placeholder="Precio" />
                </div>
                <div className="form-group">
                    <label htmlFor="categoria">Categoría</label>
                    <input type="text" id="categoria" name="categoria" value={formData.categoria} onChange={handleInputChange} placeholder="Categoría" />
                </div>
                <div className="form-group">
                    <label htmlFor="modalidad">Modalidad</label>
                    <select id="modalidad" name="modalidad" value={formData.modalidad} onChange={handleInputChange}>
                        <option value="presencial">Presencial</option>
                        <option value="en-linea">En línea</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="descripcion">Descripción</label>
                    <textarea id="descripcion" name="descripcion" value={formData.descripcion} onChange={handleInputChange} placeholder="Descripción"></textarea>
                </div>
                <button type="submit" className="submit-button">Siguiente</button>
            </form>
        </div>
    );
};

export default CreateService;
