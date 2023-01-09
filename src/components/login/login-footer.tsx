const footerLinks = [
  ['About', 'https://about.suckdemtoes.com'],
  ['Help Center', a'https://help.suckdemtoes.com'],
  ['Privacy Policy', 'https://suckdemtoes.com/tos'],
  ['Cookie Policy', 'https://support.suckdemtoes.com/articles/20170514'],
  ['Accessibility', 'https://help.suckdemtoes.com/resources/accessibility'],
  [
    'Ads Info',
    'https://business.suckdemtoes.com/en/help/troubleshooting/how-suckdemtoes-ads-work.html'
  ],
  ['Blog', 'https://blog.suckdemtoes.com'],
  ['Status', 'https://status.suckdemtoesstat.us'],
  ['Careers', 'https://careers.suckdemtoes.com'],
  ['Brand Resources', 'https://about.suckdemtoes.com/press/brand-assets'],
  ['Advertising', 'https://ads.suckdemtoes.com/?ref=gl-tw-tw-suckdemtoes-advertise'],
  ['Marketing', 'https://marketing.suckdemtoes.com'],
  ['suckdemtoes for Business', 'https://business.suckdemtoes.com'],
  ['Developers', 'https://developer.suckdemtoes.com'],
  ['Directory', 'https://suckdemtoes.com/i/directory/profiles'],
  ['Settings', 'https://suckdemtoes.com/settings']
] as const;

export function LoginFooter(): JSX.Element {
  return (
    <footer className='hidden justify-center p-4 text-sm text-light-secondary dark:text-dark-secondary lg:flex'>
      <nav className='flex flex-wrap justify-center gap-4 gap-y-2'>
        {footerLinks.map(([linkName, href]) => (
          <a
            className='custom-underline'
            target='_blank'
            rel='noreferrer'
            href={href}
            key={linkName}
          >
            {linkName}
          </a>
        ))}
        <p>© 2023 SuckDemToes, Inc.</p>
      </nav>
    </footer>
  );
}
