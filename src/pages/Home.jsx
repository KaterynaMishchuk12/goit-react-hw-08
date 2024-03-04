const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "darkblue",
    fontSize: "40px",
  },
  text: {
    fontSize: "24px",
    marginTop: "16px",
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to the Phonebook</h1>

      <p style={styles.text}>
        Create your phonebook to keep in touch with your relatives, friends,
        colleagues and everyone in the world!
      </p>
    </div>
  );
}
