import { title, description, payoutOptions } from "@/data/cashout";
import CashoutContent from "@/components/views/CashoutContent";

export default function Cashout() {
  return (
    <CashoutContent
      title={title}
      description={description}
      options={payoutOptions}
    />
  );
}
