import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { ScrollView, Text, View } from "react-native";

const Options = () => {
  const data = [
    { id: 1, icon: "download", label: "Download" },
    { id: 2, icon: "history", label: "History" },
    { id: 3, icon: "history", label: "History" },
    { id: 4, icon: "history", label: "History" },
    { id: 5, icon: "history", label: "History" },
    { id: 6, icon: "history", label: "History" },
    { id: 7, icon: "history", label: "History" },
  ];

  return (
    <View className="px-5 mt-2">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          gap: 12,
        }}
      >
        {data.map((item) => (
          <View key={item.id} className="flex-row items-center gap-1 h-fit bg-gray-700 text-gray-300 rounded-full px-2 py-1">
            <MaterialCommunityIcons
              name={item.icon}
              size={16}
              color={"#e5e7eb"}
            />
            <Text className="text-gray-200">{item.label}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Options;
