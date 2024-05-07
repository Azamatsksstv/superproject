import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, Modal, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Setting() {
    const navigation = useNavigation();
    const goToProfile = () => {
        navigation.navigate('Profile');
    };

    const [language, setLanguage] = useState('English');
    const [notificationEnabled, setNotificationEnabled] = useState(true);
    const [darkModeEnabled, setDarkModeEnabled] = useState(false);
    const [showLanguageModal, setShowLanguageModal] = useState(false);

    const toggleNotification = () => {
        setNotificationEnabled(previousState => !previousState);
    };

    const toggleDarkMode = () => {
        setDarkModeEnabled(previousState => !previousState);
    };

    const handleLogout = () => {
        console.log('Logged out!');
    };

    const selectLanguage = (selectedLanguage) => {
        setLanguage(selectedLanguage);
        setShowLanguageModal(false);
    };

    return (
        <View>
            {/* icons */}
            <View style={styles.imageContainer}>
                <TouchableOpacity onPress={goToProfile}>
                    <Image source={require('../assets/back.svg')} style={styles.image} />
                </TouchableOpacity>
            </View>

            {/* Text */}
            <View style={styles.main}>
                <Text style={{ fontSize: 60, fontWeight: 'bold' }}>Settings</Text>
            </View>

            <View style={styles.settCont}>
                <View style={styles.settingItem}>
                    <Text style={styles.settingText}>Notification</Text>
                    <View style={styles.switchBorder}>
                        <Switch
                            trackColor={{ false: "#f4f3f4", true: "#f4f3f4" }}
                            thumbColor={notificationEnabled ? "#767577" : "#767577"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleNotification}
                            value={notificationEnabled}
                        />
                    </View>
                </View>

                <TouchableOpacity style={styles.settingItem} onPress={() => setShowLanguageModal(true)}>
                    <Text style={styles.settingText}>Language: </Text>
                    <Text style={styles.settingText}>{language}</Text>
                </TouchableOpacity>

                <View style={styles.settingItem}>
                    <Text style={styles.settingText}>Dark Mode</Text>
                    <View style={styles.switchBorder}>
                        <Switch
                            trackColor={{ false: "#f4f3f4", true: "#f4f3f4" }}
                            thumbColor={darkModeEnabled ? "#999999" : "#999999"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleDarkMode}
                            value={darkModeEnabled}
                        />
                    </View>
                </View>

                <TouchableOpacity style={styles.settingItem} onPress={handleLogout}>
                    <Text style={styles.settingText}>Log Out</Text>
                </TouchableOpacity>

                <Modal
                    visible={showLanguageModal}
                    animationType="slide"
                    transparent={true}
                    onRequestClose={() => setShowLanguageModal(false)}>
                    <View style={styles.modalContainer}>
                        <View style={styles.languageModal}>
                            <TouchableOpacity onPress={() => selectLanguage('English')}>
                                <Text style={styles.languageOption}>English</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => selectLanguage('Russian')}>
                                <Text style={styles.languageOption}>Russian</Text>
                            </TouchableOpacity>
                            {/* Add more language options as needed */}
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageContainer: {
        flexDirection: 'row',
        padding: 15,
        marginTop: '5%',
        justifyContent: 'space-between'
    },
    image: {
        width: 45,
        height: 45
    },
    main: {
        marginLeft: '5%',
        padding: 10,
    },
    settCont: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        marginVertical: 15,
        borderBottomColor: "#999999",
        borderBottomWidth: 2
    },
    settingText: {
        fontSize: 24,
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5
    },
    switchBorder: {
        borderWidth: 5,
        borderColor: 'gray',
        borderRadius: 20,
        padding: 5,
        marginBottom: 10,
        marginRight: 5
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    languageModal: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
    },
    languageOption: {
        fontSize: 18,
        paddingVertical: 10,
    }
});
