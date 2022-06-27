import React from 'react';
import {useParams} from 'react-router-dom';
import {useTags} from '../useTags';
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import {Button} from '../components/Button';
import styled from 'styled-components';
import {Input} from '../components/Input';

type ParamsType = {
  id: string
}

const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background-color: white;
`;
const InputWrapper = styled.div`
background-color: white;
padding: 0 16px;
margin-top: 8px;
`;
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Space = styled.div`
  height: 48px;
`;

const TagEdit: React.FC = () => {
  let {id: idString} = useParams<ParamsType>();
  const {findTag, updateTag} = useTags();
  const tag = findTag(parseInt(idString));
  console.log(tag);

  return (
    <Layout>
      <div>
        <Topbar>
          <Icon name='left'/>
          <span>编辑标签</span>
          <Icon name=''/>
        </Topbar>
      </div>
      <InputWrapper>
        <Input value={tag.name} label='标签名' type='text' placeholder='输入你的标签名~'
               onChange={(e) => {updateTag(tag.id, {name: e.target.value});}}/>
      </InputWrapper>
      <Center>
        <Space/>
        <Button>
          删除标签
        </Button>
      </Center>

    </Layout>
  );
};

export {TagEdit};