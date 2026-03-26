
export type Role = 'user' | 'assistant';

export type ChartType = 'bar' | 'line' | 'pie' | 'table' | 'area' | 'scatter';

// Result display classification types
export type ResultDisplayType = 'single_value' | 'simple_list' | 'table_only' | 'chart' | 'text_only';

export interface ChartData {
    title: string;
    type: ChartType;
    xAxis: string[];
    xAxisName?: string;
    series: {
        name: string;
        data: number[];
    }[];
    columns?: string[]; // For table view
    rows?: any[];      // For table view
    sql?: string;      // Generated SQL
    direction?: 'horizontal' | 'vertical';
    displayType?: ResultDisplayType;  // How to display the result
    singleValue?: string | number;    // For single_value display type
}

export interface Message {
    id: string;
    role: Role;
    content: string;
    timestamp: number;
    chart?: ChartData;
    isLoading?: boolean;
}

// 智能建议问题
export interface SuggestedQuestion {
    id: string;
    text: string;
    query: string;
    chartType: ChartType;
    description: string;
    category?: string;  // 分类：业务洞察、趋势分析、分布统计等
    priority?: number;  // 优先级 1-3
}

// 数据库 schema 分析结果
export interface SchemaAnalysis {
    tables: {
        name: string;
        columns: { name: string; type: string; nullable: boolean; isPrimaryKey?: boolean }[];
        rowCount?: number;
    }[];
    summary: {
        tableCount: number;
        totalColumns: number;
        hasNumericColumns: boolean;
        hasDateColumns: boolean;
    };
}

export interface Conversation {
    id: string;
    title: string;
    timestamp: number;
    messages: Message[];
    chartCount: number;
    dataSource?: {
        id: string;
        name: string;
        type: string;
        database?: string;  // 用户选择的具体数据库
    };
    // 智能建议相关
    suggestions?: SuggestedQuestion[];
    schemaAnalysis?: SchemaAnalysis;
    suggestionsLoading?: boolean;
}

export interface SqlBotState {
    conversations: Conversation[];
    currentConversationId: string | null;
    isSidebarOpen: boolean;

    // Actions
    createConversation: (dataSource?: { id: string; name: string; type: string; database?: string }) => void;
    selectConversation: (id: string) => void;
    deleteConversation: (id: string) => void;
    updateConversationTitle: (id: string, title: string) => void;
    updateConversationDataSource: (id: string, updates: Partial<{ database: string }>) => void;
    addMessage: (conversationId: string, message: Omit<Message, 'id' | 'timestamp'>) => void;
    toggleSidebar: () => void;
    // 建议相关 actions
    setSuggestions: (conversationId: string, suggestions: SuggestedQuestion[]) => void;
    setSuggestionsLoading: (conversationId: string, loading: boolean) => void;
    setSchemaAnalysis: (conversationId: string, analysis: SchemaAnalysis) => void;
}
