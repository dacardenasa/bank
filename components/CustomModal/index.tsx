import React from "react";
import { Modal, StyleSheet, Pressable, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";

type CustomModalProps = {
  children: React.ReactNode;
  isVisible: boolean;
  setIsVisible: () => void;
};

const _CustomModal = ({
  children,
  isVisible,
  setIsVisible
}: CustomModalProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={setIsVisible}
    >
      <View style={styles.container}>
        <View style={styles.modalView}>
          <Pressable style={styles.headerBox} onPress={setIsVisible}>
            <AntDesign name="close" size={24} color="#707075" />
          </Pressable>
          {children}
        </View>
      </View>
    </Modal>
  );
};

export const CustomModal = React.memo(_CustomModal);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 100,
    elevation: 5,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.6)"
  },
  modalView: {
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16
  },
  headerBox: {
    width: "100%",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F2F2F3",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  }
});
