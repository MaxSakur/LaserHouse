import {Platform} from 'react-native';
import {
  getUniqueId,
  getVersion,
  hasDynamicIsland,
  hasNotch,
} from 'react-native-device-info';

export const isIOS = Platform.OS === 'ios';

export const deviceId = async () => await getUniqueId();

export const appVersion = getVersion();

export const hasNotchOrDynamicIsland = () => hasNotch() || hasDynamicIsland();
