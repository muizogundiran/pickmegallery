import { SafeAreaView, StyleSheet, Text,Dimensions, TextInput,FlatList, TouchableOpacity,StatusBar, TouchableWithoutFeedback, View, Image } from 'react-native';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import tailwind from 'tailwind-rn';

const { width :WIDTH, height : HEIGHT} = Dimensions.get("screen")
export interface smallCarouselProps {
	title : string ;
	editorChoiceImages_url : string ;
}
export interface smallCarouselImagesProps {
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
	webformatURL : string ;
}
const SmallCarousel: React.FC<smallCarouselProps> = ({title , editorChoiceImages_url}) => {
	const [editorChoiceImages , seteditorChoiceImages] = useState<Array<smallCarouselImagesProps> | undefined>([]);
	const { isLoading , error , data } = useQuery<{ hits : Array<smallCarouselImagesProps> }>('choiceData' , async () => {
		const response = await fetch(editorChoiceImages_url)
		if (!response.ok) {
		   throw new Error('Network response was not ok')
		 }
		 return response.json()
	} , {
		onSuccess : (data) => {
			seteditorChoiceImages(data.hits)
		}
	})
	return ( 
		<View>
			<Text style={[tailwind("px-6 py-3 text-2xl font-medium")]}>{title}</Text>
			<FlatList 
			horizontal
			snapToInterval={WIDTH * 0.64} 
			showsHorizontalScrollIndicator={false} 
			decelerationRate={0}
			style={[tailwind("px-4")]} keyExtractor={(item) =>  `carouselImages- ${item?.id}`} data={editorChoiceImages} renderItem={({item}) => {
			return (
				<TouchableOpacity>
					<View style={{width : WIDTH * 0.3, height: HEIGHT * 0.25 , marginHorizontal : WIDTH * 0.01 }}>
						<Image source={{ uri : item?.webformatURL}} style={[{ width : WIDTH * 0.3, height: HEIGHT * 0.25 ,}, tailwind("rounded-lg bg-gray-800")]}/>
					</View>
				</TouchableOpacity>
			)
		}}
			 />
		</View>
	 );
}
 
export default SmallCarousel;