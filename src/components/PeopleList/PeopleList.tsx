import React from 'react';
import { List, Avatar, Button } from 'antd';
import { IPerson } from '../../types';
import { getImageUrl } from '../PersonInfo/utils';

interface PeopleListProps {
  people: IPerson[];
  updatePersonInfo: (name: string) => void;
}

const PeopleList: React.VFC<PeopleListProps> = ({ people, updatePersonInfo }) => {
  return (
    <List
      itemLayout='horizontal'
      dataSource={people}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={getImageUrl(item.id)} />}
            title={
              <Button type='text' block onClick={() => updatePersonInfo(item.id)}>
                {item.name}
              </Button>
            }
          />
        </List.Item>
      )}
    />
  );
};

export default PeopleList;
