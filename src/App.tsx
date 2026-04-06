function App() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(to right, #667eea, #764ba2)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial, sans-serif"
    }}>
      
      <div style={{
        background: "#ffffff",
        padding: "30px",
        borderRadius: "15px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
        textAlign: "center",
        maxWidth: "400px"
      }}>

        <h1 style={{ color: "#4f46e5" }}>
          Hello, Harith! 👋
        </h1>

        <p style={{ color: "#374151", fontSize: "16px" }}>
          Welcome to your React app!
        </p>

        <div style={{
          marginTop: "15px",
          padding: "15px",
          background: "#fef3c7",
          borderRadius: "10px",
          color: "#92400e",
          fontWeight: "bold"
        }}>
          🚀 Deployed on AWS! Hee hee 😄

          <div style={{
            marginTop: "10px",
            padding: "10px",
            background: "#d1fae5",
            borderRadius: "8px",
            color: "#065f46"
          }}>
            Hi Hi 👋
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;