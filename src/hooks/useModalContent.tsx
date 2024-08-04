import React, {
  ReactNode,
  useState,
  useCallback,
  ReactElement,
  useRef,
} from 'react';
import {View, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import {CloseIcon} from '../icons';
import {colors, sizes} from '../theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface IModalContentProps {
  header: ReactNode;
  content: ReactElement<{close: () => void}>;
  headerBorder?: boolean;
}

interface UseModalContentResult {
  close: () => void;
  open: () => void;
  ModalComponent: ReactNode;
}

const useModalContent = ({
  header,
  content,
  headerBorder = true,
}: IModalContentProps): UseModalContentResult => {
  const [isVisible, setIsVisible] = useState(false);
  const insets = useSafeAreaInsets();
  const closeRef = useRef<() => void>(() => {});

  const open = useCallback(() => {
    setIsVisible(true);
  }, []);

  const close = useCallback(() => {
    setIsVisible(false);
  }, []);

  closeRef.current = close;

  const ContentWithClose = React.cloneElement(content, {close});

  const ModalComponent = (
    <Modal visible={isVisible} transparent={true} animationType="slide">
      <View style={styles.container}>
        <View style={[styles.content, {top: Math.max(insets.top, 16)}]}>
          <View
            style={[styles.contentHeader, headerBorder && styles.headerBorder]}>
            <View style={styles.header}>{header}</View>
            <TouchableOpacity style={styles.backButton} onPress={close}>
              <CloseIcon />
            </TouchableOpacity>
          </View>
          <View style={styles.contentBody}>{ContentWithClose}</View>
        </View>
      </View>
    </Modal>
  );

  return {close: closeRef.current, open, ModalComponent};
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
  },
  headerBorder: {
    borderBottomWidth: 1,
  },
  backButton: {
    flexDirection: 'row',
  },
  contentBody: {
    alignItems: 'flex-start',
  },
  header: {flex: 1},
});

export default useModalContent;
