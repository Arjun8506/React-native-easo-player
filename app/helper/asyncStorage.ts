import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key: string, value: string) => {
    try {
        // const isThereKey = await AsyncStorage.getItem(key);
        // if (!isThereKey) {
            await AsyncStorage.setItem(key, value);
        // } else {
        //     await AsyncStorage.setItem(key, value);
        // }
    } catch (error) {
        console.error("Error storing data:", error);
    }
}

export const getData = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value;
    } catch (error) {
        console.error("Error retrieving data:", error);
        return null;
    }
}

export const removeData = async (key: string) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.error("Error removing data:", error);
    }
}

export const clearAllData = async () => {
    try {
        await AsyncStorage.clear();
    } catch (error) {
        console.error("Error clearing data:", error);
    }
}