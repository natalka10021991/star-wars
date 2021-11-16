import React from 'react'
import { Button } from 'antd';

export interface PersonOptions {
  id?: number,
  name?: string,
  gender?: string,
  hair_color?: string,
  skin_color?: string,
  eye_color?: string,
  height?: string,
  mass?: string,
  birth_year?: string,
  homeworld?: string
  
}

export interface PersonProps
  extends PersonOptions {
    updatePersonInfo: any
}


const Person: React.FC<PersonProps> = ({updatePersonInfo, name}, ...props) => {

  return (
    <div>
      <Button type="link" block onClick={() => updatePersonInfo(name)}>- {name} -</Button>
    </div>
  )
}

export default Person