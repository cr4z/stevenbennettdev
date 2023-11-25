import { useNotatorTools } from "../../../tools/use_notator_tools";

export function useCustomsWithDeletions(): string[] {
  const { report, draftReport } = useNotatorTools();

  const savedCustoms: string[] = report?.customItemLedger.smallItems ?? [];
  const draftCustoms: string[] = draftReport?.customItemLedger.smallItems ?? [];

  const itemsToRender = savedCustoms.filter((item) =>
    draftCustoms.includes(item)
  );

  return itemsToRender;
}
