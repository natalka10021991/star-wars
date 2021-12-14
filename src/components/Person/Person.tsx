import React from 'react';
import { Button } from 'antd';

export interface PersonProps {
  id: string;
  name: string;
  updatePersonInfo: (name: string) => void;
}

const Person: React.FC<PersonProps> = ({ updatePersonInfo, name, id }) => {
  return (
    <div>
      <Button type='link' block onClick={() => updatePersonInfo(id)}>
        - {name} -
      </Button>
    </div>
  );
};

export default Person;
