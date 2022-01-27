import { useState, FC } from "react";
import { Input, Spin } from "antd";
import PeopleList from "components/PeopleList/PeopleList";
import PersonInfo from "components/PersonInfo/PersonInfo";
import { useFetchPeople } from "guide/hooks/useEntity";
import { useFilteredEntities } from "guide/hooks/useFilteredEntities";
import { useSelectedEntity } from "guide/hooks/useSelectedEntity";

const PeoplePageGuide: FC = () => {
  const [search, setSearch] = useState("");
  const { entities: people, isLoading, isError } = useFetchPeople();
  const filteredPeople = useFilteredEntities(people, search);
  const { selectedEntity: selectedPerson, selectEntity: selectPerson } =
    useSelectedEntity(people);

  if (isLoading) {
    return (
      <div className="empty-list">
        <Spin size="large" />
      </div>
    );
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <div>
      <h2>People</h2>
      <Input
        placeholder="inpu search text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="content">
        {people?.length && (
          <PeopleList updatePersonInfo={selectPerson} people={filteredPeople} />
        )}

        {selectedPerson ? (
          <PersonInfo person={selectedPerson} />
        ) : (
          <div className="empty-info">Select a person</div>
        )}
      </div>
    </div>
  );
};

export default PeoplePageGuide;
