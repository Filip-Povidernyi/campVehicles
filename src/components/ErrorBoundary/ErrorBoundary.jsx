import { Component } from "react";

export class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("❌ Помилка у компоненті:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "40px", textAlign: "center" }}>
          <h2>Щось пішло не так 😔</h2>
          <p>Будь ласка, перезавантаж сторінку.</p>
        </div>
      );
    }

    return this.props.children;
  }
}
