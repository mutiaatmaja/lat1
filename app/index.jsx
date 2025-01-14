import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View, Image } from "react-native";
import { router, Redirect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";


export default function App() {
	return (
		<SafeAreaView className="bg-primary h-full">
			<ScrollView contentContainerStyle={{ height: "100%" }}>
				<View className="w-full justify-center items-center min-h-[85vh] px-4">
					<Image source={images.logo} className="w-[130px] h-[84px]" resizeMode="contain" />
					<Image source={images.cards} className="max-w-[380px] w-full h-[300px]" resizeMode="contain" />
					<View className="relative mt-5">
						<Text className="text-3xl text-white font-bold text-center">
							MANTAPPPP {' '}
							<Text className="text-secondary-200">AURA</Text>
							<Image source={images.path} resizeMode="contain" />
						</Text>
					</View>
					<Text className="text-white text-center mt-5">
						Hallo semoga berhasil
					</Text>
					<CustomButton title="LANJUTKAN" handlePress={() => { router.push('/sign-in') }} containerStyle="w-full mt-7" />
				</View>
			</ScrollView>
			<StatusBar backgroundColor="#161622" style="light" />
		</SafeAreaView>
	);
}
