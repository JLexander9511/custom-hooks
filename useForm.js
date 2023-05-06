import { useState } from "react";

export const useForm = ( initialForm = {} ) => {

    const [formState, setFormState] = useState( initialForm );

    const updateInput = ({ target }) => {
        const {name, value} = target;
        setFormState({ ...formState,
                       [ name ] : value,
        })
    }

    const onResetForm = () => setFormState ( initialForm )

  return {
    ...formState, //SIRVE PARA EXPONER LOS DIVERSOS COMPONENTES DEL FORM Y NO TENER QUE DESESTRUCTURARLOS PARA REFERENCIARLOS
    formState,
    updateInput,
    onResetForm
  }
}