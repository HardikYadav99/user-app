import { useState } from "react";

function App() {

    const [message, setMessage] = useState("");

    const callBackend = async () => {

        try {

            const response = await fetch("/api/hello");

            const data = await response.json();

            setMessage(
                `${data.message}\n${data.timestamp}`
            );

        } catch {

            setMessage("❌ Unable to connect to backend");
        }
    };

    return (
        <div className="container">

            <h1>🚀 DevPortal Demo</h1>

            <button onClick={callBackend}>
                Call Backend
            </button>

            <pre>{message}</pre>

        </div>
    );
}

export default App;