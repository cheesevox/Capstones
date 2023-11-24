import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity, FlatList, Pressable, Image } from "react-native";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import React, { useState, useEffect } from "react";
// import CategoriesFilter from "../components/CategoriesFilter";
import { colors, item } from "../Constant";
import { getAllMealInSessionID, getAllSessionByAreaId } from "../Api";
import { getAllArea } from "../Api";
import MealSessionCard from "../components/MealSessionCard";
import { Dropdown } from 'react-native-element-dropdown';


const FoodListScreen = ({ navigation }) => {
	const [touch, setTouch] = useState(0)
	const [area, setArea] = useState([])
	const [areaId, setAreaId] = useState()
	const [session, setSession] = useState([])
	const [mealInSession, setMealInSession] = useState([])
	const [mealInSessionId, setMealInSessionId] = useState([])

	const fetchAllSessionByAreaId = () => {
		getAllSessionByAreaId(areaId ? areaId : area[0]).then((res) => {
			console.log("session", res)
			setSession(res)
		}).catch(error => console.log(error))
	}
	useEffect(() => {
		getAllArea().then((ref) => {
			console.log(ref)
			setArea(ref)
		})
		console.log("area id", area[0]?.areaId)
	}, [])
	useEffect(() => {
		fetchAllSessionByAreaId()
	}, [areaId])


	const datas = [
		{ label: 'Go Vap', value: '1' },
		{ label: 'Binh Thanh', value: '2' },
		{ label: 'Tan Binh', value: '3' },
		{ label: 'Quan 12', value: '4' },
		{ label: 'Quan 5', value: '5' },
	];

	const [value, setValue] = useState(null);
	const [isFocus, setIsFocus] = useState(false);

	const renderLabel = () => {
		if (value || isFocus) {
			return (
				<Text style={[styles.label, isFocus && { color: 'blue' }]}>
					Dropdown label
				</Text>
			);
		}
		return null;
	};

	return (

		<SafeAreaView style={{ flex: 1, marginHorizontal: 16, marginTop: 40 }}>
			{/* render header */}

			<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
				<View style={{}}>
					<View style={{}}>
						<TouchableOpacity
							style={{ flexDirection: "row" }}
							onPress={() => navigation.navigate("UserProfile")}
						>
							<Header headerIcon={"user"} style={{}} />
							<Header headerText={"Hello user"} />

						</TouchableOpacity>
					</View>
				</View>
				<Header headerIcon={"bell-o"} />

			</View>


			{/* Search Filter */}
			<SearchFilter placeholder=" Món Ngon Mẹ Làm "
			// item={item}
			/>
			<View style={styles.container}>
				{renderLabel()}
				<Dropdown
					style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
					placeholderStyle={styles.placeholderStyle}
					selectedTextStyle={styles.selectedTextStyle}
					inputSearchStyle={styles.inputSearchStyle}
					data={datas}
					labelField="label"
					valueField="value"
					placeholder={!isFocus ? 'Select District' : '...'}
					searchPlaceholder="Search..."
					value={value}
					onFocus={() => setIsFocus(true)}
					onBlur={() => setIsFocus(false)}
					onChange={item => {
						setValue(item.value);
						setIsFocus(false);
					}}
				/>
			</View>

			{/* sessiion filter */}

			<View style={{ marginTop: 22 }}>
				<Text style={{ fontSize: 22, fontWeight: "bold" }}>Area</Text>
				{/* district list */}
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
										width: "auto",
										marginVertical: 16,
									}}
								>
									<TouchableOpacity onPress={() => {
										key = { areaId }
										console.log(area.areaId)
										setAreaId(area.areaId)
										// console.log(mealInSession)
									}}>
										<Text style={{ fontSize: 16 }}>
											{area.areaName}
											{/* {area.session} */}
										</Text>
									</TouchableOpacity>
								</View>
							);
						})}
					</ScrollView>
					<View>
						<FlatList
							data={session}
							renderItem={({ item }) => (
								<ScrollView showsHorizontalScrollIndicator={false}>
									{/* <Pressable
											onPress={() => navigation.navigate("MealDetail", { item: item })}
											style={{
												backgroundColor: colors.COLOR_LIGHT,
												shadowColor: "#000",
												shadowOffset: { width: 0, height: 4 },
												shadowOpacity: 0.1,
												shadowRadius: 7,
												elevation: 5,
												borderRadius: 16,
												marginVertical: 16,
												alignItems: "center",
												paddingHorizontal: 8,
												paddingVertical: 26,
												marginRight: 20
											}}
										> */}
									<Text style={{ fontSize: 25, fontWeight: "bold", elevation: 2 }}>Session {item.sessionType}</Text>
									<MealSessionCard sessionId={item.sessionId} />
									<View style={{ flexDirection: "row", marginTop: 8 }}>
									</View>
									{/* </Pressable> */}
								</ScrollView>
							)}
							showsVerticalScrollIndicator={false}
						/>
					</View>

				</View>
			</View>


			{/* </View> */}
			< View >
				<Text>
				</Text>
			</View >
		</SafeAreaView >
	);
};

export default FoodListScreen;

const styles = StyleSheet.create({
	touchactive: { backgroundColor: '#f96163' },
	textAreaActive: { backgroundColor: '#f96163',
	container: {
		backgroundColor: 'white',
		padding: 16,
	  },
	  dropdown: {
		height: 50,
		borderColor: 'gray',
		borderWidth: 0.5,
		borderRadius: 8,
		paddingHorizontal: 8,
	  },
	  icon: {
		marginRight: 5,
	  },
	  label: {
		position: 'relative',
		backgroundColor: 'white',
		left: 22,
		top: 8,
		paddingHorizontal: 8,
		fontSize: 14,
	  },
	  placeholderStyle: {
		fontSize: 16,
	  },
	  selectedTextStyle: {
		fontSize: 16,
	  },
	  inputSearchStyle: {
		height: 40,
		fontSize: 16,
	  },

}
});
