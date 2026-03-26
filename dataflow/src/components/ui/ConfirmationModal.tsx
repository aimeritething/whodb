import React from 'react';
import { X, AlertTriangle } from 'lucide-react';
import { Button } from './Button';
import { cn } from '@/lib/utils';

interface ConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    isDestructive?: boolean;
    verificationText?: string;
    verificationLabel?: string;
}

export function ConfirmationModal({
    isOpen,
    onClose,
    onConfirm,
    title,
    message,
    confirmText = "Confirm",
    cancelText = "Cancel",
    isDestructive = false,
    verificationText,
    verificationLabel,
}: ConfirmationModalProps) {
    const [inputValue, setInputValue] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
        if (isOpen) {
            setInputValue("");
            setIsLoading(false);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const isConfirmDisabled = (verificationText && inputValue !== verificationText) || isLoading;

    const handleConfirm = async () => {
        if (isConfirmDisabled) return;

        setIsLoading(true);
        try {
            await onConfirm();
            onClose();
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-background w-full max-w-md rounded-xl shadow-2xl border animate-in fade-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between px-6 py-4 border-b">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                        {isDestructive && <AlertTriangle className="h-5 w-5 text-destructive" />}
                        {title}
                    </h3>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={onClose}
                        disabled={isLoading}
                        className="h-8 w-8 rounded-full"
                    >
                        <X className="h-4 w-4" />
                    </Button>
                </div>

                <div className="p-6 space-y-4">
                    <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/10 text-destructive text-sm font-medium">
                        {message}
                    </div>

                    {verificationText && (
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                {verificationLabel || `Type "${verificationText}" to confirm`}
                            </label>
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder={verificationText}
                                className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:border-destructive transition-all font-mono"
                                onPaste={(e) => e.preventDefault()}
                            />
                        </div>
                    )}
                </div>

                <div className="flex items-center justify-end gap-3 px-6 py-4 border-t bg-muted/20 rounded-b-xl">
                    <Button
                        variant="ghost"
                        onClick={onClose}
                        disabled={isLoading}
                    >
                        {cancelText}
                    </Button>
                    <Button
                        variant={isDestructive ? "destructive" : "default"}
                        onClick={handleConfirm}
                        disabled={isConfirmDisabled}
                        className="min-w-[80px]"
                    >
                        {isLoading ? (
                            <div className="flex items-center gap-2">
                                <span className="h-3 w-3 animate-spin rounded-full border-2 border-current border-t-transparent" />
                                Processing...
                            </div>
                        ) : confirmText}
                    </Button>
                </div>
            </div>
        </div>
    );
}
