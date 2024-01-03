// style
import { RoundButton } from 'components/shared_style';

export const CountDownButton = ({ onClick, isDisable }) => {
  return (
    <RoundButton onClick={onClick} isDisable={isDisable}>
      ー
    </RoundButton>
  );
};
