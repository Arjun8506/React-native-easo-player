import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/Header";
import Folders from "./components/home/Folders";
import History from "./components/home/History";
import Options from "./components/home/Options";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1a1919' }}>
      <Header />
      <Options />
      <History />
      <Folders />
    </SafeAreaView>
  );
}
