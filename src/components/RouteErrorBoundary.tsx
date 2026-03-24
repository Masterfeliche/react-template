import { Component, type ErrorInfo, type ReactNode } from "react";

type Props = { children: ReactNode; pathname: string };
type State = { error: Error | null };

/**
 * Catches render errors for the current route; clears when `pathname` changes.
 */
export default class RouteErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (prevProps.pathname !== this.props.pathname && this.state.error) {
      this.setState({ error: null });
    }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("[RouteErrorBoundary]", error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <div
          role="alert"
          className="mx-auto max-w-lg px-6 py-16 text-center text-red-800 dark:text-red-200"
        >
          <p className="font-semibold">This page could not be displayed.</p>
          <p className="mt-2 text-sm opacity-90">{this.state.error.message}</p>
        </div>
      );
    }
    return this.props.children;
  }
}
