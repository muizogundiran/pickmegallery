import { SafeAreaView, StyleSheet, Text,Dimensions, TextInput,FlatList, TouchableOpacity,StatusBar, TouchableWithoutFeedback, View, Image } from 'react-native';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import tailwind from 'tailwind-rn';

const { width :WIDTH, height : HEIGHT} = Dimensions.get("screen")

export interface CarouselProps {
	carouselImages : any;
}

 
const Carousel: React.FC<CarouselProps> = ( { carouselImages } ) => {
	return (  
		
		<View>
			<FlatList 
			horizontal 
			snapToInterval={WIDTH * 0.76} 
			showsHorizontalScrollIndicator={false} 
			decelerationRate={0}
			style={[tailwind("px-4")]} keyExtractor={(item) =>  `carouselImages- ${item?.id}`} data={carouselImages} renderItem={({item}) => {
			return (
				<TouchableOpacity>
					<View style={{width : WIDTH * 0.7, height: HEIGHT * 0.6 , marginHorizontal : WIDTH * 0.03 }}>
						<Image source={{ uri : item?.largeImageURL}} style={[{ width : WIDTH * 0.7, height: HEIGHT * 0.6 ,}, tailwind("rounded-2xl bg-gray-800")]}/>
					</View>
				</TouchableOpacity>
			)
		}}/>
		</View>
	);
}
 
export default Carousel;