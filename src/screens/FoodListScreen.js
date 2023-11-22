import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity, FlatList, Pressable, Image } from "react-native";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import React, { useState, useEffect } from "react";
// import CategoriesFilter from "../components/CategoriesFilter";
import FoodCard from "../components/FoodCard";
import { colors } from "../Constant";
import { getAllMealInSessionID, getAllSessionByAreaId } from "../Api";
import { getAllArea } from "../Api";
import MealSessionCard from "../components/MealSessionCard";

const FoodListScreen = ({ navigation }) => {
	const [touch, setTouch] =useState(0)

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

	// const fetchAllMealInSessionBySessionId = () => {
	// 	getAllMealInSessionID(sessionId ? sessionId : [])
	// 		.then((res) => {
	// 			console.log("meal In Session", res);
	// 			setMealInSession(res);
	// 		})
	// 		.catch((error) => {
	// 			if (error.isAxiosError) {
	// 				// AxiosError with response
	// 				if (error.response) {
	// 					console.error("Request failed with status code", error.response.status);
	// 					console.error("Response data:", error.response.data);
	// 				} else {
	// 					// AxiosError without response (e.g., network error)
	// 					console.error("Error making the request:", error.message);
	// 				}
	// 			} else {
	// 				// Non-Axios error
	// 				console.error("Non-Axios error occurred:", error);
	// 			}
	// 		});
	// };

	// useEffect(() => {
	// 	fetchAllMealInSessionBySessionId();
	// }, [sessionId]);

	// const fetchAllMealInSessionBySessionId = () => {
	// 	getAllMealInSessionID(sessionId ? sessionId : []).then((res) => {
	// 		console.log("mealInSession", res)
	// 		setMealInSession(res)
	// 	}).catch(error => console.log(error)))
	// }
	// useEffect(() => {
	// 	fetchAllMealInSessionBySessionId()
	// }, [sessionId])

	// const fetchAllMealInSessionBySessionId = () => {
	// 	getAllMealInSessionID
	// }


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
			<SearchFilter placeholder=" Món Ngon Mẹ Làm "/>

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
										key={areaId}
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
											<Text style={{ fontSize: 20, fontWeight: "bold" }}>Session {item.sessionType}</Text>
											<MealSessionCard sessionId={item.sessionId}/>
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
	touchactive: {backgroundColor:'#f96163'},
	textAreaActive:{backgroundColor:'#f96163'}
});
