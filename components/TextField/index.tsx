import React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

type TextFieldProps = TextInputProps & {
  hasError?: boolean;
};

const _TextField = ({ hasError = false, ...rest }: TextFieldProps) => {
  return (
    <TextInput
      testID="textfield"
      style={{ ...styles.textInput, ...(hasError ? styles.errorField : {}) }}
      {...rest}
    />
  );
};

export const TextField = React.memo(_TextField);

const styles = StyleSheet.create({
  textInput: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#E7E7E7",
    paddingHorizontal: 16,
    borderRadius: 4
  },
  errorField: {
    borderColor: "red"
  }
});
