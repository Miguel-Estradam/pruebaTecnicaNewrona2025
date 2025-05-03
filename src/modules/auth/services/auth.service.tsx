import Swal from "sweetalert2";

import { signInWithEmailAndPassword } from "firebase/auth/web-extension";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../../firebase/config";
import { User } from "../../../utils/models/user.model";

const PATH = "Users";

const obj = "Usuario";

// función para obtener la referencia de un documento en la base de datos
const document = (id: string) => {
  return doc(db, `${PATH}/${id}`);
};

//formato de tipos de errores que pueden salir al consultar el usuario
const formatError = (errorMessage: string): void => {
  switch (errorMessage) {
    case "auth/user-not-found":
      // 'Email already exists';
      Swal.fire("Oops", "Usuario no encontrado.", "error");

      break;
    case "auth/wrong-password":
      // 'Invalid Password';
      Swal.fire({
        title: "Oops",
        text: "Contraseña incorrecta.",
        icon: "error",
        confirmButtonText: "Intentar otra vez!",
      });

      break;
    case "auth/invalid-credential":
      // 'Invalid User';

      Swal.fire({
        title: "Oops",
        text: "Correo y/o contraseña incorrectos",
        icon: "error",
        confirmButtonText: "Intentar otra vez!",
      });

      break;
    case "SOMETHING_IS_WRONG":
      Swal.fire({
        title: "Oops",
        text: "Algo anda mal por favor contacta con el administrador de la página",
        icon: "error",
        confirmButtonText: "Intentar otra vez!",
      });

      break;
    default:
      break;
  }
};

export const login = (
  email: string,
  password: string,
  navigate: any
): Promise<any> => {
  return signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      //Verificar que el usuario este dentro de la colección o ha sido eliminado
      const extraData = await getUser(userCredential.user.uid);
      if (Object.keys(extraData).length === 0) {
        formatError("auth/user-not-found");
        signOut(navigate);
        throw new Error();
      }
      navigate("/dashboard");
    })
    .catch((error) => {
      formatError(error.code);
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({
        errorCode: error.code,
        errorMessage: error.message,
      });
    });
};

export const getUser = async (id: string) => {
  try {
    const snapshot = await getDoc(document(id));
    return snapshot.data() as User;
  } catch (error) {
    //catch error
    console.log(error);
    return {};
  }
};

export const signOut = async (navigate: any): Promise<void> => {
  await auth.signOut().then(() => navigate("/login"));
};
