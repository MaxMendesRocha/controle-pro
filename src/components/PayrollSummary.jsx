import StatCard from "./StatCard";

import {
  formatCurrency
} from "../utils/currencyUtils";

export default function PayrollSummary({
  totalGross = 0,
  totalExtras = 0,
  totalDiscounts = 0,
  totalPayroll = 0
}) {

  return (
    <div
      className="
      grid

      grid-cols-1
      md:grid-cols-2
      xl:grid-cols-4

      gap-4
      "
    >
      <StatCard
        title="Total Bruto"
        value={formatCurrency(
          totalGross
        )}
      />

      <StatCard
        title="Total Extras"
        value={formatCurrency(
          totalExtras
        )}
      />

      <StatCard
        title="Total Descontos"
        value={formatCurrency(
          totalDiscounts
        )}
      />

      <StatCard
        title="Total Líquido"
        value={formatCurrency(
          totalPayroll
        )}
      />
    </div>
  );
}