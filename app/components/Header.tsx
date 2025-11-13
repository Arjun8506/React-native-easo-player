import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Header() {
  return (
    <View className="w-full p-4 px-5 flex-row justify-between items-center">
      <Text className="text-white text-2xl font-semibold">Premium</Text>
      <View className="flex-row gap-4">
        <TouchableOpacity>
          <Text>
            <MaterialCommunityIcons
              name="folder-search-outline"
              size={22}
              color="white"
            />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={22}
              color="white"
            />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
