import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { useSnackbar } from "notistack";

import { useLoginForm, UseLoginForm } from "./useLoginForm";
import { LoginData, LOGIN } from "./login.gql";
import { MutationLoginArgs } from "../../types";
import { env } from "../../../configs";

export const handleOnCompletedLogin = (
  data: LoginData,
  navigateToHome: () => void
) => {
  localStorage.setItem(env.TOKEN_NAME, data.login.token || "");
  navigateToHome();
};

export type UseLogin = UseLoginForm & {
  submitLogin: () => void;
  loginLoading: boolean;
};

export const useLogin = () => {
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const form = useLoginForm();
  const [login, { loading: loginLoading }] = useMutation<
    LoginData,
    MutationLoginArgs
  >(LOGIN, {
    onCompleted: (data) => {
      handleOnCompletedLogin(data, navigateToHome);
    },
    onError: (error) => {
      enqueueSnackbar(error.message, {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "left",
        },
      });
    },
  });

  const navigateToHome = () => {
    history.push("/home");
  };

  const submitLogin = () => {
    if (form.loginInput.contact !== "" && form.loginInput.motDePasse !== "") {
      login({
        variables: {
          input: form.loginInput,
        },
      });
    } else {
      form._setLoginFormError(true);
    }
  };

  return {
    ...form,
    submitLogin,
    loginLoading,
  };
};