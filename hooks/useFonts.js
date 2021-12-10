import * as Font from 'expo-font';

export default useFonts = async () => {
    await Font.loadAsync({
        "BlackOpsOne-Regular": require('../assets/fonts/BlackOpsOne-Regular.ttf'),
        "BungeeInline-Regular": require('../assets/fonts/BungeeInline-Regular.ttf'),
        "HennyPenny-Regular": require('../assets/fonts/HennyPenny-Regular.ttf'),
        "PressStart2P-Regular": require('../assets/fonts/PressStart2P-Regular.ttf'),
        "Righteous-Regular": require('../assets/fonts/Righteous-Regular.ttf'),
        "Shojumaru-Regular": require('../assets/fonts/Shojumaru-Regular.ttf'),
    });
};
