import Link from "next/dist/client/link";
import Orders from "./Orders";
import { useRouter } from "next/router";

const Dashboard = ({onButtonClick, handleAddressClick, handleAccountDetailsClick}:any) => {
  const router = useRouter();


  const handleClick = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("email");
    router.push('/LoginRegister');

}
  return (
    <div className="lg:ml-3">
      <p>
          <span className="font-semibold">   </span>  {" "}
        <span className="font-semibold">   </span>
        <button onClick={handleClick}>
        <span className="text-blue-400 underline underline-offset-1 text-xl">
          {" "}
          Log out
        </span>
        </button>
        
      </p>

      <p className="mt-4 text-sm">From your account dashboard you can view your <button onClick={onButtonClick}><span className="text-[#2bbef9] underline underline-offset-1">recent orders</span></button>, manage your <button onClick={handleAddressClick}><span className="text-[#2bbef9] underline underline-offset-1">shipping and billing addresses</span></button>, and <button onClick={handleAccountDetailsClick}><span className="text-[#2bbef9] underline underline-offset-1">edit your password and account details</span></button>.</p>
    </div>
  );
};

export default Dashboard;
