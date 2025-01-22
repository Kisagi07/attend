import { formatRupiah } from "../helper";
import clsx from "clsx";
import getLatestDrinkAndFood from "../libs/getLatestDrinkAndFood";

const LatestFoodDrinkCost = async () => {
  const foodDrinkCost = await getLatestDrinkAndFood();
  return (
    <div className="rounded-md lg:shrink-0">
      <ul className="flex flex-col gap-2 sm:grid sm:grid-cols-2 lg:flex xl:grid">
        {foodDrinkCost.map((cost, index) => (
          <li
            className={clsx("bg-neutral-100 p-4 rounded-md flex flex-col gap-2", {
              "lg:max-xl:!hidden": index >= 3,
            })}
            key={cost.id}
          >
            <div className="flex justify-between items-center gap-2">
              <p className="text-sm text-neutral-500">{cost.createdAt.toLocaleDateString()}</p>
              <p className="text-green-500 font-semibold">{formatRupiah(cost.cost)}</p>
            </div>
            <p className="text-neutral-700">
              {cost.amount} {cost.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default LatestFoodDrinkCost;
