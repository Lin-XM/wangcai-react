import React from 'react';
import {useParams} from 'react-router-dom';
import {useTags} from '../useTags';

type ParamsType = {
  id: string
}

const TagEdit: React.FC = () => {
  let {id} = useParams<ParamsType>();
  const {findTag} = useTags();

  const tag = findTag(parseInt(id));
  return (
    <div>{tag.name}</div>
  );
};

export {TagEdit};