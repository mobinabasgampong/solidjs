import {
  Accessor,
  createContext,
  createSignal,
  onCleanup,
  onMount,
  ParentComponent,
  useContext,
} from "solid-js";

import { createStore } from "solid-js/store";
type AuthStateContextValue = {
  isAuthenticated: boolean;
  loading: boolean;
};

const initialState = () => ({
  isAuthenticated: false,
  loading: true,
});

const AuthStateContext = createContext<AuthStateContextValue>();

const AuthProvider: ParentComponent = (props) => {
  const [store, setStore] = createStore(initialState());
  onMount(() => {
    console.log("Auth Context MOUNTED");
  });
  onCleanup(() => {
    console.log("Auth Context CLEANED UP");
  });

  return (
    <AuthStateContext.Provider value={store}>
      {props.children}
    </AuthStateContext.Provider>
  );
};

export const useAuthState = () => useContext(AuthStateContext);

export default AuthProvider;
