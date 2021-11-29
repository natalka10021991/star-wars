import React from 'react'
import { Button } from 'antd';
import {IPerson} from '../../types'

export interface PersonProps
  extends IPerson {
    updatePersonInfo: (name: string) => void
}


const Person: React.FC<PersonProps> = ({updatePersonInfo, name}, ...props) => {

  return (
    <div>
      <Button type="link" block onClick={() => updatePersonInfo(name!)}>- {name} -</Button>
    </div>
  )
}

export default Person