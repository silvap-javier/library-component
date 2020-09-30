import React from 'react'

import MultipleChoice from 'lemonade-test'
import 'lemonade-test/dist/index.css'
import {exerciseData} from './mulitple-choice-data.js';

const App = () => {
  return <MultipleChoice data={exerciseData}/>
}

export default App
