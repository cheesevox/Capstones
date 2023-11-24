import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity, FlatList, Pressable, Image } from "react-native";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import React, { useState, useEffect } from "react";
// import CategoriesFilter from "../components/CategoriesFilter";
import { colors, item, user } from "../Constant";
import { getAllAreaByDistrictId, getAllDistrict, getAllMealInSessionID, getAllSessionByAreaId } from "../Api";
import { getAllArea } from "../Api";
import MealSessionCard from "../components/MealSessionCard";
import { Dropdown } from 'react-native-element-dropdown';
import { AlignCenter } from "react-native-feather";
import { useSelector } from "react-redux";


const FoodListScreen = ({ navigation }) => {
	const [touch, setTouch] = useState(0)
	const [area, setArea] = useState([])
	const [areaId, setAreaId] = useState()
	const [session, setSession] = useState([])
	const [mealInSession, setMealInSession] = useState([])
	const [mealInSessionId, setMealInSessionId] = useState([])
	const districtDefault = useSelector(state=>state.user.user?.districtId)
	console.log("district defaulttttttttttttttttt",districtDefault)
	const [district, setDistrict] = useState([])
	// const [districtId, setDistrictId] = useState([])
	const [districtId, setDistrictId] = useState();

	const [isFocus, setIsFocus] = useState(false);

	const fetchAllSessionByAreaId = () => {
		getAllSessionByAreaId(areaId ? areaId : area[0]).then((res) => {
			console.log("session", res)
			setSession(res)
		}).catch(error => console.log(error))
	}

	const fectchAllAreaByDistrictId =() =>{
		getAllAreaByDistrictId(districtId ? districtId : districtDefault).then((res) =>{
			console.log("quan 12 neeeeeeeeeeeeeeeeeeeeeeeeee",res)
			console.log("district by id" ,res)
			setArea(res)
		}).catch(error => console.log(error))
	}

	useEffect(() => {
		fetchAllSessionByAreaId()
	}, [areaId])

	useEffect(()=>{
		fectchAllAreaByDistrictId()
		console.log("co vao dc day khong")
	},[districtId])

	useEffect(()=>{
		getAllDistrict().then((ref)=>{
			console.log(ref)
			setDistrict(ref)
		})
	}, [])




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
			<View style={{ flexDirection: "row" }}>

				<SearchFilter placeholder="Fuck Did You WA'NN Food"
				// item={item}
				/>
				<View style={{ backgroundColor: 'white', borderRadius: 10, width: '35%', elevation: 5, shadowColor: 'black', height: 60, top: 15, left: 15, justifyContent: "center", padding: 5 }}>
					<View style={styles.container}>
						<Dropdown
							style={[styles.dropdown]}
							placeholderStyle={styles.placeholderStyle}
							selectedTextStyle={styles.selectedTextStyle}
							inputSearchStyle={styles.inputSearchStyle}
							data={district}
							labelField="districtName"
							valueField="districtId"
							placeholder={!isFocus ? 'District' : ''}
							searchPlaceholder="Search..."
							value={districtDefault}
							onFocus={() => setIsFocus(true)}
							onBlur={() => setIsFocus(false)}
							onChange={(value) => {
								console.log("99999999999999999",value.districtId)
								setDistrictId(value.districtId);
								setIsFocus(false);
							}}
						/>
					</View>
				</View>
			</View>

			{/* sessiion filter */}

			<View style={{ marginTop: 22 }}>
				<Text style={{ fontSize: 22, fontWeight: "bold" }}>Area</Text>
				{/* district list */}
				<View>
					<ScrollView horizontal showsHorizontalScrollIndicator={false}>
						{area?.map((area, index) => {
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
					<Text>SESSEION</Text>
					<ScrollView showsHorizontalScrollIndicator={false}>
									<Text style={{ fontSize: 25, fontWeight: "bold", elevation: 2 }}>{session?.sessionType}</Text>
									<MealSessionCard sessionId={session?.sessionId} />
									<View style={{ flexDirection: "row", marginTop: 8 }}>
									</View>
									{/* </Pressable> */}
								</ScrollView>
					{/* <View>
						{/* <ScrollView>
						{session.map((sessiion, index) => {
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
										key = { sessionId }
										console.log(sessiion.sessionId)
										setAreaId(sessiion.sessionId)
										// console.log(mealInSession)
									}}>
										<Text style={{ fontSize: 16 }}>
											{sessiion.sessionType}
											{/* {area.session} */}
										{/* </Text>
									</TouchableOpacity>
								</View>
							);
						})}
						</ScrollView> */}
					{/* </View> */} 
					<View>
						<FlatList
							data={session}
							renderItem={({ item }) => (
								<ScrollView showsHorizontalScrollIndicator={false}>
									<Text style={{ fontSize: 25, fontWeight: "bold", elevation: 2 }}>Session {item.sessionType}</Text>
									<MealSessionCard sessionId={item.sessionId} />
									<View style={{ flexDirection: "row", marginTop: 8 }}>
									</View>
									{/* </Pressable> */}
								</ScrollView>
							)}
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
	textAreaActive: {
		backgroundColor: '#f96163',
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
			backgroundColor: 'white',
			paddingHorizontal: 8,
			justifyContent: 'center',
		},
		placeholderStyle: {
			fontSize: 12,
		},
		selectedTextStyle: {
			fontSize: 10, AlignItem: 'center'
		},
		inputSearchStyle: {
			fontSize: 12,
		},

	}
});
