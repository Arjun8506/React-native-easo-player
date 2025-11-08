import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setTestValue } from "./redux/slices/testing";
import { RootState } from "./redux/store";

export default function Index() {
  const { testValue } = useSelector((state: RootState) => state.testing);
  const dispatch = useDispatch();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text style={{ marginTop: 10, fontSize: 40 }}>Test Value: {testValue}</Text>
      <Button title="Increment" onPress={() => dispatch(setTestValue(testValue + 1))} />
    </View>
  );
}
