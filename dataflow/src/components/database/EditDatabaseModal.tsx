import React, { useState, useEffect } from "react";
import { X, Database, Save, Loader2 } from "lucide-react";
import { useConnectionStore } from "@/stores/useConnectionStore";

interface EditDatabaseModalProps {
    isOpen: boolean;
    onClose: () => void;
    connectionId: string;
    databaseName: string;
    onSuccess?: () => void;
}

export function EditDatabaseModal({ isOpen, onClose, connectionId, databaseName, onSuccess }: EditDatabaseModalProps) {
    const { renameDatabase } = useConnectionStore();
    const [newName, setNewName] = useState(databaseName);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        setNewName(databaseName);
    }, [databaseName]);

    if (!isOpen) return null;

    const handleSave = async () => {
        if (!newName || newName === databaseName) return;

        setIsSaving(true);
        const result = await renameDatabase(databaseName, newName);
        setIsSaving(false);

        if (result.success) {
            onSuccess?.();
        }

        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="w-full max-w-md rounded-xl bg-background shadow-2xl border animate-in fade-in zoom-in duration-200">
                <div className="flex items-center justify-between border-b px-6 py-4">
                    <h2 className="text-lg font-semibold flex items-center gap-2">
                        <Database className="h-5 w-5 text-purple-500" />
                        Rename Database
                    </h2>
                    <button onClick={onClose} className="rounded-full p-1 hover:bg-muted transition-colors">
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <div className="p-6 space-y-4">
                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            Database Name
                        </label>
                        <input
                            type="text"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            placeholder="Enter database name"
                            className="w-full rounded-md border border-purple-200 bg-background px-3 py-2 text-sm outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                        />
                    </div>

                </div>

                <div className="flex items-center justify-end gap-3 border-t bg-muted/5 px-6 py-4">
                    <button
                        onClick={onClose}
                        className="rounded-md px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={!newName || isSaving}
                        className="rounded-md bg-purple-500 px-4 py-2 text-sm font-medium text-white hover:bg-purple-600 transition-colors disabled:opacity-50 flex items-center gap-2"
                    >
                        {isSaving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}
