import { getPeople } from "guide/services/peopleApi";
import { useEffect, useState } from "react";
import { IPerson } from "types";

export const useEntity = <T extends unknown>(getEntity: () => Promise<T[]>) => {
  const [entities, setEntities] = useState<T[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState("");

  useEffect(() => {
    const fetchEntity = async () => {
      setLoading(true);
      try {
        const data = await getEntity();
        setEntities(data);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchEntity();
  }, [getEntity]);

  return { entities, isLoading, isError };
};

export const useFetchPeople = () => {
  return useEntity<IPerson>(getPeople);
};
