import Swal from 'sweetalert2';

const actionTextMap = {
  add: 'registro',
  update: 'actualizo',
  delete: 'elimino',
  deleteMany: 'eliminaron',
  repair: 'reparo',
};

export const showAlert = (message: string) => {
  Swal.fire({
    html: message,
    icon: 'info',
    confirmButtonText: 'Ok',
  });
};

export const showError = (message: string) => {
  Swal.fire({
    title: 'Oops',
    html: message,
    icon: 'error',
    confirmButtonText: 'Ok',
  });
};

export const showSuccess = (message: string) => {
  Swal.fire({
    html: message,
    icon: 'success',
  });
};

type showErrorProps = {
  obj: string;
  error?: any;
  action: 'add' | 'update' | 'delete' | 'deleteMany' | 'repair';
};
type showErrorPropsVerify = {
  obj: string;
  error?: any;
  position?: any;
  action: 'add' | 'update' | 'delete' | 'deleteMany' | 'repair';
};

export const showErrorMessage = ({ obj, error, action }: showErrorProps) => {
  const actionText = actionTextMap[action];
  const message = `Algo anda mal, no se ${actionText} el ${obj}.<br> ${error}`;
  showError(message);
};
export const showErrorMessageExist = ({
  obj,
  action,
}: showErrorPropsVerify) => {
  const actionText = actionTextMap[action];
  const message = `Algo anda mal, no se ${actionText} el ${obj}.<br> ya existe`;
  showError(message);
};

type showErrorForGetDataProps = {
  obj: string;
  error?: any;
};

export const showErrorForGetData = ({
  obj,
  error,
}: showErrorForGetDataProps) => {
  const message = `Algo anda mal, no se pudo consultar el objeto: ${obj}.<br> ${error}`;
  showError(message);
};

type showSuccessMessageProps = {
  obj: string;
  action: 'add' | 'update' | 'delete' | 'deleteMany';
};

export const showSuccessMessage = ({
  obj,
  action,
}: showSuccessMessageProps) => {
  const actionText = actionTextMap[action];
  Swal.fire({
    text: `¡${obj} se ${actionText} con éxito!`,
    icon: 'success',
  });
};
