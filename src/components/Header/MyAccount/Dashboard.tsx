import Link from "next/dist/client/link";
import Orders from "./Orders";
import { useRouter } from "next/router";

const Dashboard = () => {
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

      <p className="mt-4">
        From your account dashboard you can view your{" "}
        <Link href="/RecentOrders">
        <span className="text-blue-400 underline underline-offset-1">
          recent orders
        </span>
        </Link>
        , manage your{" "}
        <Link href="/Ship_Bill_Address">
        <span className="text-blue-400 underline underline-offset-1">
          shipping and billing addresses
        </span>
        </Link>
        , and{" "}
        <Link href="/Edit_Account_Details">
        <span className="text-blue-400 underline underline-offset-1">
          edit your password and account details
        </span>
        </Link>
        .
      </p>
    </div>
  );
};

export default Dashboard;
