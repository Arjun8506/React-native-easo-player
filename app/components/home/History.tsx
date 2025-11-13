import { Image, ScrollView, Text, View } from "react-native";

const History = () => {
  const data = [
    {
      id: 1,
      title: "The Beginning",
      posterLink:
        "https://images.stockcake.com/public/3/b/b/3bb7d97a-73ba-42e2-8fdc-eb4b833a1290_large/silhouette-sunset-shootout-stockcake.jpg",
      progress: "100%",
    },
    {
      id: 2,
      title: "Into the Wild",
      posterLink:
        "https://images.stockcake.com/public/3/b/b/3bb7d97a-73ba-42e2-8fdc-eb4b833a1290_large/silhouette-sunset-shootout-stockcake.jpg",
      progress: "85%",
    },
    {
      id: 3,
      title: "The Lost Path",
      posterLink:
        "https://images.stockcake.com/public/3/b/b/3bb7d97a-73ba-42e2-8fdc-eb4b833a1290_large/silhouette-sunset-shootout-stockcake.jpg",
      progress: "60%",
    },
    {
      id: 4,
      title: "Rise of Dawn",
      posterLink:
        "https://images.stockcake.com/public/3/b/b/3bb7d97a-73ba-42e2-8fdc-eb4b833a1290_large/silhouette-sunset-shootout-stockcake.jpg",
      progress: "40%",
    },
    {
      id: 5,
      title: "The Silent Storm",
      posterLink:
        "https://images.stockcake.com/public/3/b/b/3bb7d97a-73ba-42e2-8fdc-eb4b833a1290_large/silhouette-sunset-shootout-stockcake.jpg",
      progress: "25%",
    },
    {
      id: 6,
      title: "Echoes of Time",
      posterLink:
        "https://images.stockcake.com/public/3/b/b/3bb7d97a-73ba-42e2-8fdc-eb4b833a1290_large/silhouette-sunset-shootout-stockcake.jpg",
      progress: "75%",
    },
    {
      id: 7,
      title: "Journey Beyond",
      posterLink:
        "https://images.stockcake.com/public/3/b/b/3bb7d97a-73ba-42e2-8fdc-eb4b833a1290_large/silhouette-sunset-shootout-stockcake.jpg",
      progress: "55%",
    },
    {
      id: 8,
      title: "Hidden Truths",
      posterLink:
        "https://images.stockcake.com/public/3/b/b/3bb7d97a-73ba-42e2-8fdc-eb4b833a1290_large/silhouette-sunset-shootout-stockcake.jpg",
      progress: "90%",
    },
    {
      id: 9,
      title: "Fading Horizons",
      posterLink:
        "https://images.stockcake.com/public/3/b/b/3bb7d97a-73ba-42e2-8fdc-eb4b833a1290_large/silhouette-sunset-shootout-stockcake.jpg",
      progress: "35%",
    },
    {
      id: 10,
      title: "The Final Step",
      posterLink:
        "https://images.stockcake.com/public/3/b/b/3bb7d97a-73ba-42e2-8fdc-eb4b833a1290_large/silhouette-sunset-shootout-stockcake.jpg",
      progress: "10%",
    },
  ];

  return (
    <View className="px-5 mt-5">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          gap: 12,
        }}
      >
        {data.map((item) => (
          <View key={item.id} className="relative">
            <Image
              source={{ uri: item?.posterLink }}
              resizeMethod="none"
              alt={item.title}
              width={130}
              height={80}
            />
            <Text className="text-white absolute bottom-2 right-1">11:30</Text>
            <View
              className="bg-green-600 h-1 absolute bottom-0 left-0"
              style={{ width: item.progress }}
            ></View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default History;
