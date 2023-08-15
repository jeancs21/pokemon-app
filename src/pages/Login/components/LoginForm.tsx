import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserEmptyState, login } from "../../../redux/states/user.state";
import { mockAuthentication } from "../../../utilities/mockApi/mock-api";
import { LoggedUser } from "../../../models/users/logged-user.model";
import { PrivateRoutes } from "../../../models/routes/routes";
import CustomInput from "../../../containers/InputForm/CustomInput";
import CustomButton from "../../../containers/Buttons/CustomButton";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup"
import { LoginFormSchema } from "../schemas/login-form-schema";

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setError] = useState(false);

    const methods = useForm<LoggedUser>({
        defaultValues:  UserEmptyState,
        mode: "onChange",
        //resolver: yupResolver(LoginFormSchema)
    });

    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isValid }
    } = methods


    const submit = async (data: LoggedUser) => {
        if (data) {
            try {
                setIsLoading(true)
                console.log("success")

                await mockAuthentication(data)
                dispatch(login(data))

                setTimeout(() => {
                    setIsLoading(false)
                    navigate(PrivateRoutes.POKEMON_LIST)
                }, 1000)
            } catch (error) {
                setIsLoading(false)
                setError(true)
                console.log(error)
            }
        }
        else {
            setError(true)
        }
    }
  return (
    <>
        <div className='flex w-full justify-center'>
            <div className='flex flex-col w-96 gap-6 mt-36 p-8 rounded-lg border border-slate-300'>
                <div className='text-center font-medium text-2xl'>Inicie Sesión</div>
                <form className='flex flex-col gap-4 justify-center' onSubmit={handleSubmit(submit)}>
                <div className='flex flex-col gap-2'>
                        <label htmlFor='email-input'>Correo electrónico</label>
                        <input
                            id='email-input'
                            className='rounded-md p-2 border border-black'
                            placeholder='Correo electrónico'
                            type='email'
                            {...register("email", { required: true })}
                        />
                        {errors.email && <span className='text-red-600'>Este campo es requerido o datos incorrectos</span>}
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor='password-input'>Contraseña</label>
                        <input
                            id='password-input'
                            className='rounded-md p-2 border border-black'
                            placeholder='Correo electrónico'
                            type='password'
                            {...register("password", { required: true })}
                        />
                        {errors.password && <span className='text-red-600'>Este campo es requerido o datos incorrectos</span>}
                    </div>
                    <button
                        className='w-36 self-center bg-blue-500 rounded-md p-2 items-center text-white mt-6 hover:bg-blue-600 duration-300'
                        type='submit'
                        >
                        {`${isLoading ? 'Procesando...' : 'Iniciar Sesión'}`}
                    </button>
                </form>
            </div>
        </div>
    </>
  )
}

export default LoginForm