import { AppHeader } from "@/components/ui/app/layout/AppHeader";
import { SanityLive } from "@/sanity/lib/live";
import { ClerkProvider } from "@clerk/nextjs";
import { OnboardingGuard } from "@/components/app/onboarding/OnboardingGuard";

function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <OnboardingGuard>
                <AppHeader />
                {children}
            </OnboardingGuard>
            <SanityLive />
        </ClerkProvider>
    );
}

export default AppLayout;