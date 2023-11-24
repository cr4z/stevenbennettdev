import { SmallItem } from "../../data/types/report";
import { useNotatorTools } from "../../tools/use_notator_tools";
import { CargoItem } from "./cargo_item_type";
import LockedControl from "./locked_control";

export default function LockedItems() {
  const {
    warehouseProfile,
    truckerTools: { draftTrucker, editTrucker },
  } = useNotatorTools();

  if (!warehouseProfile || !draftTrucker) return <></>;

  const defaultNames: string[] = warehouseProfile.defaultItemsLedger.smallItems;
  const alreadyDocumented = draftTrucker.itemLedger.smallItems;
  const cargoItems = getCargoItems({ defaultNames, alreadyDocumented });

  return (
    <>
      {cargoItems.map((cargoItem, i) => {
        const docIndex = alreadyDocumented.findIndex(
          (ci) => ci.name === cargoItem.name
        );

        return (
          <LockedControl
            key={i}
            cargoItem={cargoItem}
            onChange={(ci: CargoItem) => {
              editTrucker({
                path: `itemLedger.smallItems.${docIndex}`,
                value: ci,
              });
            }}
            onRemoveSelfFromLedger={() => {
              const current = draftTrucker.itemLedger.smallItems;
              current.splice(docIndex, 1);
              editTrucker({ path: `itemLedger.smallItems`, value: current });
            }}
            onAddSelfToLedger={(defaultIncrements?: number) => {
              const current = draftTrucker.itemLedger.smallItems;
              current.push({
                increments: defaultIncrements ?? 1,
                name: cargoItem.name,
              });
              editTrucker({ path: `itemLedger.smallItems`, value: current });
            }}
          />
        );
      })}
    </>
  );
}

function getCargoItems(props: {
  defaultNames: string[];
  alreadyDocumented: SmallItem[];
}): CargoItem[] {
  const { defaultNames, alreadyDocumented: cargoItems } = props;

  const res: CargoItem[] = defaultNames.map((name) => {
    const ci = { name, increments: 0 };

    const incrementsIfAny = cargoItems.find(
      (_ci) => _ci.name === name
    )?.increments;
    if (incrementsIfAny) ci.increments = incrementsIfAny;

    return ci;
  });

  return res;
}
