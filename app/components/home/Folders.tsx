import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import * as MediaLibrary from "expo-media-library";
import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

const Folders = () => {
  const [albums, setAlbums] = useState([]);
  const [permissionGranted, setPermissionGranted] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync(true);

      console.log("Media Library Permission Status:", status);

      if (status === "granted") {
        setPermissionGranted(true);
        const videoAlbums = await MediaLibrary.getAlbumsAsync({
          includeSmartAlbums: true,
        });

        const videoFolders = [];
        for (let album of videoAlbums) {
          const assets = await MediaLibrary.getAssetsAsync({
            album: album.id,
            mediaType: "video",
            first: 1,
          });
          if (assets.assets.length > 0) {
            videoFolders.push(album);
          }
        }

        setAlbums(videoFolders);
      } else {
        console.log("Permission not granted for video access.");
      }
    })();
  }, []);

  if (!permissionGranted) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-gray-600 text-lg text-center">
          Permission required to access videos
        </Text>
      </View>
    );
  }

  return (
    <View>
      <View className="w-full flex-row justify-between items-center px-5 pt-8 pb-2">
        <Text className="text-gray-200 text-xl font-semibold">
          {albums.length} Folders
        </Text>
        <MaterialCommunityIcons name="sort" size={20} color="#e5e7eb" />
      </View>
      <FlatList
        data={albums}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity className="flex-row items-center bg-white p-3 mb-2 mx-4 rounded-lg shadow-sm">
            <MaterialCommunityIcons name="folder" size={26} color="#e5e7eb" />
            <View className="flex-row items-center justify-between w-full pr-5">
              <Text className="text-gray-200 text-lg ml-3">{item.title}</Text>
              <MaterialCommunityIcons
                name="dots-vertical"
                size={26}
                color="#e5e7eb"
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Folders;
