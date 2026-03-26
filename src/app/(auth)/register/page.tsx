import RegisterForm from "@/components/modules/auth/register";
const RegisterPage = () => {
  return (
    <div className="bg-[#1f1b15] text-[#f9e19d] selection:bg-[#6e5d27]/30 selection:text-[#c8b273] min-h-screen flex flex-col relative overflow-x-hidden">
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
