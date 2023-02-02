import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import RNBottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';

type BottomSheetProps = {
  children?: React.ReactNode;
  title?: string;
  visible: boolean;
  onClose: (index: number) => void;
};

export const BottomSheet = ({
  children,
  title,
  visible,
  onClose,
}: BottomSheetProps) => {
  const snapPoints = React.useMemo(() => ['80%'], []);

  const handleSheetChanges = React.useCallback(
    (index: number) => {
      onClose(index);
    },
    [onClose]
  );

  const renderBackdrop = React.useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );

  return (
    <RNBottomSheet
      index={visible ? 0 : -1}
      enablePanDownToClose
      backgroundStyle={styles.overlay}
      snapPoints={snapPoints}
      handleComponent={null}
      backdropComponent={renderBackdrop}
      onChange={handleSheetChanges}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>

        {children}
      </View>
    </RNBottomSheet>
  );
};

const styles = StyleSheet.create({
  overlay: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 4,
  },
  container: {
    padding: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    paddingBottom: 24,
  },
});
