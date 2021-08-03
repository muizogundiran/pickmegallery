import { Keyboard, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity,StatusBar, TouchableWithoutFeedback, View } from 'react-native';
// import {  } from 'react-native';
import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { useQuery } from 'react-query';


export interface HomeProps {
	
}

interface Image {
	id: string;
	height: number;
	width : number;
	likes:  number;
	tags : string[];
	views : number;
	previewUrl : string;
	userImageUrl : string;
	user : string;
	largeImageUrl : string;
	downloads : number;

}
 
const Home: React.FC<HomeProps> = () => {
	const api_url = 'https://pixabay.com/api/?key=21570643-b6a115b4e151258bb084f3e0d&q=yellow+flowers&image_type=photo&pretty=true&per_page=10';
	const [images, setImages] = useState<Array<Image> | undefined>([])
	const { isLoading, error, data } = useQuery<{ hits : Array<Image> }>('repoData',async () => {
		const response = await fetch(api_url)
		if (!response.ok) {
		  throw new Error('Network response was not ok')
		}
		return response.json()
	  },{
		   onSuccess: (data) => {
			   setImages(data.hits)
		   }
	   }
	 );

	 
	return ( 
		<SafeAreaView>
		<StatusBar barStyle="dark-content" backgroundColor="#fff"/>
		<TouchableWithoutFeedback onPress={() => {
		  Keyboard.dismiss();
		}}>
		<View>
		  <View style={styles.container} >
			<Text style={styles.title}>PickMe Gallery</Text>
			<TouchableOpacity>
			  <Feather name="search" color="#0d0d0d" size={25} style={{ fontWeight : "500", }}/>
			</TouchableOpacity>
		  </View>
		  <FlatList keyExtractor={({item , index}) =>  item?.id} data={images} renderItem={({item}) => {
			  return (
				  <Text key={item?.id}>
					  {item?.id}
				  </Text>
			  )
		  }}/>
		  </View>
		</TouchableWithoutFeedback> 
	  </SafeAreaView>
	);
}


const styles = StyleSheet.create({
	container: {
	  alignItems: 'center',
	  justifyContent: 'space-between',
	  flexDirection : 'row',
	  paddingVertical : 20,
	  paddingHorizontal : 20,
	},
	title : {
	  fontSize : 28,
	  color : '#0d0d0d',
	  fontFamily : "Cereal-Medium"
	}
  });


export default Home;