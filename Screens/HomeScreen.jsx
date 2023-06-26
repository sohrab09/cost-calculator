import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Image, Modal, TouchableOpacity, Alert, Pressable } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const paymentType = [
    {
        id: 1,
        name: 'Bkash',
        image: require('../assets/Bkash.png'),
        charge: 1.85,
        sendMoney: 5
    },
    {
        id: 2,
        name: 'Nagad',
        image: require('../assets/Nagad.png'),
        charge: 1.148,
        sendMoney: 3
    },
    {
        id: 3,
        name: 'Rocket',
        image: require('../assets/Rocket.png'),
        charge: 1.67,
        sendMoney: 2
    },
    {
        id: 4,
        name: 'Upay',
        image: require('../assets/Upay.png'),
        charge: 1.4,
        sendMoney: 7
    },
    {
        id: 5,
        name: 'Tap',
        image: require('../assets/Tap.png'),
        charge: 1.47,
        sendMoney: 4
    }
]


const HomeScreen = () => {

    const [amount, setAmount] = useState(0);

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>

            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Information has been collected from service provider's official website.FeeMaster is not responsible for any kind of misinformation.</Text>
                            <TouchableOpacity
                                onPress={() => setModalVisible(!modalVisible)}>
                                <AntDesign name="close" size={24} color="red" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>



            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 50,
                    padding: 10
                }}
            >
                <Text style={styles.text}>FeeMaster</Text>
                <TouchableOpacity onPress={() => setModalVisible(true)}
                >
                    <Entypo
                        name="info-with-circle"
                        size={24}
                        color="green"
                    />
                </TouchableOpacity>
            </View>

            <Text style={{ textAlign: 'justify', margin: 10 }}>Welcome to <Text style={{ fontWeight: 'bold' }}>FeeMaster</Text>. Calculate and compare <Text style={{ fontWeight: 'bold' }}>CASH-OUT</Text> charge/s of all popular mobile banking providers in Bangladesh.</Text>

            <Text style={{ textAlign: 'justify', margin: 10 }}>Welcome to <Text style={{ fontWeight: 'bold' }}>FeeMaster</Text>. বাংলাদেশের সকল জনপ্রিয় মোবাইল ব্যাংকিং প্রদানকারীদের ক্যাশ-আউট চার্জ/চার্জগুলি গণনা এবং তুলনা করুন।</Text>


            <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', margin: 10, marginBottom: 30 }}>
                <Text style={styles.cashout}>CASH OUT AMOUNT</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex: 1000"
                    keyboardType="numeric"
                    maxLength={10}
                    onChangeText={(amount) => setAmount(+amount)}
                />
            </View>

            <View>
                <View style={styles.headerContainer}>
                    <Text style={styles.image}></Text>
                    <Text style={styles.header}>Charge</Text>
                    <Text style={styles.header}>Amount</Text>
                    <Text style={styles.header}>Payment</Text>
                    <Text style={styles.header}>Payable</Text>
                </View>
                {
                    paymentType.map((item, index) => {

                        return (
                            <View
                                style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}
                                key={index}
                            >
                                <Image source={item.image} style={styles.image} />

                                <Text style={styles.charge}>{item.charge} %</Text>

                                <Text style={styles.charge}>{item.charge * amount / 100}</Text>

                                <Text style={styles.charge}>{amount - item.charge * amount / 100}</Text>

                                <Text style={styles.charge}>{amount + item.charge * amount / 100}</Text>
                            </View>
                        )
                    })
                }
            </View>

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    cashout: {
        fontWeight: 'bold',
        paddingVertical: 10,
        fontSize: 18,
        color: '#00008B',
    },
    input: {
        borderWidth: 1,
        borderColor: '#34b2fc',
        borderRadius: 7,
        padding: 3,
        fontSize: 20,
        width: 180,
        textAlign: 'right',
    },
    headerContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        backgroundColor: '#00008B',
        borderRadius: 5,
    },
    header: {
        color: '#fff',
        fontWeight: 'bold',
        paddingVertical: 10,
        paddingHorizontal: 10,
        textAlign: 'center',
    },
    image: {
        width: 54,
        height: 36,
        borderRadius: 5,
    },
    charge: {
        fontWeight: 'bold',
        paddingVertical: 10,
        textAlign: 'center',
        backgroundColor: '#e6eff8',
        borderRadius: 5,
        borderColor: '#34b2fc',
        borderWidth: 1,
        fontSize: 12,
        width: 70,
        height: 36,
    },
    developer: {
        color: '#17594A',
        fontSize: 12,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 180
    },


    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
})