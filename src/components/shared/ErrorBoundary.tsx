'use client';

import React from 'react';
import { AlertTriangle, RefreshCw, X } from 'lucide-react';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  retryCount: number;
  lastErrorTime: number | null;
}

/**
 * Beaver Dam Error Boundary — Systematic, Layered, Resilient
 * 
 * Design philosophy: Like a beaver building a dam, this error boundary:
 * 1. Catches problems at every layer (component → section → page → root)
 * 2. Provides structured fallbacks that preserve surrounding functionality
 * 3. Implements retry logic with cooldown (beavers rebuild incrementally)
 * 4. Has progressive escalation: retry → reset → full fallback
 * 5. Never lets one break point collapse the entire structure
 */
export class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode; name?: string },
  ErrorBoundaryState
> {
  private maxRetries = 3;
  private cooldownMs = 5000;

  constructor(props: { children: React.ReactNode; fallback?: React.ReactNode; name?: string }) {
    super(props);
    this.state = { hasError: false, error: null, retryCount: 0, lastErrorTime: null };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(`[ErrorBoundary${this.props.name ? `:${this.props.name}` : ''}]`, error, errorInfo);
    this.setState(prev => ({
      retryCount: prev.retryCount + 1,
      lastErrorTime: Date.now(),
    }));
  }

  handleRetry = () => {
    const { lastErrorTime, retryCount } = this.state;
    if (retryCount >= this.maxRetries) return;
    if (lastErrorTime && Date.now() - lastErrorTime < this.cooldownMs) return;
    this.setState({ hasError: false, error: null });
  };

  handleFullReset = () => {
    this.setState({ hasError: false, error: null, retryCount: 0, lastErrorTime: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;

      const isOverloaded = this.state.retryCount >= this.maxRetries;

      return (
        <div className="min-h-[200px] flex items-center justify-center p-8">
          <div className="max-w-md w-full bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-100 dark:bg-red-900/50 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
              </div>
              <div>
                <h3 className="font-semibold text-red-900 dark:text-red-100">Component Error</h3>
                <p className="text-sm text-red-700 dark:text-red-300">
                  {this.props.name ? `[${this.props.name}]` : 'A render error occurred'}
                </p>
              </div>
            </div>
            <p className="text-sm text-red-800 dark:text-red-200 mb-4 font-mono bg-red-100/50 dark:bg-red-900/30 p-3 rounded-lg overflow-auto max-h-32">
              {this.state.error?.message || 'Unknown error'}
            </p>
            <div className="flex gap-2">
              {!isOverloaded ? (
                <button onClick={this.handleRetry} className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 transition-colors">
                  <RefreshCw className="w-4 h-4" /> Retry ({this.maxRetries - this.state.retryCount} left)
                </button>
              ) : (
                <button onClick={this.handleFullReset} className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg text-sm hover:bg-orange-700 transition-colors">
                  <RefreshCw className="w-4 h-4" /> Full Reset
                </button>
              )}
              <button onClick={() => this.setState({ hasError: false })} className="flex items-center gap-2 px-4 py-2 border border-red-300 dark:border-red-700 text-red-700 dark:text-red-300 rounded-lg text-sm hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors">
                <X className="w-4 h-4" /> Dismiss
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
