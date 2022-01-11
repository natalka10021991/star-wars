import React from 'react';
import { List, Avatar, Button } from 'antd';
import { IPlanet } from '../../types';
import { getImageUrl } from '../PersonInfo/utils';

interface PlanetsListProps {
  planets: IPlanet[];
  updatePlanetInfo: (name: string) => void;
}

const PlanetsList: React.FC<PlanetsListProps> = ({ planets, updatePlanetInfo }) => {
  return (
    <List
      itemLayout='horizontal'
      dataSource={planets}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={getImageUrl(item.id)} />}
            title={
              <Button type='text' block onClick={() => updatePlanetInfo(item.id)}>
                {item.name}
              </Button>
            }
          />
        </List.Item>
      )}
    />
  );
};

export default PlanetsList;
