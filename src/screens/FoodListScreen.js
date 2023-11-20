import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import FoodCard from "../components/FoodCard";
import { session } from "../Constant";
const FoodListScreen = ({ navigation }) => {
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
			<SearchFilter icon="search"/>

			{/* sessiion filter */}

			<View style={{ marginTop: 22 }}>
				<Text style={{ fontSize: 22, fontWeight: "bold" }}>Area</Text>
				{/* session list */}
				<CategoriesFilter />
			</View>
			{/*  List Filter */}
			{/* <View style={{ marginTop: 22, flex: 1 }}> */}
			{/* <Text style={{ fontSize: 22, fontWeight: "bold" }}>Menu Meal</Text>
				 list */}

			<FlatList
				data={session}
				renderItem={({ item }) => (
					<View>
						<Text style={{ fontSize: 20, fontWeight: "bold" }}>Session {item.sessionname}</Text>
						<FoodCard />
						{/* <Text style={{ fontSize: 20, fontWeight: "bold" }}>Session Dinner</Text>
						<FoodCard /> */}
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
