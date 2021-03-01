import Formlbl from "./Formlbl";
import FormInput from "./FormInput";
import FormAction from "./FormAction";
import Social from "../Login/Social";
import FormCrear from "./FormCrear";
import FormPass from "./FormPass";
import Titulo from "../Login/Titulo";
import './Form.css';

function LoginForm(){
    return (
            <form action="" class="style">
                <Titulo titulo="Iniciar Sesión"></Titulo>
                <Formlbl lblfor="email" text="Correo electrónico:"></Formlbl>
                <FormInput type="email" name="email" id="email" placeholder="correo@dominio.com"></FormInput>
                <Formlbl lblfor="password" text="Contraseña:"></Formlbl>
                <FormInput type="password" name="password" id="password" placeholder="contraseña"></FormInput>
                <FormPass></FormPass>
                <FormAction text="Acceder"></FormAction>
                <FormCrear text="¿No tienes cuenta? " url="#" link=" Crear una"></FormCrear>
                <Social></Social>
            </form>
    );
}
export default LoginForm;