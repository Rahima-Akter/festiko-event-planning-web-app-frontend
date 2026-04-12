import LoginForm from "@/components/modules/auth/login";
import { Suspense } from "react";

const LoginPage = () => {
  return (
    <div className="bg-[#1f1b15] text-[#f9e19d] selection:bg-[#6e5d27]/30 selection:text-[#c8b273] min-h-screen flex flex-col relative overflow-x-hidden">
      <Suspense
        fallback={
          <div className="text-center mt-20 text-white">Loading...</div>
        }
      >
        <LoginForm />
      </Suspense>
    </div>
  );
};

export default LoginPage;
