import { Keyboard, SafeAreaView, StyleSheet, Text,Dimensions, TextInput,TouchableOpacity,StatusBar, TouchableWithoutFeedback, View, Image, Animated } from 'react-native';
import React  from 'react';
import tailwind from 'tailwind-rn';
import { Feather } from '@expo/vector-icons';
export interface SearchProps {
	navigation : any
}

const { width :WIDTH, height : HEIGHT} = Dimensions.get("screen")
const Search: React.FC<SearchProps> = ({navigation}) => {
	const fadeAnim = React.useRef(new Animated.Value(0)).current
	const [search , setSearch] = React.useState<String>('')
	// React.useEffect(() => {
	// 	Animated.timing(
	// 	  fadeAnim, { toValue: 1, duration: 1000 , useNativeDriver : true } 
	// 	).start()
	//   }, [fadeAnim])
	return ( 

		<View>
		{/* <Animated.View style={{ opacity: fadeAnim, }}> */}
			<TouchableWithoutFeedback onPress={
					() => Keyboard.dismiss()
				}>
				<View>
					<View style={styles.header}>
						<Feather name="arrow-left" color="#0d0d0d" size={20} style={{ fontWeight : "500", marginRight : 10 }} onPress={() => {
							navigation.goBack()
						}}/>
						<TextInput style={[styles.search , tailwind('bg-gray-700 opacity-40 px-2 text-gray-50 rounded-lg ')]}  placeholder="Try 'Wallpapers'" placeholderTextColor="white" onChangeText={(val) => setSearch(val)}></TextInput>

					</View>
					<Text>You searched for {search}</Text>
				</View>
			</TouchableWithoutFeedback>
		{/* </Animated.View> */}
		</View>
	 );
}
 
const styles = StyleSheet.create({
	header : {
		width : WIDTH , 
		paddingVertical  : 15 ,
		paddingHorizontal : 30,
		backgroundColor : '#ddd' ,
		flexDirection : 'row',
		justifyContent : 'center',
		alignItems : 'center',
	},
	search : {
		width : '100%'  ,
	}

})
export default Search;