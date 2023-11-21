import { ScrollView,StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from "react";
import { categories, colors } from "../Constant";
import { getAllArea } from "../Api";

const changePicker =({index})=>{

}

const CategoriesFilter = () => {
	const [area, setArea] = useState([])
	const [areaId,setAreaId] = useState(area[0]?.areaId)
	const [session,setSession] =useState([])
	useEffect(()=> { 
		getAllArea().then((ref)=>{
			setArea(ref)
		})
	},[]) 

	return (
		<View>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{area.map((area, index) => {
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
							<TouchableOpacity onPress={()=>setAreaId(area.areaId)}>
								<Text style={{fontSize:16}}>
								{area.areaName}
								</Text>
							</TouchableOpacity>
							
						</View>
					);
				})}
			</ScrollView>
		</View>
	);
};

export default CategoriesFilter;

const styles = StyleSheet.create({});
