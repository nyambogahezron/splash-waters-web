import { AuthProvider } from '@/context/AuthContext';
import { GlobalContextProvider } from '@/context/GlobalContext';
import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default ({ children, breadcrumbs, ...props }: AppLayoutProps) => (
    <AppLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
        <GlobalContextProvider>
            <AuthProvider>{children}</AuthProvider>
        </GlobalContextProvider>
    </AppLayoutTemplate>
);
