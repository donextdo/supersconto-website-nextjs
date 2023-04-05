import Link from "next/dist/client/link";
import Orders from "./Orders";

const Dashboard = () => {
  return (
    <div className="lg:ml-3">
      <p>
        Hello <span className="font-semibold">Customer Name</span> (not{" "}
        <span className="font-semibold">Customer Name?</span>
        <span className="text-blue-400 underline underline-offset-1">
          {" "}
          Log out
        </span>
        )
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
