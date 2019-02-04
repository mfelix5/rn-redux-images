import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";

class SideDrawer extends React.Component {
  render() {
    return (
      <View
        style={[
          style.container,
          { width: Dimensions.get("window").width * 0.8 }
        ]}
      >
        <Text>Side Drawer</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    paddingTop: 22,
    backgroundColor: "white",
    flex: 1
  }
});

export default SideDrawer;
