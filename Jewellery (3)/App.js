import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import AppLoading from "expo-app-loading";

import * as Font from "expo-font";
import Untitled from "./src/screens/Untitled";
import Untitled1 from "./src/screens/Untitled1";
import Untitled2 from "./src/screens/Untitled2";
import Untitled3 from "./src/screens/Untitled3";
import Untitled4 from "./src/screens/Untitled4";
import Untitled5 from "./src/screens/Untitled5";
import Untitled6 from "./src/screens/Untitled6";

const DrawerNavigation = createDrawerNavigator({
  Untitled: Untitled,
  Untitled1: Untitled1,
  Untitled2: Untitled2,
  Untitled3: Untitled3,
  Untitled4: Untitled4,
  Untitled5: Untitled5,
  Untitled6: Untitled6
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Untitled: Untitled,
    Untitled1: Untitled1,
    Untitled2: Untitled2,
    Untitled3: Untitled3,
    Untitled4: Untitled4,
    Untitled5: Untitled5,
    Untitled6: Untitled6
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "poppins-regular": require("./src/assets/fonts/poppins-regular.ttf"),
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf"),
      "lemonada-regular": require("./src/assets/fonts/lemonada-regular.ttf"),
      "montserrat-500": require("./src/assets/fonts/montserrat-500.ttf"),
      "roboto-700": require("./src/assets/fonts/roboto-700.ttf"),
      "montserrat-regular": require("./src/assets/fonts/montserrat-regular.ttf"),
      "roboto-500": require("./src/assets/fonts/roboto-500.ttf"),
      "montserrat-700": require("./src/assets/fonts/montserrat-700.ttf"),
      "poppins-regular": require("./assets/fonts/poppins-regular.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
