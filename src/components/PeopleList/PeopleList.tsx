import React from 'react';
import { IPerson } from '../../types';
import { List, Avatar } from 'antd';
import { getImageUrl } from '../PersonInfo/utils';

interface PeopleListProps {
  people: IPerson[];
  // getPerson: (name: string) => IPerson
  updatePersonInfo: (name: string) => void;
}

const PeopleList: React.FC<PeopleListProps> = ({ people, updatePersonInfo }) => {
  return (
    <>
      <List
        itemLayout='horizontal'
        dataSource={people}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={getImageUrl(item.id)} />}
              title={
                <a href='#' onClick={() => updatePersonInfo(item.id)}>
                  {item.name}
                </a>
              }
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default PeopleList;
