import * as yup from 'yup';

export const LoginFormSchema = yup.object({
    email: yup.string().required('Email es requerido'),
    password: yup
        .string()
        .required('Password es requerido')
        .matches(
            /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
            'Password debe tener al menos una mayuscula, una miniscula, un numero y un caracter especial.'
        )
        .required()
});