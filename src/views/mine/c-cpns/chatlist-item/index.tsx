import React, { ReactNode } from 'react';
import { memo } from 'react';
import { ChatItemWrapper } from './style';
import Pic from '@/assets/img/head_portrait.jpg';
import classNames from 'classnames';
interface IProps {
  children?: ReactNode;
}

const ChatItem: React.FC<IProps> = () => {
  return (
    <ChatItemWrapper>
      <div
        className={classNames('info', {
          activeCard: true,
        })}
      >
        <div className="left">
          <div className="icon">
            <img src={Pic} alt="" />
          </div>
        </div>
        <div className="right">
          <div className="name">大毛</div>
          <div className="des">我是大毛</div>
        </div>
      </div>
    </ChatItemWrapper>
  );
};
export default memo(ChatItem);
ChatItem.displayName = 'ChatItem';
