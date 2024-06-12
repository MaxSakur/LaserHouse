import React, {ReactNode, useState, useCallback} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import {LeftArrowIcon} from '../icons';
import {colors, sizes, textStyles} from '../theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {width} from '../utils';

interface IModalContentProps {
  headerText: string;
  contentText: string;
}

interface UseModalContentResult {
  close: () => void;
  open: () => void;
  ModalComponent: ReactNode;
}

const useModalContent = ({
  headerText,
  contentText,
}: IModalContentProps): UseModalContentResult => {
  const [isVisible, setIsVisible] = useState(false);
  const insets = useSafeAreaInsets();
  const open = useCallback(() => {
    setIsVisible(true);
  }, []);

  const close = useCallback(() => {
    setIsVisible(false);
  }, []);

  const ModalComponent = (
    <Modal visible={isVisible} transparent={true} animationType="slide">
      <View style={styles.container}>
        <View style={[styles.content, {top: Math.max(insets.top, 16)}]}>
          <View style={styles.contentHeader}>
            <TouchableOpacity style={styles.backButton} onPress={close}>
              <LeftArrowIcon />
            </TouchableOpacity>
            <View>
              <Text style={styles.headerText}>{headerText}</Text>
            </View>
          </View>
          <View style={styles.contentBody}>
            <Text style={styles.bodyText}>{contentText}</Text>
          </View>
        </View>
      </View>
    </Modal>
  );

  return {close, open, ModalComponent};
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.white,
    padding: sizes.xl,
    borderRadius: sizes.radius,
  },
  contentHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: sizes.l,
    justifyContent: 'space-between',
  },
  backButton: {
    flexDirection: 'row',
    marginRight: sizes.l,
  },
  contentBody: {
    alignItems: 'flex-start',
  },
  headerText: {
    fontSize: sizes.l,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'left',
    width: width - sizes.xl * 6,
  },
  bodyText: {
    ...textStyles.body1,
  },
});

export default useModalContent;
