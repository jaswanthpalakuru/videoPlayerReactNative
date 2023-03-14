import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import * as MediaLibrary from "expo-media-library";
import VideoCard from "./VideoCard";

const AvailableVideosList = () => {
  const [localAssets, setLocalAssets] = useState([]);

  const renderItem = ({ item }) => {
    return <VideoCard item={item} />;
  };

  async function getVideos() {
    const { assets } = await MediaLibrary.getAssetsAsync({
      mediaType: "video",
      sortBy: MediaLibrary.SortBy.creationTime,
    });
    console.log(assets);
    setLocalAssets(assets);
  }
  useEffect(() => {
    getVideos();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList data={localAssets} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default AvailableVideosList;
