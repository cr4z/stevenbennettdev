import { useEffect, useState } from "react";
import { WarehouseProfile } from "../../data/types/warehouse_profile";
import { API_WAREHOUSES } from "../../data/api";

export function useFetchWarehouseProfile(): WarehouseProfile | null {
  const [warehouseProfile, setWarehouseProfile] =
    useState<WarehouseProfile | null>(null);

  useEffect(() => {
    fetchAndSetWarehouseProfile();

    async function fetchAndSetWarehouseProfile() {
      const wp = await API_WAREHOUSES.v1WarehouseProfilesGet();
      setWarehouseProfile(wp);
    }
  }, []);

  return warehouseProfile;
}
