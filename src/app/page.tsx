import ProfileAppView from '@/components/profile-app';

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-background text-foreground flex flex-col items-center">
      <ProfileAppView />
    </main>
  );
}
