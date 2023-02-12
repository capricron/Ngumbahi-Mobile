import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import React from 'react'

import * as Icons from '../assets/icons'
import { SEKUNDER_COLOR } from '../utils/contents'

const ButtonIcon = ({title, type} : {title : string, type: string}) => {
    const Icon = () => {
        if (title === 'Add Saldo') return <Icons.BillIcon/>

        if (title === 'Get Point') return <Icons.PointIcon/>

        if (title === 'Kiloan') return <Icons.KiloanIcon/>

        if (title === 'Satuan') return <Icons.SatuanIcon/>

        if (title === 'VIP') return <Icons.VipIcon/>

        if (title === 'Karpet') return <Icons.KarpetIcon/>

        if (title === 'Setrika') return <Icons.SetrikaIcon/>

        if (title === 'Ekspress') return <Icons.EkpressIcon/>


        return <Icons.BillIcon/>
    }
    return (
        <TouchableOpacity style={container(type)}>
            <View style={button(type)}>
                <Icon/>
            </View>
            <Text style={text(type)}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default ButtonIcon

const button = (type: string) => ({
    backgroundColor: SEKUNDER_COLOR,
    padding: type === "layanan" ? 12 : 7,
    borderRadius: 10,
});

const container = (type: string) => ({
    marginBottom: type === "layanan" ? 12 : 0,
    marginRight: type === "layanan" ? 30 : 0,
})

const text = (type: string) => ({
    fontSize: type === "layananan" ? 14 : 10,
    textAlign: "center",
    fontFamily: type === "layananan" ? "TitilliumWeb-Light" :"TitilliumWeb-Reguler",
})
