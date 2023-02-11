import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import * as Icons from '../assets/icons';

const TabItem = ({label, isFocused, onPress, onLongPress,}: {label: string, isFocused: any, onPress: any, onLongPress: any}) => {
    const Icon = () => {
        if(label === "Home") return isFocused ? <Icons.HomeIconActive/> : <Icons.HomeIcon/>

        if(label === "Akun") return isFocused ? <Icons.AkunIconActive/> : <Icons.AkunIcon/>

        if(label === "Pesanan") return isFocused ? <Icons.PesananIconActive/> : <Icons.PesananIcon/>

        return <Icons.HomeIcon/>
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}
        >
            <Icon />
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        alignItems : "center"
    }
})