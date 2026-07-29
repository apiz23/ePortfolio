"use client";

import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="flex items-center justify-center py-16 px-4">
            <div className="text-center max-w-sm">
              <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground mb-1">
                Error
              </p>
              <p className="font-serif font-black text-2xl text-foreground">
                Something broke
              </p>
              <p className="text-muted-foreground mt-2">
                Try refreshing the page.
              </p>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
