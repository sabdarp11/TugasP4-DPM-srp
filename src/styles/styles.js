import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1, // Latar belakang memenuhi seluruh layar
    resizeMode: "cover", // Menyesuaikan gambar tanpa distorsi
    height: "100%",
    width: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center", // Konten berada di tengah secara vertikal
    alignItems: "center", // Konten berada di tengah secara horizontal
    padding: 20, // Tambahan ruang di sekitar konten
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: 'black', // Warna putih agar kontras dengan latar belakang
    backgroundColor: "rgba(255, 255, 255, 0.6)", // Latar belakang putih transparan
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5, // Membuat sudut sedikit melengkung
  },
  teamContainer: {
    marginVertical: 10,
    alignItems: "center",
  },
  teamName: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'black', // Warna teks putih
    backgroundColor: "rgba(255, 255, 255, 0.6)", // Latar belakang putih transparan
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  score: {
    fontSize: 36,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#000", // Warna teks hitam agar kontras
    backgroundColor: "#fff", // Latar belakang putih tebal
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
  resetButton: {
    marginTop: 20,
    backgroundColor: "#FF0000",
    padding: 10,
    borderRadius: 5,
  },
  resetButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: "bold"
  },
});

export default styles;
