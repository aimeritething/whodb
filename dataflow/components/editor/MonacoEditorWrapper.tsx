"use client";

import dynamic from 'next/dynamic';
import { loader } from '@monaco-editor/react';

// Configure loader to use unpkg CDN which is often more reliable than jsdelivr in some regions
// preventing the [object Event] script load error
loader.config({
    paths: {
        vs: 'https://unpkg.com/monaco-editor@0.45.0/min/vs'
    }
});

// Dynamically import Monaco Editor with SSR disabled
const MonacoEditor = dynamic(
    () => import('@monaco-editor/react').then(mod => mod.default),
    {
        ssr: false,
        loading: () => null, // No loading UI as requested
    }
);

export default MonacoEditor;
