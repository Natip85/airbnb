import { View, StyleSheet } from "react-native";
import React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { defaultStyles } from "@/constants/Styles";

interface Props {
  listings: any;
}
// const INITIAL_REGION = {
//   latitude: 37.33,
//   longitude: -122,
//   latitudeDelta: 9,
//   longitudeDelta: 9,
// };
const ListingsMap = ({ listings }: Props) => {
  if (!listings || !listings.features) {
    // Handle the case when listings or listings.features is undefined
    return <View style={styles.container}>No listings available.</View>;
  }
  return (
    <View style={defaultStyles.container}>
      <MapView
        style={StyleSheet.absoluteFill}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        showsMyLocationButton
        // initialRegion={INITIAL_REGION}
      >
        {listings.features.map((item: any) => (
          <Marker
            key={item.properties.id}
            coordinate={{
              latitude: +item.properties.latitude,
              longitude: +item.properties.longitude,
            }}
          />
        ))}
      </MapView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1 },
});
export default ListingsMap;
