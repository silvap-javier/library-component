import React, { useEffect } from 'react';
import createStore from '../store/multiple-choice-store';
import { useLocalStore, useObserver } from 'mobx-react-lite';
import styles from './styles.module.css';
import { ResponseItem } from './ResponseItem';
import ExerciseControls from '../../common/components/exercise-controls';

export default function MultipleChoiceQuestion({data}) {
  const store = useLocalStore(() => createStore(data));

  useEffect(() => {
    window.store = store;
  }, [store])

  return useObserver(() =>
    <div className={styles.LemonadeApp}>
      <div className={styles.multipleChoice}>
        <div
          className={styles.exerciseSteam}
          dangerouslySetInnerHTML={{ __html: data.steam }}
        />

        <div className="exerciseResponses">
          {store.responses.map(response => (
            <ResponseItem
              key={`response_${response.idx}`}
              response={response}
              isEvaluated={store.isEvaluated}
            />
          ))}
        </div>

        <ExerciseControls store={store}/>
      </div>
    </div>,
  );
}


