export interface User {
    idUsuario?: string;
    nombre: string;
    apellido_paterno: string;
    apellido_materno: string;
    num_telefono: string;
    correo: string;
    contrasena: string;
    confirmPassword: string;
    session_token?: string;
}