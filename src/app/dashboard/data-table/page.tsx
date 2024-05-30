import { Payment } from "@/data/payments.data";
import { payments } from "@/data/payments.data";
import { DataTable } from "./data-table";
import { columns } from "./columns";

async function getData(): Promise<Payment[]> {
  return payments;
}

const page = async () => {
  const data = await getData();

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default page;
