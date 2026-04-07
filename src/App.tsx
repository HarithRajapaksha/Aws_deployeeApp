import { useState } from "react";

function App() {
  const [clicked, setClicked] = useState(false);

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea, #764ba2)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial, sans-serif",
      color: "#fff"
    }}>
      
      <div style={{
        background: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
        padding: "40px",
        borderRadius: "20px",
        textAlign: "center",
        width: "350px",
        boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
        transition: "0.3s"
      }}>

        {/* Title */}
        <h1 style={{
          fontSize: "28px",
          marginBottom: "10px"
        }}>
          👋 Hello, Harith
        </h1>

        <p style={{ opacity: 0.8 }}>
          Welcome to your interactive React app 🚀
        </p>

        {/* Status Card */}
        <div style={{
          marginTop: "20px",
          padding: "15px",
          borderRadius: "12px",
          background: clicked ? "#22c55e" : "#f59e0b",
          color: "#fff",
          transition: "0.3s"
        }}>
          {clicked ? "✅ Successfully Deployed!" : "🚀 Ready to Deploy on AWS"}
        </div>

        {/* Button */}
        <button
          onClick={() => setClicked(true)}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
            borderRadius: "10px",
            border: "none",
            background: "#4f46e5",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s"
          }}
          onMouseOver={e => e.currentTarget.style.background = "#4338ca"}
          onMouseOut={e => e.currentTarget.style.background = "#4f46e5"}
        >
          Click Me 🎯
        </button>

        {/* Small Card */}
        <div style={{
          marginTop: "20px",
          padding: "12px",
          background: "rgba(255,255,255,0.2)",
          borderRadius: "10px"
        }}>
          💡 Try deploying updates using GitHub Actions!
        </div>

      </div>
    </div>
  );
}

export default App;