import React from 'react'
import { StyleSheet, View } from 'react-native'

type SeparatorProps = {
    height?: number;
}

const _Separator = ({ height = 8 }: SeparatorProps) => {
  return (
    <View style={{ ...styles, height }} />
  )
}

export const Separator = React.memo(_Separator);

const styles = StyleSheet.create({
    container: {
        width: '100%'
    }
})
