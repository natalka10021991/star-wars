import { useState } from "react";
import { EntityType } from "./types";

export const useSelectedEntity = <T extends EntityType>(entities: T[]) => {
  const [selectedEntity, setSelectedEntity] = useState<typeof entities[0]>();

  const selectEntity = (id: string) => {
    setSelectedEntity(entities.find((e) => e.id === id));
  };

  return { selectedEntity, selectEntity };
};
