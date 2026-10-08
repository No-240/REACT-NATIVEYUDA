import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DiaryCard from '../components/DiaryCard';
import diaryEntries from '../data/diaryEntries';

export default function DiaryListScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <View style={styles.header}>
          <Image source={require('../../assets/avatar.jpeg')} style={styles.avatar} />
          <View>
            <Text style={styles.hello}>HI, Yuda!</Text>
            <Text style={styles.headerTitle}>Tulisan Anak Senja</Text>
          </View>
        </View>

        {diaryEntries.map(entry => (
          <DiaryCard key={entry.id} {...entry} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f2f7' },
  header: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 16 },
  avatar: { width: 52, height: 52, borderRadius: 26 },
  hello: { fontSize: 13, color: '#666' },
  headerTitle: { fontSize: 24, fontWeight: 'bold' },
});