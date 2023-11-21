import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity, FlatList, Pressable, Image } from "react-native";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import React, { useState, useEffect } from "react";
// import CategoriesFilter from "../components/CategoriesFilter";
import FoodCard from "../components/FoodCard";
import { recipeList,colors } from "../Constant";
import { getAllMealInSessionID, getAllSessionByAreaId } from "../Api";
import { getAllArea } from "../Api";

const FoodListScreen = ({ navigation }) => {
	const [area, setArea] = useState([])
	const [areaId, setAreaId] = useState()
	const [session, setSession] = useState([])
	const [mealInSession, setMealInSession] = useState([])
	
	const fetchAllSessionByAreaId = () => {
		getAllSessionByAreaId(areaId ? areaId : area[0]).then((res) => {
			console.log("session", res)
			setSession(res)
		}).catch(error => console.log(error))
	}
	useEffect(() => {
		getAllArea().then((ref) => {
			setArea(ref)
		})
		console.log("area id", area[0]?.areaId)
	}, [])
	useEffect(() => {
		fetchAllSessionByAreaId()
	}, [areaId])

	const getAllMealInSessionID = (sessionId) = {
	} 

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
			<SearchFilter icon="search" />

			{/* sessiion filter */}

			<View style={{ marginTop: 22 }}>
				<Text style={{ fontSize: 22, fontWeight: "bold" }}>Area</Text>
				{/* session list */}
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
										console.log(area.areaId)
										setAreaId(area.areaId)
									}}>
										<Text style={{ fontSize: 16 }}>
											{area.areaName}
										</Text>
									</TouchableOpacity>

								</View>
							);
						})}
					</ScrollView>
				</View>
			</View>
			<FlatList
				data={session}
				renderItem={({ item }) => (
					<View>
						<Text style={{ fontSize: 20, fontWeight: "bold" }}>Session {item.sessionType}</Text>

						{/* <FoodCard /> */}
						<View style={{ justifyContent: "center" }}>
							<FlatList
								horizontal
								data={mealInSession}
								renderItem={({ item }) => (
									<ScrollView horizontal showsHorizontalScrollIndicator={false}>
										<Pressable
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
										>
											{/* <Image
												source={it}
												style={{ width: 150, height: 100, resizeMode: "center", borderRadius: 15 }}
											/> */}
											<Text>{item}</Text>
											<View style={{ flexDirection: "row", marginTop: 8 }}>
												{/* <Text>{item.price} </Text> */}
												{/* <Text>{item.area}</Text> */}
											</View>
										</Pressable>
									</ScrollView>
								)}
								showsVerticalScrollIndicator={false}
							/>
						</View>

					</View>
				)}
				showsVerticalScrollIndicator={false}
			/>

			{/* </View> */}
			<View>
				<Text>
				</Text>
			</View>
		</SafeAreaView>
	);
};

export default FoodListScreen;

const styles = StyleSheet.create({});
