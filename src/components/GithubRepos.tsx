import { useQuery } from '@tanstack/react-query';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Star, GitFork, ArrowUpRight, Github } from 'lucide-react';

const GITHUB_USER = 'luizHScotta';

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  updated_at: string;
}

// Cores aproximadas por linguagem (padrão GitHub)
const langColor: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  Java: '#b07219',
  'C++': '#f34b7d',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
};

async function fetchRepos(): Promise<Repo[]> {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`,
    { headers: { Accept: 'application/vnd.github+json' } },
  );
  if (!res.ok) throw new Error(`GitHub API: ${res.status}`);
  const data: Repo[] = await res.json();
  return data
    .filter((r) => !r.fork && r.name.toLowerCase() !== GITHUB_USER.toLowerCase())
    .sort((a, b) => {
      if (b.stargazers_count !== a.stargazers_count) return b.stargazers_count - a.stargazers_count;
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    })
    .slice(0, 6);
}

const SectionHeading = () => (
  <div className="mb-12 reveal">
    <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#059669] dark:text-[#34d399] mb-2">// github</p>
    <h2 className="text-4xl md:text-5xl font-black tracking-[-0.03em] text-[#111] dark:text-white">Atividade no GitHub</h2>
  </div>
);

const Skeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {Array.from({ length: 6 }).map((_, i) => (
      <div key={i} className="border border-[#e5e7eb] dark:border-[#262626] rounded-md p-5 animate-pulse">
        <div className="h-4 w-2/3 bg-[#eee] dark:bg-[#1f1f1f] rounded mb-3" />
        <div className="h-3 w-full bg-[#f1f1f1] dark:bg-[#191919] rounded mb-2" />
        <div className="h-3 w-4/5 bg-[#f1f1f1] dark:bg-[#191919] rounded" />
      </div>
    ))}
  </div>
);

const GithubRepos = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['github-repos'],
    queryFn: fetchRepos,
    staleTime: 1000 * 60 * 30, // 30 min
    retry: 1,
  });

  return (
    <section id="github" className="py-20 bg-white dark:bg-[#0a0a0a] border-b border-[#f3f4f6] dark:border-[#1a1a1a]">
      <div className="container max-w-7xl px-4 md:px-6">
        <SectionHeading />

        {isLoading && <Skeleton />}

        {isError && (
          <div className="border border-[#e5e7eb] dark:border-[#262626] rounded-md p-8 text-center">
            <p className="text-sm text-[#666] dark:text-[#9ca3af] mb-4">
              Não foi possível carregar os repositórios agora.
            </p>
            <a
              href={`https://github.com/${GITHUB_USER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#059669] dark:text-[#34d399] hover:underline"
            >
              <Github className="h-4 w-4" /> Ver perfil no GitHub
            </a>
          </div>
        )}

        {data && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col border border-[#e5e7eb] dark:border-[#262626] rounded-md p-5 hover:border-[#059669] dark:hover:border-[#34d399] transition-colors h-full"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-sm font-bold text-[#111] dark:text-white truncate">{repo.name}</h3>
                    <ArrowUpRight className="h-4 w-4 text-[#999] dark:text-[#666] group-hover:text-[#059669] dark:group-hover:text-[#34d399] flex-shrink-0 transition-colors" />
                  </div>

                  <p className="text-sm text-[#666] dark:text-[#9ca3af] leading-relaxed flex-grow mb-4">
                    {repo.description || 'Sem descrição.'}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-[#888] dark:text-[#777]">
                    {repo.language && (
                      <span className="inline-flex items-center gap-1.5">
                        <span
                          className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                          style={{ background: langColor[repo.language] || '#888' }}
                        />
                        {repo.language}
                      </span>
                    )}
                    {repo.stargazers_count > 0 && (
                      <span className="inline-flex items-center gap-1"><Star className="h-3.5 w-3.5" />{repo.stargazers_count}</span>
                    )}
                    {repo.forks_count > 0 && (
                      <span className="inline-flex items-center gap-1"><GitFork className="h-3.5 w-3.5" />{repo.forks_count}</span>
                    )}
                    <span className="ml-auto">
                      {formatDistanceToNow(new Date(repo.updated_at), { addSuffix: true, locale: ptBR })}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12">
              <a
                href={`https://github.com/${GITHUB_USER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#111] dark:bg-white text-white dark:text-[#0a0a0a] text-sm font-bold px-5 py-3 rounded hover:bg-[#059669] dark:hover:bg-[#34d399] transition-colors"
              >
                <Github className="h-4 w-4" /> Ver perfil completo
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default GithubRepos;
