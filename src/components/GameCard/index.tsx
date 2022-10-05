import {
  ImageBackground,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { THEME } from '../../theme';
import { styles } from './styles';

export interface GameCardProps {
  id: string;
  title: string;
  _count: {
    ads: number;
  };
  bannerUrl: string;
}

interface Props extends TouchableOpacityProps {
  data: GameCardProps;
}

export function GameCard({ data, ...rest }: Props) {
  function PluralOrSingularAds() {
    if (data._count.ads > 1) {
      return `${data._count.ads} anúncios`;
    } else if (data._count.ads === 0) {
      return 'Nenhum anúncio';
    } else {
      return `${data._count.ads} anúncio`;
    }
  }
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground source={{ uri: data.bannerUrl }} style={styles.cover}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{data.title}</Text>
          <Text style={styles.ads}>{PluralOrSingularAds()}</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
