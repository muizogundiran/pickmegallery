import { Keyboard, SafeAreaView, StyleSheet, Text, TouchableOpacity,StatusBar, TouchableWithoutFeedback, View, ScrollView, Image, Dimensions } from 'react-native';
// import {  } from 'react-native';
import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Carousel from '../components/Carousel';
import SmallCarousel from '../components/smallCarousel';

const { width :WIDTH, height : HEIGHT} = Dimensions.get("screen")
export interface HomeProps {
	carouselImages : void ;
	navigation : any;
}
interface carouselImageProps {
	id: string;
	imageHeight: number;
	imageWidth : number;
	likes:  number;
	tags : string[];
	views : number;
	previewURL : string;
	userImageURL : string;
	user : string;
	largeImageURL : string;
	downloads : number;
}
 
const Home: React.FC<HomeProps> = ( { navigation } ) => {

	const logo = {
		uri: 'https://reactnative.dev/img/tiny_logo.png',
		width: 64,
		height: 64
	  };
	const images_url = 'https://pixabay.com/api/?key=21570643-b6a115b4e151258bb084f3e0d&image_type=photo&pretty=true&per_page=15';
	const [carouselImages, setCarouselImages] = useState<Array<carouselImageProps> | undefined>([]);
	const { isLoading, error, data } = useQuery<{ hits : Array<carouselImageProps> }>('repoData',async () => {
		const response = await fetch(images_url)
		if (!response.ok) {
		  throw new Error('Network response was not ok')
		}
		return response.json()
	  },{
		   onSuccess: (data) => {
			//    console.log(data) 
			   setCarouselImages(data.hits)
		   }
	   }
	 );


	 
	return ( 
		<SafeAreaView style={{ backgroundColor : "#ddd"}}>
		<StatusBar barStyle="dark-content" backgroundColor="#ddd"/>
		<TouchableWithoutFeedback onPress={() => {
		  Keyboard.dismiss();
		}}>
		<View>
			
			{isLoading ?
			<View style={{ justifyContent  : 'center' , alignItems : 'center' , backgroundColor : 'darkblue' ,  height : 25, }}>
				<Text style={{fontSize : 15 , textTransform : 'uppercase' , fontWeight : 'bold' , color : 'white'}}>Loading 🔃</Text>
			</View> : <View>
			<View style={styles.navbar} >
			<Text style={styles.title}>PickMe Gallery</Text>
			<TouchableOpacity onPress={() => {
				navigation.navigate('Search')
			}} >
			  <Feather name="search" color="#0d0d0d" size={20} style={{ fontWeight : "500", }}/>
			</TouchableOpacity>
		  </View>
			<ScrollView style={{height : HEIGHT}}>
			<Carousel carouselImages={carouselImages}/>
			<SmallCarousel title="Editor's Choice"  editorChoiceImages_url="https://pixabay.com/api/?key=21570643-b6a115b4e151258bb084f3e0d&image_type=photo&pretty=true&per_page=25&editors_choice=true"/>
			<SmallCarousel title="Editor's Choice"  editorChoiceImages_url="https://pixabay.com/api/?key=21570643-b6a115b4e151258bb084f3e0d&image_type=photo&pretty=true&per_page=25&editors_choice=true"/>
			<SmallCarousel title="Editor's Choice"  editorChoiceImages_url="https://pixabay.com/api/?key=21570643-b6a115b4e151258bb084f3e0d&image_type=photo&pretty=true&per_page=25&editors_choice=true"/>
			<SmallCarousel title="Editor's Choice"  editorChoiceImages_url="https://pixabay.com/api/?key=21570643-b6a115b4e151258bb084f3e0d&image_type=photo&pretty=true&per_page=25&editors_choice=true"/>
			<SmallCarousel title="Editor's Choice"  editorChoiceImages_url="https://pixabay.com/api/?key=21570643-b6a115b4e151258bb084f3e0d&image_type=photo&pretty=true&per_page=25&editors_choice=true"/>
			<SmallCarousel title="Editor's Choice"  editorChoiceImages_url="https://pixabay.com/api/?key=21570643-b6a115b4e151258bb084f3e0d&image_type=photo&pretty=true&per_page=25&editors_choice=true"/>
			<SmallCarousel title="Editor's Choice"  editorChoiceImages_url="https://pixabay.com/api/?key=21570643-b6a115b4e151258bb084f3e0d&image_type=photo&pretty=true&per_page=25&editors_choice=true"/>
			<SmallCarousel title="Editor's Choice"  editorChoiceImages_url="https://pixabay.com/api/?key=21570643-b6a115b4e151258bb084f3e0d&image_type=photo&pretty=true&per_page=25&editors_choice=true"/>
			<SmallCarousel title="Editor's Choice"  editorChoiceImages_url="https://pixabay.com/api/?key=21570643-b6a115b4e151258bb084f3e0d&image_type=photo&pretty=true&per_page=25&editors_choice=true"/>
			<SmallCarousel title="Editor's Choice"  editorChoiceImages_url="https://pixabay.com/api/?key=21570643-b6a115b4e151258bb084f3e0d&image_type=photo&pretty=true&per_page=25&editors_choice=true"/>
			</ScrollView>
			</View>
			}
		  </View>
		</TouchableWithoutFeedback> 
	  </SafeAreaView>
	);
}


const styles = StyleSheet.create({
	navbar: {
	  alignItems: 'center',
	  justifyContent: 'space-between',
	  flexDirection : 'row',
	  paddingVertical  :10,
	  paddingHorizontal : 20,
	//   position : 'absolute',
	//   top : 25,
	//   left : 0,
	  zIndex : 10,
	  backgroundColor: '#ddd',
	  width : '100%' ,
	},
	title : {
	  fontSize : 20,
	  color : '#0d0d0d',
	  fontFamily : "Cereal-Medium",
	
	}
  });


export default Home;