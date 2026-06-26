import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
      className="inline-flex items-center justify-center w-9 h-9 rounded-md text-[#555] dark:text-[#9ca3af] hover:text-[#111] dark:hover:text-white hover:bg-[#f3f4f6] dark:hover:bg-[#1a1a1a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#059669]"
    >
      {/* Evita mismatch de hidratação: ícone neutro até montar */}
      {mounted ? (
        isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4 opacity-0" />
      )}
    </button>
  );
};

export default ThemeToggle;
