import React from 'react';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { Button } from './Button';
import { cn } from '@/lib/utils';

interface AlertModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    message: string;
    type?: 'success' | 'error' | 'info';
    buttonText?: string;
}

export function AlertModal({
    isOpen,
    onClose,
    title,
    message,
    type = 'info',
    buttonText = "OK"
}: AlertModalProps) {
    if (!isOpen) return null;

    const getIcon = () => {
        switch (type) {
            case 'success':
                return <CheckCircle className="h-5 w-5 text-success" />;
            case 'error':
                return <AlertCircle className="h-5 w-5 text-destructive" />;
            default:
                return <Info className="h-5 w-5 text-primary" />;
        }
    };

    const getButtonVariant = () => {
        switch (type) {
            case 'success':
                return 'default'; // Or a specific success variant if added to Button
            case 'error':
                return 'destructive';
            default:
                return 'default';
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-background w-full max-w-sm rounded-xl shadow-2xl border animate-in fade-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between px-6 py-4 border-b">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                        {getIcon()}
                        {title}
                    </h3>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={onClose}
                        className="h-8 w-8 rounded-full"
                    >
                        <X className="h-4 w-4" />
                    </Button>
                </div>

                <div className="p-6">
                    <div className={cn(
                        "p-4 rounded-lg text-sm font-medium border",
                        type === 'success' && "bg-success/5 border-success/10 text-success-foreground",
                        type === 'error' && "bg-destructive/5 border-destructive/10 text-destructive",
                        type === 'info' && "bg-muted/50 border-border text-muted-foreground"
                    )}>
                        {message}
                    </div>
                </div>

                <div className="flex items-center justify-end px-6 py-4 border-t bg-muted/20 rounded-b-xl">
                    <Button
                        variant={getButtonVariant()}
                        onClick={onClose}
                        className="min-w-[80px]"
                    >
                        {buttonText}
                    </Button>
                </div>
            </div>
        </div>
    );
}
