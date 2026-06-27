import React, { ErrorInfo, ReactNode } from 'react';
import { T } from '../theme';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error inside SpandaVidya Application:", error, errorInfo);
  }

  private handleReload = () => {
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div 
          className="min-h-screen flex items-center justify-center px-6 py-12"
          style={{ backgroundColor: T.ivory, color: T.charcoal }}
        >
          <div 
            className="max-w-md w-full text-center p-8 rounded-xl border bg-transparent"
            style={{ borderColor: "rgba(26, 24, 20, 0.08)", boxShadow: T.shadows.lg }}
          >
            <span 
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-widest uppercase border"
              style={{ 
                backgroundColor: "rgba(140, 107, 62, 0.05)",
                borderColor: "rgba(140, 107, 62, 0.15)",
                color: T.accent 
              }}
            >
              System Alert
            </span>
            <h1 className="font-serif text-3xl font-bold mb-4" style={{ color: T.charcoal }}>
              Something went wrong
            </h1>
            <p className="text-sm font-light leading-relaxed mb-8" style={{ color: T.muted }}>
              An unexpected error occurred in the application rendering. We have logged this error and are working to resolve it.
            </p>
            <button
              onClick={this.handleReload}
              className="inline-flex items-center justify-center font-medium transform active:scale-95 transition-all duration-300 py-3 px-8 rounded-sm hover:-translate-y-0.5 text-white"
              style={{
                backgroundColor: T.charcoal,
                boxShadow: T.shadows.sm,
              }}
            >
              Return Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
