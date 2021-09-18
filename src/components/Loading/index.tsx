import loadingIcon from '../../assets/icons/loading-icon.png';
import { Box, Icon } from './styles';

const Loading = () => {
  return (
    <Box>
      <Icon src={loadingIcon} alt="Ícone de fogo" />
      <Icon src={loadingIcon} alt="Ícone de fogo" />
      <Icon src={loadingIcon} alt="Ícone de fogo" />
    </Box>
  );
};

export default Loading;
