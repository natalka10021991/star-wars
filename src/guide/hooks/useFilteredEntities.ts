import { useEffect, useState } from "react";
import { EntityType } from "./types";

export const useFilteredEntities = <T extends EntityType>(
  entities: T[],
  search: string
) => {
  const [filtered, setFiltered] = useState<typeof entities>([]);

  useEffect(() => {
    setFiltered(
      entities.filter((entity) => {
        return entity.name.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [entities, search]);

  return filtered;
};
