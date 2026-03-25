/*
 * Copyright 2025 Clidey, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { updateDocumentMeta } from './meta';

export interface FeatureFlags {
    analyzeView: boolean;
    explainView: boolean;
    generateView: boolean;
    customTheme: boolean;
    dataVisualization: boolean;
    aiChat: boolean;
    multiProfile: boolean;
    advancedDatabases: boolean;
    contactUsPage: boolean;
    settingsPage: boolean;
    sampleDatabaseTour: boolean;
    autoStartTourOnLogin: boolean;
    sqlAgent: boolean;
}

export const featureFlags: FeatureFlags = {
    analyzeView: false,
    explainView: false,
    generateView: false,
    customTheme: false,
    dataVisualization: false,
    aiChat: false,
    multiProfile: false,
    advancedDatabases: false,
    contactUsPage: true,
    settingsPage: true,
    sampleDatabaseTour: true,
    autoStartTourOnLogin: true,
    sqlAgent: false,
};

export const extensions: Record<string, any> = {};
export const sources: Record<string, any> = {};
export const settingsDefaults: Record<string, any> = {};

export const getAppName = (): string => "WhoDB";

export const initialize = () => {
    updateDocumentMeta({});
};

initialize();
