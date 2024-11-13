import { useTranslations } from 'next-intl';

const Header = () => {
  const t = useTranslations('NosotrosPage.Header');

  return (
    <div className="relative py-24">
      {/* Background overlay with dots or pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, gray 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            {t('subtitle')}
          </p>
          <div className="flex justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <span className="text-3xl font-bold text-primary">
                {t('stats.experience.value')}
              </span>
              <p className="text-muted-foreground">
                {t('stats.experience.label')}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <span className="text-3xl font-bold text-primary">
                {t('stats.projects.value')}
              </span>
              <p className="text-muted-foreground">
                {t('stats.projects.label')}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <span className="text-3xl font-bold text-primary">
                {t('stats.clients.value')}
              </span>
              <p className="text-muted-foreground">
                {t('stats.clients.label')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header; 