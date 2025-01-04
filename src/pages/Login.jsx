import { BlockquoteComponent, Login as LoginComponent } from "../components";

export default function Login() {
  return (
    <div className="w-screen h-full pt-20 p-10 grid md:grid-cols-2 gap-5 shadow-md">
      <div className="flex justify-center items-center mx-auto w-full">
        <LoginComponent />
      </div>
      <div className="bg-gray-100 h-full  border border-black/10 rounded-xl px-6 md:px-20 flex-col items-center justify-center font-bold  hidden md:inline-flex">
        <BlockquoteComponent />
      </div>
    </div>
  );
}
