import * as React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import SignIn from "./app/pages/signin";
import FilterHousingPage from "./app/pages/filter-housing";
import { Register } from "./app/pages/register";
import { fakeAuthProvider } from "./shared/fakeAuthProvider";
import { Post } from "./app/pages/post";
import { Profile } from "./app/pages/profile";
import DetailPage from "./app/pages/detail";
import { FilterBar } from "./pages";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route>
          <Route path="/" element={<PublicPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/filter" element={<FilterBar />} />
          <Route path="/filter/:id" element={<DetailPage />} />
          <Route path="/post" element={<Post />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/main"
            element={
              <RequireAuth>
                <FilterHousingPage />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
interface AuthContextType {
  user: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

let AuthContext = React.createContext<AuthContextType>(null!);

function AuthProvider({ children }: { children: React.ReactNode }) {
  let [user, setUser] = React.useState<any>(null);

  let signin = (newUser: string, callback: VoidFunction) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  let signout = (callback: VoidFunction) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  return React.useContext(AuthContext);
}

function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

function PublicPage() {
  return <FilterHousingPage />;
}
