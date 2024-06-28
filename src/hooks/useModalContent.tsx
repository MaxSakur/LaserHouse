import React, {ReactNode, useState, useCallback} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import {CloseIcon} from '../icons';
import {colors, sizes, textStyles} from '../theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface IModalContentProps {
  headerText: string;
  content: ReactNode;
}

interface UseModalContentResult {
  close: () => void;
  open: () => void;
  ModalComponent: ReactNode;
}

const useModalContent = ({
  headerText,
  content,
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
            <Text style={styles.headerText}>{headerText}</Text>
            <TouchableOpacity style={styles.backButton} onPress={close}>
              <CloseIcon />
            </TouchableOpacity>
          </View>
          <View style={styles.contentBody}>{content}</View>
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
    paddingBottom: sizes.l,
    marginBottom: sizes.l,
    alignItems: 'center',
    gap: sizes.l,
    borderBottomWidth: 1,
  },
  backButton: {
    flexDirection: 'row',
  },
  contentBody: {
    alignItems: 'flex-start',
  },
  headerText: {
    ...textStyles.title2,
    textAlign: 'center',
    flex: 1,
  },
});

export default useModalContent;
