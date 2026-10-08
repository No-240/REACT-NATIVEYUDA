import { View, Text, Image, StyleSheet } from 'react-native';
import moodStyles from '../styles/moodStyles';

export default function DiaryCard({ mood, title, date, preview, moodUri, moodImage }) {
  const variant = moodStyles[mood] ?? moodStyles.default;
  const imageSource = moodImage ?? { uri: moodUri };

  return (
    <View style={[styles.card, variant]}>
      <Image source={imageSource} style={styles.mood} />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        <Text style={styles.date}>{date} • {mood}</Text>
        <Text style={styles.preview} numberOfLines={3}>{preview}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: 12,
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
  },
  mood: { width: 64, height: 64, borderRadius: 32 },
  content: { flex: 1 },
  title: { fontSize: 16, fontWeight: 'bold', marginBottom: 2 },
  date: { fontSize: 12, color: '#666', marginBottom: 6 },
  preview: { fontSize: 14, color: '#333', lineHeight: 20 },
});