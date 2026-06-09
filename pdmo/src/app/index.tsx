import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";

const SELECOES = [
  "Brasil",
  "Argentina",
  "França",
  "Inglaterra",
  "Espanha",
  "Alemanha",
  "Portugal",
  "Holanda",
];

export default function App() {
  const [nome, setNome] = useState("");
  const [campeã, setCampeã] = useState<string | null>(null);
  const [confirmado, setConfirmado] = useState(false);

  const handleConfirmar = () => {
    if (!nome.trim()) {
      Alert.alert("Atenção", "Digite seu nome para continuar!");
      return;
    }
    if (!campeã) {
      Alert.alert("Atenção", "Escolha a seleção campeã!");
      return;
    }
    setConfirmado(true);
  };

  if (confirmado) {
    return (
      <View style={styles.resultContainer}>
        <View style={styles.badgeEdition}>
          <Text style={styles.badgeText}>FIFA WORLD CUP 2026™</Text>
        </View>
        <View style={styles.trofeuContainer}>
          <Text style={styles.trofeuIcon}>🏆</Text>
        </View>
        <Text style={styles.resultTitle}>Previsão Confirmada!</Text>
        <View style={styles.resultCard}>
          <Text style={styles.resultLabel}>Torcedor</Text>
          <Text style={styles.resultValue}>{nome}</Text>
          <View style={styles.divider} />
          <Text style={styles.resultLabel}>Campeão escolhido</Text>
          <Text style={styles.resultValue}>{campeã}</Text>
        </View>
        <View style={styles.sedesRow}>
          <Text style={styles.sedeItem}>🇺🇸 EUA</Text>
          <Text style={styles.sedeDot}>·</Text>
          <Text style={styles.sedeItem}>🇨🇦 Canadá</Text>
          <Text style={styles.sedeDot}>·</Text>
          <Text style={styles.sedeItem}>🇲🇽 México</Text>
        </View>
        <TouchableOpacity style={styles.btnVoltar} onPress={() => setConfirmado(false)}>
          <Text style={styles.btnVoltarText}>Alterar previsão</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.heroSection}>
        <View style={styles.badgeEdition}>
          <Text style={styles.badgeText}>FIFA WORLD CUP 2026™</Text>
        </View>
        <View style={styles.logoContainer}>
          <Text style={styles.logoTop}>FIFA</Text>
          <Text style={styles.logoIcon}>⚽</Text>
          <Text style={styles.logoBottom}>WORLD CUP</Text>
          <Text style={styles.logoYear}>2026</Text>
        </View>
        <Text style={styles.header}>Quem vai ser{"\n"}o campeão?</Text>
        <Text style={styles.subHeader}>48 seleções · 3 países · 1 campeão</Text>
        <View style={styles.sedesRow}>
          <Text style={styles.sedeItem}>🇺🇸 EUA</Text>
          <Text style={styles.sedeDot}>·</Text>
          <Text style={styles.sedeItem}>🇨🇦 Canadá</Text>
          <Text style={styles.sedeDot}>·</Text>
          <Text style={styles.sedeItem}>🇲🇽 México</Text>
        </View>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Seu nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          placeholderTextColor="#a08080"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>Quem será o campeão?</Text>
        <View style={styles.grid}>
          {SELECOES.map((s) => (
            <TouchableOpacity
              key={s}
              style={[styles.card, campeã === s && styles.cardSelecionado]}
              onPress={() => setCampeã(s)}
            >
              <Text style={[styles.nomeSelecao, campeã === s && styles.nomeSelecaoSelecionado]}>
                {s}
              </Text>
              {campeã === s && <Text style={styles.checkmark}>✓</Text>}
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.btn} onPress={handleConfirmar}>
          <Text style={styles.btnText}>⚽  Confirmar Previsão</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>11 jun – 19 jul 2026</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#1a0a0a",
  },
  heroSection: {
    alignItems: "center",
    paddingTop: 60,
    paddingBottom: 36,
    backgroundColor: "#6b0f1a",
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
  },
  badgeEdition: {
    backgroundColor: "#c0392b",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 5,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#e8c49a",
  },
  badgeText: {
    color: "#e8c49a",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.5,
  },
  logoContainer: {
    alignItems: "center",
    backgroundColor: "#3d0f0f",
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 28,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: "#e8c49a",
  },
  logoTop: {
    color: "#e8c49a",
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 6,
  },
  logoIcon: {
    fontSize: 48,
    marginVertical: 4,
  },
  logoBottom: {
    color: "#e8c49a",
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 4,
  },
  logoYear: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "900",
    letterSpacing: 6,
    marginTop: 2,
  },
  header: {
    fontSize: 28,
    fontWeight: "900",
    color: "#e8c49a",
    letterSpacing: 1,
    textAlign: "center",
  },
  subHeader: {
    fontSize: 13,
    color: "#f0d5b0",
    marginTop: 6,
    letterSpacing: 0.5,
    opacity: 0.85,
  },
  sedesRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
    gap: 6,
  },
  sedeItem: {
    color: "#f0d5b0",
    fontSize: 13,
    fontWeight: "600",
  },
  sedeDot: {
    color: "#e8c49a",
    fontSize: 16,
    opacity: 0.6,
  },
  form: {
    padding: 24,
    paddingTop: 32,
  },
  label: {
    color: "#e8c49a",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.5,
    textTransform: "uppercase",
    marginBottom: 10,
    marginTop: 4,
  },
  input: {
    backgroundColor: "#2c1010",
    color: "#fff",
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    marginBottom: 28,
    borderWidth: 1.5,
    borderColor: "#6b0f1a",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 32,
  },
  card: {
    width: "47%",
    backgroundColor: "#2c1010",
    borderRadius: 12,
    paddingVertical: 18,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1.5,
    borderColor: "#4a1010",
  },
  cardSelecionado: {
    borderColor: "#e8c49a",
    backgroundColor: "#3d0f0f",
  },
  nomeSelecao: {
    color: "#d4b8b8",
    fontSize: 15,
    fontWeight: "600",
  },
  nomeSelecaoSelecionado: {
    color: "#e8c49a",
  },
  checkmark: {
    color: "#e8c49a",
    fontSize: 16,
    fontWeight: "bold",
  },
  btn: {
    backgroundColor: "#c0392b",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e8c49a",
    shadowColor: "#c0392b",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
  },
  btnText: {
    color: "#e8c49a",
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 1,
  },
  footer: {
    textAlign: "center",
    color: "#6b3030",
    fontSize: 12,
    marginTop: 24,
    letterSpacing: 1,
  },
  resultContainer: {
    flex: 1,
    backgroundColor: "#1a0a0a",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  trofeuContainer: {
    backgroundColor: "#2c1010",
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
    borderWidth: 2,
    borderColor: "#e8c49a",
  },
  trofeuIcon: {
    fontSize: 56,
  },
  resultTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#e8c49a",
    marginBottom: 24,
    letterSpacing: 1,
  },
  resultCard: {
    backgroundColor: "#2c1010",
    borderRadius: 16,
    padding: 24,
    width: "100%",
    marginBottom: 20,
    borderWidth: 1.5,
    borderColor: "#6b0f1a",
  },
  resultLabel: {
    color: "#a06060",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.5,
    textTransform: "uppercase",
    marginBottom: 4,
  },
  resultValue: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: "#4a1010",
    marginBottom: 16,
  },
  btnVoltar: {
    marginTop: 12,
    borderWidth: 1.5,
    borderColor: "#e8c49a",
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 14,
  },
  btnVoltarText: {
    color: "#e8c49a",
    fontWeight: "bold",
    fontSize: 15,
  },
});
