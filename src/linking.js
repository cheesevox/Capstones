const config = {
    screens: {
      Home: {
        path: "FoodList",
      },
      Wallet : "Wallet"
    },
  };
  
  const linking = {
    prefixes: ["com.anonymous.homemealtaste:// "],
    config,
  };
  
  export default linking;