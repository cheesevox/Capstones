import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { categories, colors } from "../Constant";

const changePicker =({index})=>{

}

const CategoriesFilter = () => {
	return (
		<View>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{categories.map((category, index) => {
					return (
						<View
							key={index}
							style={{
								backgroundColor: colors.COLOR_LIGHT,
									// index === 0 ? colors.COLOR_PRIMARY : colors.COLOR_LIGHT,
								marginRight: 10,
								borderRadius: 8,
								paddingHorizontal: 16,
								paddingVertical: 10,
								shadowColor: "#000",
								shadowOffset: { width: 0, height: 4 },
								shadowOpacity: 0.1,
								shadowRadius: 7,
								width:"auto",
								marginVertical: 16,
							}}
						>
							{/* <TouchableOpacity onPress={changePicker(index)}> */}
							<Text
								style={{
									// index === 0 && colors.COLOR_LIGHT,
									fontSize: 18,
								}}>
								{category.category}
							</Text>
							{/* </TouchableOpacity> */}
							
						</View>
					);
				})}
			</ScrollView>
		</View>
	);
};

export default CategoriesFilter;

const styles = StyleSheet.create({});
