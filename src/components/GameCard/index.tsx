import {
  ImageBackground,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';

import { styles } from './styles';

export interface GameCardProps {
  id: string;
  nome: string;
  ads: string;
  cover: ImageSourcePropType;
}

interface Props {
  data: GameCardProps;
}

export function GameCard({ data }: Props) {
  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground source={data.cover} style={styles.cover} />
    </TouchableOpacity>
  );
}
