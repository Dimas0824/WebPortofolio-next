// Plain component for future use by ProjectsSection (Todo 7)
export type BreadcrumbItem = { title: string; href?: string };

const Breadcrumbs: React.FC<{ items: BreadcrumbItem[] }> = ({ items }) => {
    if (!items || items.length === 0) return null;

    return (
        <nav aria-label="Breadcrumb" className="text-[12px] mb-4">
            <ol className="flex items-center gap-2">
                {items.map((it, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                        {it.href ? (
                            <a href={it.href} className="text-[#666] hover:text-[#C2996B]">{it.title}</a>
                        ) : (
                            <span className="text-[#111] font-semibold">{it.title}</span>
                        )}
                        {idx < items.length - 1 && <span className="opacity-50">/</span>}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
