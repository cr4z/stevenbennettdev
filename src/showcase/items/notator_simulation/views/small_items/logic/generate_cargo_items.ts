import { CargoItem } from "../types/cargo_item_type";

export function generateCargoItems(props: {
  namesToGenerate: string[];
  deriveIncrements: CargoItem[];
}): CargoItem[] {
  const { namesToGenerate: defaultNames, deriveIncrements: cargoItems } = props;

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
